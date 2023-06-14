import {
  IconContainer,
  Caption,
  BigText,
  Paragraph,
  Link,
  Widont,
  InlineCode,
} from '@/components/home/common'
import { GridLockup } from '@/components/GridLockup'
import { CodeWindow, getClassNameForToken } from '@/components/CodeWindow'
import { Fragment, useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { useInView } from 'react-intersection-observer'

import { lines as reactMoviesSample } from '../../samples/react/movies.jsx?highlight'
import { lines as reactNavSample } from '../../samples/react/nav.jsx?highlight'
import { lines as reactNavItemSample } from '../../samples/react/nav-item.jsx?highlight'
import { lines as reactListSample } from '../../samples/react/list.jsx?highlight'
import { lines as reactListItemSample } from '../../samples/react/list-item.jsx?highlight'

import { lines as vueMoviesSample } from '../../samples/vue/movies.html?highlight'
import { lines as vueNavSample } from '../../samples/vue/nav.html?highlight'
import { lines as vueNavItemSample } from '../../samples/vue/nav-item.html?highlight'
import { lines as vueListSample } from '../../samples/vue/list.html?highlight'
import { lines as vueListItemSample } from '../../samples/vue/list-item.html?highlight'

import { lines as angularMoviesSample } from '../../samples/angular/movies.js?highlight'
import { lines as angularNavSample } from '../../samples/angular/nav.js?highlight'
import { lines as angularNavItemSample } from '../../samples/angular/nav-item.js?highlight'
import { lines as angularListSample } from '../../samples/angular/list.js?highlight'
import { lines as angularListItemSample } from '../../samples/angular/list-item.js?highlight'

import { lines as bladeMoviesSample } from '../../samples/blade/movies.html?highlight'
import { lines as bladeNavSample } from '../../samples/blade/nav.html?highlight'
import { lines as bladeNavItemSample } from '../../samples/blade/nav-item.html?highlight'
import { lines as bladeListSample } from '../../samples/blade/list.html?highlight'
import { lines as bladeListItemSample } from '../../samples/blade/list-item.html?highlight'

import { lines as css } from '../../samples/apply.txt?highlight=css'
import { lines as html } from '../../samples/apply.html?highlight'

function ComponentExample({ framework }) {
  const [activeTab, setActiveTab] = useState(0)

  useIsomorphicLayoutEffect(() => {
    setActiveTab(0)
  }, [framework])

  return (
    <CodeWindow border={false}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={framework}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-none overflow-auto whitespace-nowrap flex"
        >
          <div className="relative flex-none min-w-full px-1">
            <ul className="flex text-sm leading-6 text-slate-400">{/* Add tabs here */}</ul>
            <div className="absolute bottom-0 inset-x-0 h-px bg-slate-500/30" />
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={framework + activeTab}
          className="w-full flex-auto flex min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CodeWindow.Code2 language="html">
            <strong>Reading List</strong> <br />
            1. HBR at 100 <br />
            2. Principles <br />
            3. Meditations <br />
            4. The Almanack of Naval Ravikant <br />
            5. The Psychology of Money <br />
            6. The Hard Thing About Hard Things <br />
          </CodeWindow.Code2>
        </motion.div>
      </AnimatePresence>
    </CodeWindow>
  )
}

function ComponentLink({ onClick, children }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    function onKey(e) {
      const modifier = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
      if (!active && modifier) {
        setActive(true)
      } else if (active && !modifier) {
        setActive(false)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKey)
    }
  }, [active])

  // Always return a clickable element, whether active is true or false
  return (
    <button type="button" className={active ? "hover:underline" : ""} onClick={onClick}>
      {children}
    </button>
  )
}


function highlightDecorators(lines) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j].types.includes('function') && lines[i][j - 1].content.trim() === '@') {
        lines[i][j - 1].types = ['function']
      }
    }
  }
  return lines
}

export function ComponentDriven() {
  const [framework, setFramework] = useState('React')
  const [selectedTab, setSelectedTab] = useState('New Releases')
  const [sortedMovies, setSortedMovies] = useState([])

  const movies = [
    {
      title: 'Principles',
      starRating: '4.66',
      year: '2021',
      genre: 'Business',
      runtime: '1h 46m',
      Author: 'Ray Dalio',
      image: require('@/img/principles_dalio.jpeg').default.src,
      P2P_pick: 'yes',
      upload_date: new Date('2023-06-08'),
    },
    {
      title: 'Meditations',
      starRating: '3.25',
      year: '2020',
      genre: 'Philosphy',
      runtime: '1h 56m',
      Author: 'Marcus Aurelius',
      image: require('@/img/meditations_aurelius.jpeg').default.src,
      P2P_pick: 'no',
      upload_date: new Date('2023-06-01'),
    },
    {
      title: "Man's Search for Meaning",
      starRating: '4.95',
      year: '2020',
      genre: 'Economics',
      runtime: '2h 5m',
      Author: 'Viktor Frankl',
      image: require('@/img/meaning_frankl.jpeg').default.src,
      P2P_pick: 'yes',
      upload_date: new Date('2023-06-03'),
    },
  ]

  // Run this code when selectedTab changes
  useEffect(() => {
    let newSortedMovies = []
    if (selectedTab === 'New Releases') {
      newSortedMovies = [...movies].sort((a, b) => b.upload_date - a.upload_date)
    } else if (selectedTab === 'Top Rated') {
      newSortedMovies = [...movies].sort(
        (a, b) => parseFloat(b.starRating) - parseFloat(a.starRating)
      )
    } else if (selectedTab === "P2P's Picks") {
      newSortedMovies = movies.filter((movie) => movie.P2P_pick === 'yes')
    }
    setSortedMovies(newSortedMovies)
  }, [selectedTab, movies]) // Include selectedTab and movies as dependencies so the effect runs whenever either changes

  const handleTabChange = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <section id="component-driven">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-sky-500 dark:highlight-white/20"
          light={require('@/img/icons/home/component-driven.png').default.src}
          dark={require('@/img/icons/home/dark/component-driven.png').default.src}
        />
        <Caption className="text-sky-500">Top Rated</Caption>
        <BigText>
          <Widont>Read the Greatest Books.</Widont>
        </BigText>
        <Paragraph>
          Introducing our Book Ranks feature: We curate only the best-rated books, saving you time
          and effort. Discover the highest-ranked titles and explore comprehensive notes from these
          exceptional reads. Unlock valuable insights efficiently and make the most of your reading
          journey.
        </Paragraph>
        <Link href="/docs/reusing-styles" color="sky" darkColor="gray">
          Learn more<span className="sr-only">, reusing styles</span>
        </Link>
      </div>
      <GridLockup.Container className="mt-10 xl:mt-2" beams={8}>
        <GridLockup.Grid
          left={
            <div className="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10">
              <nav className="py-4 px-4 sm:px-6 lg:px-4 xl:px-6 text-sm font-medium">
                <ul className="flex space-x-3">
                  {/* 'New Releases' button */}
                  <div
                    className={
                      selectedTab === 'New Releases'
                        ? 'px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer'
                        : 'px-3 py-2 rounded-md bg-slate-50 cursor-pointer dark:bg-transparent dark:text-slate-300 dark:ring-1 dark:ring-slate-700'
                    }
                  >
                    <ComponentLink onClick={() => handleTabChange('New Releases')}>
                      New<span className="hidden sm:inline lg:hidden xl:inline"> Releases</span>
                    </ComponentLink>
                  </div>

                  {/* 'Top Rated' button */}
                  <div
                    className={
                      selectedTab === 'Top Rated'
                        ? 'px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer'
                        : 'px-3 py-2 rounded-md bg-slate-50 cursor-pointer dark:bg-transparent dark:text-slate-300 dark:ring-1 dark:ring-slate-700'
                    }
                  >
                    <ComponentLink onClick={() => handleTabChange('Top Rated')}>
                      Top<span className="hidden sm:inline"> Rated</span>
                    </ComponentLink>
                  </div>

                  {/* "P2P's Picks" button */}
                  <div
                    className={
                      selectedTab === "P2P's Picks"
                        ? 'px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer'
                        : 'px-3 py-2 rounded-md bg-slate-50 cursor-pointer dark:bg-transparent dark:text-slate-300 dark:ring-1 dark:ring-slate-700'
                    }
                  >
                    <ComponentLink onClick={() => handleTabChange("P2P's Picks")}>
                      P2P's Picks
                    </ComponentLink>
                  </div>
                </ul>
              </nav>
              {sortedMovies.map(
                ({ title, starRating, year, genre, runtime, Author, image }, index) => (
                  <article
                    key={title}
                    className={clsx(
                      'p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6',
                      index < 2 ? 'flex' : 'hidden sm:flex'
                    )}
                  >
                    <img
                      src={image}
                      loading="lazy"
                      decoding="async"
                      alt=""
                      width="60"
                      height="88"
                      className="flex-none rounded-md bg-slate-100"
                    />
                    <div className="min-w-0 relative flex-auto">
                      <h2 className="font-semibold text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                        {title}
                      </h2>
                      <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                        <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                          <dt className="text-sky-500">
                            <span className="sr-only">Star rating</span>
                            <svg width="16" height="20" fill="currentColor">
                              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                          </dt>
                          <dd>{starRating}</dd>
                        </div>
                        <div className="ml0">
                          <dt className="sr-only">Year</dt>
                          <dd>{year}</dd>
                        </div>
                        <div>
                          <dt className="sr-only">Genre</dt>
                          <dd className="flex items-center">
                            <svg
                              width="2"
                              height="2"
                              fill="currentColor"
                              className="mx-2 text-slate-300"
                              aria-hidden="true"
                            >
                              <circle cx="1" cy="1" r="1" />
                            </svg>
                            {genre}
                          </dd>
                        </div>
                        <div>
                          <dt className="sr-only">Runtime</dt>
                          <dd className="flex items-center">
                            <svg
                              width="2"
                              height="2"
                              fill="currentColor"
                              className="mx-2 text-slate-300"
                              aria-hidden="true"
                            >
                              <circle cx="1" cy="1" r="1" />
                            </svg>
                            {runtime}
                          </dd>
                        </div>
                        <div className="flex-none w-full mt-2 font-normal">
                          <dt className="sr-only">Author</dt>
                          <dd className="text-slate-400">{Author}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                )
              )}
            </div>
          }
          right={<ComponentExample framework={framework} />}
        />
      </GridLockup.Container>
    </section>
  )
}
