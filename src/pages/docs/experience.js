import { useRouter } from 'next/router'
import {
  BigText,
  Caption,
  IconContainer,
  Link,
  Paragraph,
  Widont,
} from '@/components/home/common'
import { Steps } from '@/components/Steps'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'

export function Experience({ children }) {
  let router = useRouter()

  return (
    <section id="my-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-sky-500 dark:highlight-white/30"
          light={require('@/img/icons/home/build-anything.png').default.src}
          dark={require('@/img/icons/home/dark/build-anything.png').default.src}
        />
        <Caption className="text-pink-500 dark:text-pink-400">Experience</Caption>
        <BigText>
          <Widont>Employment.</Widont>
        </BigText>
        <Paragraph>
          I am a{' '}
          <a className="text-pink-500 font-semibold dark:text-pink-400">
            Postdoctoral researcher at MIT{' '}
          </a>{' '}
          working at the Lab for Computational Physiology. I am interested in understanding AI and
          developing tools to deploy AI safely.
        </Paragraph>
        <Paragraph>
          I also work as an honorary researcher at Guys and St Thomas NHS Trust in the department of
          Critical Care and am an active mentor for MIT Critical Data. Clinically, I have previously
          worked as a full-time physician in Imperial College London NHS Trust.
        </Paragraph>
        <Link href="/showcase" color="pink" darkColor="gray">
          See the full portfolio<span className="sr-only">, showcase</span>
        </Link>
      </div>
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative z-10">
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5"></ul>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}

let steps = [
  {
    title: 'Post-Doctoral Researcher @MIT Lab For Computational Physiology',
    body: () => <p>2023-Present | Boston, USA</p>,
    code: {
      name: 'P2P',
      lang: 'terminal',
      code: 'Modern life focuses on increasing input',
    },
  },
  {
    title: 'Principles are timeless',
    body: () => (
      <p>
        It is not about <code>how many</code> books you read but <strong>how</strong> you read.
      </p>
    ),
    code: {
      name: 'P2P',
      lang: 'terminal',
      code: `Principles maximise output`,
    },
  },
  {
    title: 'Re-focussing on output',
    body: () => (
      <p>
        We <strong>condense and clarify</strong> foundational topics starting from first principles,
        giving you guides to navigating complex topics.
      </p>
    ),
    code: {
      name: 'P2P',
      lang: 'terminal',
      code: 'The goal is not facts but understanding.',
    },
  },
  {
    title: 'Re-focussing on output',
    body: () => (
      <p>
        Hard-earned lessons that have been transformed into timeless wisdom. Save yourself hours of
        reading, and learn just what is essential.
      </p>
    ),
    code: {
      name: 'P2P',
      lang: 'terminal',
      code: "P2P's goal is not knowledge but action.",
    },
  },
]

export default function TailwindCli({ code }) {
  return (
    <Experience>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      ></div>
      <Steps level={4} steps={steps} code={code} />
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="font-semibold text-slate-900">
                This is only the beginning of what’s possible with the Tailwind CLI.
              </strong>{' '}
              To learn more about everything it can do, check out the Tailwind CLI documentation.
            </>
          }
        />
      */}
    </Experience>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

TailwindCli.layoutProps = {
  meta: {
    title: 'Background',
    description:
      'I am a Postdoctoral researcher at MIT working at the Lab for Computational Physiology. I am interested in understanding AI and developing tools to deploy AI safely.',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
