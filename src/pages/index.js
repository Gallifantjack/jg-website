import { NavItems, NavPopover } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { SearchButton } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Footer } from '@/components/home/Footer'
import socialCardLarge from '@/img/social-card-large.jpg'
import About_index from '@/pages/docs/about_index'
import Tedx_index from '@/pages/docs/tedx_index'
import clsx from 'clsx'
import Head from 'next/head'
import NextLink from 'next/link'
import Hero from './docs/Hero'
import styles from './index.module.css'

function Header() {
  return (
    <header className="relative">
      <div className="px-4 pb-20 sm:px-6 md:px-8">
        <div
          className={clsx(
            'absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
            styles.beams
          )}
        >
          <div
            className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        </div>
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
          <Logo className="w-auto h-5" />
          <div className="flex items-center">
            <SearchButton className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300">
              <span className="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </SearchButton>
            <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
            <div className="hidden md:flex items-center">
              <nav>
                <ul className="flex items-center gap-x-8">
                  <NavItems />
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <ThemeToggle />
                {/* GitHub Link */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Jack Gallifant
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            I'm focused on{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              Recoding Neural Networks{' '}
            </code>
            to bridge the gap between biological and artificial systems. Through causality and
            computational models, I aim to{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              decode the complexities of consciousness{' '}
            </code>
            and contribute to{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              equitable healthcare solutions.
            </code>
          </p>
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <NextLink
              href="/docs/installation"
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            >
              Get started
            </NextLink>
            <SearchButton className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
              {({ actionKey }) => (
                <>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-slate-300 dark:text-slate-400"
                    aria-hidden="true"
                  >
                    <path d="m19 19-3.5-3.5" />
                    <circle cx="11" cy="11" r="6" />
                  </svg>
                  <span className="flex-auto">Quick search...</span>
                  {actionKey && (
                    <kbd className="font-sans font-semibold dark:text-slate-500">
                      <abbr
                        title={actionKey[1]}
                        className="no-underline text-slate-300 dark:text-slate-500"
                      >
                        {actionKey[0]}
                      </abbr>{' '}
                      K
                    </kbd>
                  )}
                </>
              )}
            </SearchButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content="Jack Gallifant" />
        <meta key="og:title" property="og:title" content="Jack Gallifant" />
        <title>Jack Gallifant</title>
      </Head>
      <div className="mb-20  sm:mb-32 md:mb-40">
        <Header />
      </div>
      <div className="relative">
        <Hero />
      </div>
      <div className="pt-20 mb-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-40 md:mb-40 md:gap-y-40">
        <About_index />
        <Tedx_index />
      </div>
      <Footer />
    </>
  )
}

Home.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
  },
}
