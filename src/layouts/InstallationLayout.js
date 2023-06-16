import { BasicLayout } from '@/layouts/BasicLayout'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconContainer } from '@/components/home/common'

let tabs = {
  'P2P\'s Goal': '/docs/installation',
}

let readNext = [
  {
    title: 'Naval Ravikant',
    href: '/docs/navalmanack_naval_ravikant_22',
    body: () => (
      <p>
        The co-founder, chairman and former CEO of AngelList.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: 'Naval Ravikant',
    href: '/docs/navalmanack_naval_ravikant_22',
    body: () => (
      <p>
        The co-founder, chairman and former CEO of AngelList.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: 'Naval Ravikant',
    href: '/docs/navalmanack_naval_ravikant_22',
    body: () => (
      <p>
        The co-founder, chairman and former CEO of AngelList.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: 'Naval Ravikant',
    href: '/docs/navalmanack_naval_ravikant_22',
    body: () => (
      <p>
        The co-founder, chairman and former CEO of AngelList.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: 'Naval Ravikant',
    href: '/docs/navalmanack_naval_ravikant_22',
    body: () => (
      <p>
        The co-founder, chairman and former CEO of AngelList.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: 'Naval Ravikant',
    href: '/docs/navalmanack_naval_ravikant_22',
    body: () => (
      <p>
        The co-founder, chairman and former CEO of AngelList.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
]

export function InstallationLayout({ children }) {
  let router = useRouter()

  return (
    <BasicLayout>
      <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            About P2P
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Get started with P2P
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
          At P2P, our mission is to distill short and simple principles from the world's most influential thinkers. 
          We understand that books are filled with a wealth of knowledge, but we also recognize that 90% of the value and impact can come from just a few pages. 
          That's why we meticulously filter, distill and design concise principles that capture the essence of what you need to know. 
          
          </p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
          Short actionable insights that you can apply to your life.
          </p>
        </div>
      </header>
      <section className="mb-16 relative">
        <div className="relative z-10">
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
                {Object.entries(tabs).map(([name, href]) => (
                  <li key={name}>
                    <h2>
                      <Link
                        href={href}
                        scroll={false}
                        className={clsx(
                          'flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px',
                          href === router.pathname
                            ? 'text-sky-500 border-current'
                            : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700'
                        )}
                      >
                        {name}
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </section>

      <section className="relative">
        <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
          Where to start
        </h2>
        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
          <p>
            Get familiar with some of the core concepts from these 6 great minds.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
          {readNext.map((item) => (
            <li key={item.title} className="relative flex items-start">
              <IconContainer
                className={clsx('flex-none', item.icon.className)}
                light={item.icon.light}
                dark={item.icon.dark}
              />
              <div className="peer group flex-auto ml-6">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                  <Link
                    href={item.href}
                    className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                  >
                    {item.title}
                    <svg
                      viewBox="0 0 3 6"
                      className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                  <item.body />
                </div>
              </div>
              <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
            </li>
          ))}
        </ul>
      </section>
    </BasicLayout>
  )
}
