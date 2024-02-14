import { Footer } from '@/components/Footer'
import { NavItems, NavPopover } from '@/components/Header'
import { Logo } from '@/components/Logo'
import socialCardLarge from '@/img/social-card-large.jpg'
import About_index from '@/pages/docs/about_index'
import clsx from 'clsx'
import Head from 'next/head'
import styles from './index.module.css'
import News_section from './docs/news'
import Research_index from './docs/research_focus'
import Featured_work from './docs/Featured_work_index'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'


export function Header({ hasNav = false, navIsOpen, onNavToggle, title, section }) {
  let [isOpaque, setIsOpaque] = useState(false)

  useEffect(() => {
    let offset = 50
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [isOpaque])

  return (
    <header className="relative dark">
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcSet={require('@/img/beams/docs@30.avif').default.src} type="image/avif" />
            <img
              src={require('@/img/beams/docs@tinypng.png').default.src}
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet={require('@/img/beams/docs-dark@30.avif').default.src}
              type="image/avif"
            />
            <img
              src={require('@/img/beams/docs-dark@tinypng.png').default.src}
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div
        className={clsx(
          'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]',
          isOpaque
            ? 'bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
            : 'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
        )}
      >
        <div className="max-w-8xl mx-auto">
          <div
            className={clsx(
              'py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10',
              hasNav ? 'mx-4 lg:mx-0' : 'px-4'
            )}
          >
            <div className="relative flex items-center">
              <Link
                href="/"
                className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                onContextMenu={(e) => {
                  e.preventDefault()
                  Router.push('/brand')
                }}
              >
                <span className="sr-only">JG home page</span>
                <Logo className="w-auto h-5" />
              </Link>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <NavItems />
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <a
                    href="https://www.linkedin.com/in/jackgallifant/"
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Github</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/gallifantjack"
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Github</span>
                    <svg
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
              <NavPopover className="ml-2 -my-1" display="lg:hidden" />
            </div>
          </div>
          {hasNav && (
            <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
              <button
                type="button"
                onClick={() => onNavToggle(!navIsOpen)}
                className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24">
                  <path
                    d="M5 6h14M5 12h14M5 18h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {title && (
                <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                  {section && (
                    <li className="flex items-center">
                      {section}
                      <svg
                        width="3"
                        height="6"
                        aria-hidden="true"
                        className="mx-3 overflow-visible text-slate-400"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </li>
                  )}
                  <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
                    {title}
                  </li>
                </ol>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Background with Centered Hero Text */}
      <div className="flex flex-col min-h-screen">
        <div
          className={clsx(
            'flex-grow flex items-center justify-center',
            'absolute inset-0 bg-bottom bg-no-repeat  bg-[#0B1120]',
            styles.beams
          )}
        >
          <div className="bg-grid-slate-400/[0.05] bg-bottom border-b border-slate-100/5"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        {/* Hero Text */}
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-200">
            Jack Gallifant
          </h1>
          <p className="mt-6 text-2xl max-w-3xl mx-auto text-sky-500">
          Alignment | AI | Healthcare 
          </p>
          <p className="mt-3 text-lg max-w-3xl mx-auto text-gray-300">
            Massachusetts Institute of Technology
          </p>
        </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content="Jack Gallifant" />
        <meta key="og:title" property="og:title" content="Jack Gallifant" />
        <title>Jack Gallifant | AI Alignment</title>
      </Head>
      <div>
        <Header />
      </div>
      <div className="flex flex-col overflow-hidden">
        <About_index />
        <Research_index/>
        <News_section />
        <Featured_work />
      </div>
      <footer className="pt-20 sm:pt-32 text-center pb-16">
        <Footer.Content />
      </footer>
    </>
  )
}

Home.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
  },
}
