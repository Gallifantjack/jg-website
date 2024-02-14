import * as path from 'path'
import { createLoader } from 'simple-functional-loader'
import frontMatter from 'front-matter'
import withSmartQuotes from '@silvenon/remark-smartypants'
import { withTableOfContents } from './remark/withTableOfContents.mjs'
import { withSyntaxHighlighting } from './remark/withSyntaxHighlighting.mjs'
import { withLinkRoles } from './rehype/withLinkRoles.mjs'
import minimatch from 'minimatch'
import withExamples from './remark/withExamples.mjs'
import {
  highlightCode,
  fixSelectorEscapeTokens,
  simplifyToken,
  normalizeTokens,
} from './remark/utils.mjs'
import { recmaImportImages } from './recma/importImages.mjs'
import resolveConfig from 'tailwindcss/resolveConfig.js'
import tailwindDefaultConfig from 'tailwindcss/defaultConfig.js'
import dlv from 'dlv'
import Prism from 'prismjs'
import corePlugins from 'tailwindcss/lib/corePlugins.js'
import * as fs from 'fs'
import negateValue from 'tailwindcss/lib/util/negateValue.js'
import nameClass from 'tailwindcss/lib/util/nameClass.js'
import { createRequire } from 'node:module'
import * as url from 'node:url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const require = createRequire(import.meta.url)

const defaultConfig = resolveConfig(tailwindDefaultConfig)

const fallbackLayouts = {
  'src/pages/docs/**/*': ['@/layouts/DocumentationLayout', 'DocumentationLayout'],
}

const fallbackDefaultExports = {
  'src/pages/{docs,components}/**/*': ['@/layouts/ContentsLayout', 'ContentsLayout'],
  'src/pages/blog/**/*': ['@/layouts/BlogPostLayout', 'BlogPostLayout'],
  'src/pages/showcase/**/*': ['@/layouts/ShowcaseLayout', 'ShowcaseLayout'],
}

const fallbackGetStaticProps = {}

export default {
  swcMinify: true,
  pageExtensions: ['js', 'jsx'],
  experimental: {
    esmExternals: false,
    scrollRestoration: true,
  },
  async redirects() {
    return JSON.parse(fs.readFileSync(require.resolve('./redirects.json'), 'utf8'))
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp4$/i,
      issuer: /\.(jsx?|tsx?)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[sha1:hash].[ext]',
          },
        },
      ],
    })

    config.resolve.alias['defaultConfig$'] = require.resolve('tailwindcss/defaultConfig')
    config.module.rules.push({
      test: require.resolve('tailwindcss/defaultConfig'),
      use: createLoader(function (_source) {
        return `export default ${JSON.stringify(defaultConfig)}`
      }),
    })

    config.resolve.alias['utilities$'] = require.resolve('tailwindcss/lib/corePlugins.js')

    // import utilities from 'utilities?plugin=backgroundColor'
    config.module.rules.push({
      resourceQuery: /plugin/,
      test: require.resolve('tailwindcss/lib/corePlugins.js'),
      use: createLoader(function (_source) {
        let pluginName = new URLSearchParams(this.resourceQuery).get('plugin')
        let plugin = corePlugins.corePlugins[pluginName]
        return `export default ${JSON.stringify(getUtilities(plugin))}`
      }),
    })

    config.module.rules.push({
      resourceQuery: /examples/,
      test: require.resolve('tailwindcss/lib/corePlugins.js'),
      use: createLoader(function (_source) {
        let plugins = corePlugins.corePlugins
        let examples = Object.entries(plugins).map(([name, plugin]) => {
          let utilities = getUtilities(plugin)
          return {
            plugin: name,
            example:
              Object.keys(utilities).length > 0
                ? Object.keys(utilities)
                    [Math.floor((Object.keys(utilities).length - 1) / 2)].split(/[>:]/)[0]
                    .trim()
                    .substr(1)
                    .replace(/\\/g, '')
                : undefined,
          }
        })
        return `export default ${JSON.stringify(examples)}`
      }),
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: '@svgr/webpack', options: { svgoConfig: { plugins: { removeViewBox: false } } } },
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[sha1:hash].[ext]',
          },
        },
      ],
    })

    // Remove the 3px deadzone for drag gestures in Framer Motion
    config.module.rules.push({
      test: /node_modules\/framer-motion/,
      use: createLoader(function (source) {
        return source.replace(
          /var isDistancePastThreshold = .*?$/m,
          'var isDistancePastThreshold = true'
        )
      }),
    })

    config.module.rules.push({
      resourceQuery: /fields/,
      use: createLoader(function (source) {
        let fields = new URLSearchParams(this.resourceQuery).get('fields').split(',')
        return JSON.stringify(JSON.parse(source), (key, value) => {
          return ['', ...fields].includes(key) ? value : undefined
        })
      }),
    })

    config.module.rules.push({
      resourceQuery: /highlight/,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          let lang =
            new URLSearchParams(this.resourceQuery).get('highlight') ||
            this.resourcePath.split('.').pop()
          let isDiff = lang.startsWith('diff-')
          let prismLang = isDiff ? lang.substr(5) : lang
          let grammar = Prism.languages[isDiff ? 'diff' : prismLang]
          let tokens = Prism.tokenize(source, grammar, lang)

          if (lang === 'css') {
            fixSelectorEscapeTokens(tokens)
          }

          return `
            export const tokens = ${JSON.stringify(tokens.map(simplifyToken))}
            export const lines = ${JSON.stringify(normalizeTokens(tokens))}
            export const code = ${JSON.stringify(source)}
            export const highlightedCode = ${JSON.stringify(highlightCode(source, lang))}
          `
        }),
      ],
    });

    return config
  },
}

function normalizeProperties(input) {
  if (typeof input !== 'object') return input
  if (Array.isArray(input)) return input.map(normalizeProperties)
  return Object.keys(input).reduce((newObj, key) => {
    let val = input[key]
    let newVal = typeof val === 'object' ? normalizeProperties(val) : val
    newObj[key.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1}-${p2.toLowerCase()}`)] = newVal
    return newObj
  }, {})
}

function getUtilities(plugin, { includeNegativeValues = false } = {}) {
  if (!plugin) return {}
  const utilities = {}

  function addUtilities(utils) {
    utils = Array.isArray(utils) ? utils : [utils]
    for (let i = 0; i < utils.length; i++) {
      for (let prop in utils[i]) {
        for (let p in utils[i][prop]) {
          if (p.startsWith('@defaults')) {
            delete utils[i][prop][p]
          }
        }
        utilities[prop] = normalizeProperties(utils[i][prop])
      }
    }
  }

  plugin({
    addBase: () => {},
    addDefaults: () => {},
    addComponents: () => {},
    corePlugins: () => true,
    prefix: (x) => x,
    config: (option, defaultValue) => (option ? defaultValue : { future: {} }),
    addUtilities,
    theme: (key, defaultValue) => dlv(defaultConfig.theme, key, defaultValue),
    matchUtilities: (matches, { values, supportsNegativeValues } = {}) => {
      if (!values) return

      let modifierValues = Object.entries(values)

      if (includeNegativeValues && supportsNegativeValues) {
        let negativeValues = []
        for (let [key, value] of modifierValues) {
          let negatedValue = negateValue.default(value)
          if (negatedValue) {
            negativeValues.push([`-${key}`, negatedValue])
          }
        }
        modifierValues.push(...negativeValues)
      }

      let result = Object.entries(matches).flatMap(([name, utilityFunction]) => {
        return modifierValues
          .map(([modifier, value]) => {
            let declarations = utilityFunction(value, {
              includeRules(rules) {
                addUtilities(rules)
              },
            })

            if (!declarations) {
              return null
            }

            return {
              [nameClass.default(name, modifier)]: declarations,
            }
          })
          .filter(Boolean)
      })

      for (let obj of result) {
        for (let key in obj) {
          let deleteKey = false
          for (let subkey in obj[key]) {
            if (subkey.startsWith('@defaults')) {
              delete obj[key][subkey]
              continue
            }
            if (subkey.includes('&')) {
              result.push({
                [subkey.replace(/&/g, key)]: obj[key][subkey],
              })
              deleteKey = true
            }
          }

          if (deleteKey) delete obj[key]
        }
      }

      addUtilities(result)
    },
  })
  return utilities
}