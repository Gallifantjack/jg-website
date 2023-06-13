import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  Business: [pages['managing_oneself_drucker_99']],
  History: [pages['managing_oneself_drucker_99']],
  Philosophy: [pages['managing_oneself_drucker_99']],
  Economics: [pages['history_test']],
}
