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

function Header() {
  return (
    <header className="relative">
      {/* Navigation Bar at the Top */}
      <div className="relative z-10 pt-6 lg:pt-8 flex items-center justify-between font-semibold text-sm leading-6 text-slate-200">
        {/* Logo */}
        <Logo className="w-auto h-5" />

        {/* Navigation Items */}
        <div className="flex items-center">
          <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
          <div className="hidden md:flex items-center">
            <nav className="text-sm leading-6x font-semibold text-slate-200">
              <ul className="flex space-x-8">
                <NavItems />
              </ul>
            </nav>
            <div className="flex items-center border-l  ml-6 pl-6 border-slate-800">
              <a href="https://github.com/gallifantjack" className="ml-6 block text-slate-400  hover:text-slate-300">
                {/* GitHub Icon and Link */}
              </a>
            </div>
          </div>
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
          Alignment |  AI | Healthcare 
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
        <Research_index />
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
