import { IconContainer, Caption, BigText, Paragraph, Link } from '@/components/home/common'
import { CodeWindow, getClassNameForToken } from '@/components/CodeWindow'
import { motion } from 'framer-motion'
import { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import colors from 'tailwindcss/colors'
import dlv from 'dlv'
import { GridLockup } from '../GridLockup'
import { lines } from '../../samples/editor-tools.html?highlight'
import clsx from 'clsx'


const problems = [
  ["'flex' applies the same CSS property as 'block'.", 'cssConflict [1, 20]'],
  ["'block' applies the same CSS property as 'flex'.", 'cssConflict [1, 54]'],
]

const completions = [
  //
  ['sm:', '@media (min-width: 640px)'],
  ['md:'],
  ['lg:'],
  ['xl:'],
  ['focus:'],
  ['group-hover:'],
  ['hover:'],
  ['container'],
  ['space-y-0'],
  ['space-x-0'],
  ['space-y-1'],
  ['space-x-1'],
  //
  ['bg-fixed', 'background-position: fixed;'],
  ['bg-local'],
  ['bg-scroll'],
  ['bg-clip-border'],
  ['bg-clip-padding'],
  ['bg-clip-content'],
  ['bg-clip-text'],
  ['bg-transparent', 'background-color: transparent;'],
  ['bg-current'],
  ['bg-black', '#000'],
  ['bg-white', '#fff'],
  ['bg-gray-50', colors.gray[50]],
  //
  ['bg-teal-50', `background-color: ${colors.teal[50]};`, colors.teal[50]],
  ['bg-teal-100', `background-color: ${colors.teal[100]};`, colors.teal[100]],
  ['bg-teal-200', `background-color: ${colors.teal[200]};`, colors.teal[200]],
  ['bg-teal-300', `background-color: ${colors.teal[300]};`, colors.teal[300]],
  ['bg-teal-400', `background-color: ${colors.teal[400]};`, colors.teal[400]],
  ['bg-teal-500', undefined, colors.teal[500]],
  ['bg-teal-600', undefined, colors.teal[600]],
  ['bg-teal-700', undefined, colors.teal[700]],
  ['bg-teal-800', undefined, colors.teal[800]],
  ['bg-teal-900', undefined, colors.teal[900]],
  ['bg-top'],
]

function CompletionDemo() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <CodeWindow.Code2 ref={ref} lines={lines.length} overflow={false} className="overflow-hidden">
      {lines.map((tokens, lineIndex) => (
        <Fragment key={lineIndex}>
            hi
        </Fragment>
      ))}
    </CodeWindow.Code2>
  )
}

function Completion({ inView }) {
  const [typed, setTyped] = useState('')
  const [selectedCompletionIndex, setSelectedCompletionIndex] = useState(0)
  const [stage, setStage] = useState(-1)

  useEffect(() => {
    if (inView) {
      setStage(0)
    }
  }, [inView])

  useEffect(() => {
    if (typed === ' bg-t') {
      let i = 0
      let id = window.setInterval(() => {
        if (i === 5) {
          setStage(1)
          setTyped('')
          setSelectedCompletionIndex(0)
          return window.clearInterval(id)
        }
        i++
        setSelectedCompletionIndex(i)
      }, 300)
      return () => window.clearInterval(id)
    }
  }, [typed])

  useEffect(() => {
    let id
    if (stage === 1) {
      id = window.setTimeout(() => {
        setStage(2)
      }, 2000)
    } else if (stage === 2 || stage === 3 || stage === 4 || stage === 5) {
      id = window.setTimeout(() => {
        setStage(stage + 1)
      }, 300)
    } else if (stage === 6) {
      id = window.setTimeout(() => {
        setStage(-1)
        setStage(0)
      }, 2000)
    }
    return () => {
      window.clearTimeout(id)
    }
  }, [stage])

  return (
    <span className="token attr-value">
      <span className="hidden sm:inline-flex items-baseline">
        <ColorDecorator color={colors.teal[600]} />
        text-teal-600
        {stage >= 1 && stage < 2 && ' '}
      </span>
      {stage >= 1 && stage < 2 && <ColorDecorator color={colors.teal[400]} />}
      {stage >= 0 &&
        stage < 2 &&
        ' bg-t'
          .split('')
          .filter((char) => (stage >= 1 && stage < 6 ? char !== ' ' : true))
          .map((char, i) => (
            <span key={char} className={char === ' ' ? 'hidden sm:inline' : undefined}>
              <motion.span
                initial={{ display: 'none' }}
                animate={{ display: 'inline' }}
                transition={{ delay: (i + 1) * 0.3 }}
                onAnimationComplete={() => setTyped(typed + char)}
              >
                {char}
              </motion.span>
            </span>
          ))}
      {stage === 1 && 'eal-400'}
      {(stage < 2 || stage === 6) && <span className="border -mx-px h-5" />}
      {stage >= 2 && stage <= 5 && (
        <Fragment key={stage}>
          <span className="hidden sm:inline">{stage < 5 && ' '}</span>
          {stage < 5 && <ColorDecorator color={colors.teal[400]} />}
          {stage >= 4 && <span className="relative border -mx-px h-5" />}
          {stage === 5 && (
            <>
              <span
                className="inline-flex items-baseline"
                style={{ background: 'rgba(81, 92, 126, 0.4)' }}
              >
                <span className="hidden sm:inline">&nbsp;</span>
                &#8203;
                <ColorDecorator color={colors.teal[400]} />
              </span>
            </>
          )}
          <span
            className="inline-flex"
            style={{ background: stage >= 4 ? 'rgba(81, 92, 126, 0.4)' : undefined }}
          >
            bg-
          </span>
          {stage === 3 && <span className="relative border -mx-px h-5" />}
          <span
            className="inline-flex"
            style={{ background: stage >= 3 ? 'rgba(81, 92, 126, 0.4)' : undefined }}
          >
            teal-
          </span>
          {stage === 2 && <span className="relative border -mx-px h-5" />}
          <span
            className="inline-flex"
            style={{ background: stage >= 2 ? 'rgba(81, 92, 126, 0.4)' : undefined }}
          >
            400
          </span>
        </Fragment>
      )}
      {typed && (
        <span className="relative z-10">
          <div className="absolute top-full left-full m-0.5 -ml-16 sm:ml-0.5 rounded-lg shadow-xl">
            <div className="relative w-96 bg-slate-700 overflow-hidden rounded-lg">
              <ul className="relative leading-5 text-white py-3">
                {completions
                  .filter((completion) => completion[0].startsWith(typed.trim()))
                  .slice(0, 12)
                  .map((completion, i) => (
                    <li
                      key={completion[0]}
                      className={clsx('px-3 flex items-center space-x-2', {
                        'bg-slate-600': i === selectedCompletionIndex,
                      })}
                    >
                      <span className="w-5 flex-none flex justify-center">
                        {completion[2] ? (
                          <span
                            className="flex-none w-3 h-3 rounded ring-1 ring-slate-900/30"
                            style={{ background: completion[2] }}
                          />
                        ) : (
                          <svg className="w-5 h-5">
                            <path
                              className="!text-slate-400"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm1 4h10v1H5V8Zm10 3H5v1h10v-1Z"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="flex-none !text-slate-50">
                        {completion[0].split(new RegExp(`(^${typed.trim()})`)).map((part, j) =>
                          part ? (
                            j % 2 === 0 ? (
                              part
                            ) : (
                              <span key={j} className="!text-teal-200">
                                {part}
                              </span>
                            )
                          ) : null
                        )}
                      </span>
                      {i === selectedCompletionIndex && completion[1] ? (
                        <span className="hidden sm:block flex-auto text-right !text-slate-400 truncate pl-4">
                          {completion[1]}
                        </span>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </span>
      )}
    </span>
  )
}

function ColorDecorator({ color }) {
  return (
    <span
      className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
      style={{ background: color }}
    />
  )
}

export function EditorTools() {
  return (
    <section id="editor-tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-sky-500 dark:highlight-white/20"
          light={require('@/img/icons/home/editor-tools.png').default.src}
          dark={require('@/img/icons/home/dark/editor-tools.png').default.src}
        />
        <Caption className="text-sky-500">Editor tools</Caption>
        <BigText>World-class IDE integration.</BigText>
        <Paragraph as="div">
          <p>
            Worried about remembering all of these class names? The Tailwind CSS IntelliSense
            extension for VS Code has you covered.
          </p>
          <p>
            Get intelligent autocomplete suggestions, linting, class definitions and more, all
            within your editor and with no configuration required.
          </p>
        </Paragraph>
        <Link href="/docs/intellisense" color="sky" darkColor="gray">
          Learn more<span className="sr-only">, editor setup</span>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 bg-zinc-950 !h-[39.0625rem]">
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-medium font-mono line-through mb-5 text-gray-50 dark:text-gray-100">
            Facts
            </h3>
            <h3 className="text-2xl font-medium font-mono text-gray-50 dark:text-gray-100">
            Understanding
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
