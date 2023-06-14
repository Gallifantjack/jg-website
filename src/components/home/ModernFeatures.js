import {
  IconContainer,
  Caption,
  BigText,
  Paragraph,
  Link,
  Widont,
  InlineCode,
} from '@/components/home/common'
import { Tabs } from '@/components/Tabs'
import { CodeWindow, getClassNameForToken } from '@/components/CodeWindow'
import { Fragment, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { GridLockup } from '../GridLockup'
import { lines as gridSample } from '../../samples/grid.html?highlight'
import { lines as transformsSample } from '../../samples/transforms.html?highlight'
import { lines as filtersSample } from '../../samples/filters.html?highlight'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'

import { ReactComponent as AdonisLogo } from '@/img/guides/adonis.svg'
import { ReactComponent as AngularLogoWhite } from '@/img/guides/angular-white.svg'
import { ReactComponent as AngularLogo } from '@/img/guides/angular.svg'
import { ReactComponent as AstroLogoWhite } from '@/img/guides/astro-white.svg'
import { ReactComponent as AstroLogo } from '@/img/guides/astro.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'
import { ReactComponent as EmberLogo } from '@/img/guides/ember.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as MeteorLogo } from '@/img/guides/meteor.svg'
import { ReactComponent as NextJsLogoWhite } from '@/img/guides/nextjs-white.svg'
import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as ParcelLogo } from '@/img/guides/parcel.svg'
import { ReactComponent as PhoenixLogo } from '@/img/guides/phoenix.svg'
import { ReactComponent as RailsLogoWhite } from '@/img/guides/rails-white.svg'
import { ReactComponent as RailsLogo } from '@/img/guides/rails.svg'
import { ReactComponent as RemixLogoWhite } from '@/img/guides/remix-white.svg'
import { ReactComponent as RemixLogo } from '@/img/guides/remix.svg'
import { ReactComponent as SolidJSLogo } from '@/img/guides/solidjs.svg'
import { ReactComponent as SvelteLogo } from '@/img/guides/svelte.svg'
import { ReactComponent as SymfonyLogoWhite } from '@/img/guides/symfony-white.svg'
import { ReactComponent as SymfonyLogo } from '@/img/guides/symfony.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'

const lines = {
  'CSS Grid': gridSample,
  Transforms: transformsSample,
  Filters: filtersSample,
}

const tabs = {
  'CSS Grid': (selected) => (
    <>
      <path
        d="M5 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM5 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM19 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM33 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM19 13a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3v-6Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  Transforms: (selected) => (
    <>
      <path
        d="M5.632 11.725a3 3 0 0 1 2.554-3.388l3.96-.557a3 3 0 0 1 3.389 2.554l.835 5.941a3 3 0 0 1-2.553 3.388l-3.961.557a3 3 0 0 1-3.389-2.553l-.835-5.942ZM1 29a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6ZM20 34a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM36.728 27.026a3 3 0 0 1 3.558-2.31l3.913.831a3 3 0 0 1 2.31 3.558l-1.247 5.87a3 3 0 0 1-3.558 2.31l-3.913-.832a3 3 0 0 1-2.31-3.558l1.247-5.869ZM22.236 9.17a3 3 0 0 1 3.202-2.783l17.956 1.255a3 3 0 0 1 2.784 3.202l-.419 5.986a3 3 0 0 1-3.202 2.783l-17.956-1.255a3 3 0 0 1-2.784-3.202l.419-5.986Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  Filters: (selected) => (
    <>
      <path
        d="M31 30c0-7.18-5.82-13-13-13m-5.009 1C8.298 19.961 5 24.596 5 30c0 7.18 5.82 13 13 13 5.404 0 10.039-3.298 12-7.991"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="30"
        cy="18"
        r="13"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m26 30 4-4M21 27l6-6M18 22l4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
}

function Block({ src, filter, ...props }) {
  return (
    <motion.div initial={false} {...props}>
      <div
        className={clsx(
          'relative pt-full bg-white rounded-lg shadow-lg overflow-hidden transition-[filter] duration-500',
          filter
        )}
      >
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}

export function ModernFeatures() {
  return (
    <section id="modern-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-indigo-500 dark:highlight-white/20"
          light={require('@/img/icons/home/modern-features.png').default.src}
          dark={require('@/img/icons/home/dark/modern-features.png').default.src}
        />
        <Caption className="text-indigo-500 dark:text-indigo-400">Modern features</Caption>
        <BigText>
          <Widont>Cutting-edge is our comfort zone.</Widont>
        </BigText>
        <Paragraph as="div">
          <p>
            Tailwind is unapologetically modern, and takes advantage of all the latest and greatest
            CSS features to make the developer experience as enjoyable as possible.
          </p>
          <p>
            We've got first-class CSS grid support, composable transforms and gradients powered by
            CSS variables, support for modern state selectors like{' '}
            <InlineCode>:focus-visible</InlineCode>, and tons more.
          </p>
        </Paragraph>
        <Link href="/docs/grid-template-columns" color="indigo" darkColor="gray">
          Learn more<span className="sr-only">, grid template columns</span>
        </Link>
        <ul className="grid mt-10 grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              name: 'Naval Ravikant',
              slug: 'nextjs',
              description: 'Full-featured React framework with great developer experience.',
              logo: NextJsLogo,
              logoDark: NextJsLogoWhite,
            },
            {
              name: 'Steve Jobs',
              slug: 'laravel',
              description: 'PHP web application framework with expressive, elegant syntax.',
              logo: LaravelLogo,
            },
            {
              name: 'Mark Zuckerberg',
              slug: 'vite',
              description: 'Fast and modern development server and build tool.',
              logo: ViteLogo,
            },
            {
              name: 'Esther Perel',
              slug: 'nuxtjs',
              description: 'Intuitive Vue framework for building universal applications.',
              logo: NuxtJsLogo,
            },
            {
              name: 'TIm Ferriss',
              slug: 'gatsby',
              description: 'Framework for building static sites with React and GraphQL.',
              logo: GatsbyLogo,
            },
            {
              name: 'Elon Musk',
              slug: 'solidjs',
              description: 'A tool for building simple, performant, and reactive user interfaces.',
              logo: SolidJSLogo,
            },
            {
              name: 'Bill Gates',
              slug: 'sveltekit',
              description: 'The fastest way to build apps of all sizes with Svelte.js.',
              logo: SvelteLogo,
            },
            {
              name: 'Marcus Aurelius',
              slug: 'angular',
              description: 'Platform for building mobile and desktop web applications.',
              logo: AngularLogo,
              logoDark: AngularLogoWhite,
            },
            {
              name: 'Ryan Holiday',
              slug: 'ruby-on-rails',
              description:
                'Full-stack framework with all the tools needed to build amazing web apps.',
              logo: RailsLogo,
              logoDark: RailsLogoWhite,
            },
            ,
          ].map(({ name, description, logo: Logo, logoDark: LogoDark, slug }) => (
            <li key={name} className="relative flex flex-row-reverse">
              <div className="peer group ml-6 flex-auto">
                <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                  <Link
                    href={`/docs/guides/${slug}`}
                    className="before:absolute before:-inset-3 before:rounded-2xl"
                  >
                    {name}
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
                </h4>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                  {description}
                </p>
              </div>
              <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                {LogoDark !== undefined ? (
                  <>
                    <Logo className="block dark:hidden" />
                    <LogoDark className="hidden dark:block" />
                  </>
                ) : (
                  <Logo className="dark:block" />
                )}
              </div>
              <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

ModernFeatures.layoutProps = {
  meta: {
    title: 'Framework Guides',
    description:
      'Framework-specific guides that cover our recommended approach to installing Tailwind CSS in a number of popular environments.',
    section: 'Business',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
