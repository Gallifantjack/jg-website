import {
  IconContainer,
  Caption,
  BigText,
  Paragraph,
  Link,
  Widont,
  InlineCode,
} from '@/components/home/common'
import clsx from 'clsx'
import { GridLockup } from '../GridLockup'
import { lines as gridSample } from '../../samples/grid.html?highlight'
import { lines as transformsSample } from '../../samples/transforms.html?highlight'
import { lines as filtersSample } from '../../samples/filters.html?highlight'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'

import { ReactComponent as AngularLogoWhite } from '@/img/guides/angular-white.svg'
import { ReactComponent as AngularLogo } from '@/img/guides/angular.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as NextJsLogoWhite } from '@/img/guides/nextjs-white.svg'
import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as NavalLogo } from '@/img/guides/naval.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as RailsLogoWhite } from '@/img/guides/rails-white.svg'
import { ReactComponent as RailsLogo } from '@/img/guides/rails.svg'
import { ReactComponent as SolidJSLogo } from '@/img/guides/solidjs.svg'
import { ReactComponent as SvelteLogo } from '@/img/guides/svelte.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'

export function ModernFeatures() {
  return (
    <section id="modern-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-sky-500 dark:highlight-white/20"
          light={require('@/img/icons/home/component-driven.png').default.src}
          dark={require('@/img/icons/home/dark/component-driven.png').default.src}
        />
        <Caption className="text-sky-500">Leading thinkers</Caption>
        <BigText>
          <Widont>Learn from the Masters.</Widont>
        </BigText>
        <Paragraph>
          P2P has collected the best advice from the best thinkers in the world. Here are some of
          those you can learn from.
        </Paragraph>
        <Link href="/docs/reusing-styles" color="sky" darkColor="gray">
          Learn more<span className="sr-only">, reusing styles</span>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">        
        <div className="my-8 flex-auto flex min-h-0">
          <div className="flex-auto flex flex-col min-w-0">
              <ul className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    name: 'Naval Ravikant',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Founder of AngelList, investor in Twitter, Uber, and 100+ more.',
                    logo: NavalLogo,
                    logoDark: NavalLogo,
                  },
                  {
                    name: 'Steve Jobs',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Founder of Apple, the most valuable company in the world.',
                    logo: LaravelLogo,
                  },
                  {
                    name: 'Mark Zuckerberg',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Founder of Facebook, the most popular social network.',
                    logo: ViteLogo,
                  },
                  {
                    name: 'Esther Perel',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Psychotherapist, author, and speaker.',
                    logo: NuxtJsLogo,
                  },
                  {
                    name: 'TIm Ferriss',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Author of The 4-Hour Workweek and host of The Tim Ferriss Show.',
                    logo: GatsbyLogo,
                  },
                  {
                    name: 'Elon Musk',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Founder of Tesla, SpaceX, and The Boring Company.',
                    logo: SolidJSLogo,
                  },
                  {
                    name: 'Bill Gates',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Founder of Microsoft, the largest software company in the world.',
                    logo: SvelteLogo,
                  },
                  {
                    name: 'Marcus Aurelius',
                    slug: 'managing_oneself_drucker_99',
                    description: 'Roman emperor and Stoic philosopher.',
                    logo: AngularLogo,
                    logoDark: AngularLogoWhite,
                  },
                  {
                    name: 'Ryan Holiday',
                    slug: 'managing_oneself_drucker_99',
                    description:
                      'Author of The Obstacle Is the Way, Ego Is the Enemy, and Stillness Is the Key.',
                    logo: RailsLogo,
                    logoDark: RailsLogoWhite,
                  },
                  ,
                ].map(({ name, description, logo: Logo, logoDark: LogoDark, slug }) => (
                  <li key={name} className="relative flex flex-row-reverse">
                    <div className="peer group ml-6 flex-auto">
                      <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                        <Link
                          href={`/docs/${slug}`}
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
                      <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">{description}</p>
                    </div>
                    <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-700 dark:highlight-white/5">
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
        </div>
      </div>
    </section>
  )
}