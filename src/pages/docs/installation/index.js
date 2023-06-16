import { Steps } from '@/components/Steps'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

let steps = [
  {
    title: 'All Signal, No Noise',
    body: () => (
      <p>
        We live in a world of  <strong>increasing noise</strong> that maximises consumption. 
        But how much of what we consume do we remember, let alone use?
      </p>
    ),
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
        We <strong>condense and clarify</strong> foundational topics starting from first principles, giving you guides to navigating complex topics.
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
    <p>Hard-earned lessons that have been transformed into timeless wisdom. Save yourself hours of reading, and learn just what is essential.
    </p>
    ),
    code: {
      name: 'P2P',
      lang: 'terminal',
      code: 'P2P\'s goal is not knowledge but action.', 
    },
  },
]

export default function TailwindCli({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      >
      </div>
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
    </InstallationLayout>
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
    title: 'Installation',
    description:
      'The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool.',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
