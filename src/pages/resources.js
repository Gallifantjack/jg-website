import Head from 'next/head'
import { Footer } from '@/components/home/Footer'
import { Research_interests } from '@/pages/docs/research_interests'
import { BasicLayout } from '@/layouts/BasicLayout'

export default function Resources() {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Jack Gallifant"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Jack Gallifant"
        />
        <title>Jack Gallifant</title>
      </Head>
      <div className="pt-20 mb-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-40 md:mb-40 md:gap-y-40">
        <Research_interests />
      </div>
      <Footer />
    </>
  )
}

Resources.layoutProps = {
  meta: {
    title: 'About',
  },
  Layout: BasicLayout,
}
