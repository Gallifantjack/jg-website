import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Business': [
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/(installation|guides)/,
    },
    // TODO: Add these pages
    // pages['tailwind-cli'],
    // { title: 'Play CDN', href: '#' },
    pages['managing_oneself_drucker_99']
  ],
  'Core Concepts': [
    pages['utility-first']
  ],
  Customization: [
    pages['customizing-spacing']
  ],
  'Base Styles': [pages['preflight']],
  Layout: [
    pages['position']
  ],
  'Flexbox & Grid': [
    pages['flex-basis']
  ],
  Spacing: [
    pages['padding']
  ],
  Sizing: [
    pages['max-width'],
  ],
  Typography: [
    pages['font-family']
  ],
  Backgrounds: [
    pages['background-attachment']
  ],
  Borders: [
    pages['border-radius']
  ],
  Effects: [
    pages['box-shadow']
  ],
  Filters: [
    pages['blur']
  ],
  Tables: [
    pages['border-collapse']
  ],
  'Transitions & Animation': [
    pages['animation'],
  ],
  Transforms: [
    pages['skew'],
  ],
  Interactivity: [
    pages['will-change'],
  ],
  SVG: [pages['fill']
],
  Accessibility: [pages['screen-readers']],
  'Official Plugins': [
    pages['typography-plugin']
  ],
}
