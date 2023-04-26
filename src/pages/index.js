import Layout_dark from "@/components/Layout_dark"
import TransitionEffect from "@/components/TransitionEffect"
import Homepage from "@/components/homepage"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack Gallifant</title>
        <meta
          name="description"
          content="Building a Cathedral with AI | Health Equity | Physiology."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen sm:items-start">
        <Layout_dark className="pt-0 md:pt-16 sm:pt-16">
          <Homepage />
        </Layout_dark>
      </main>
    </>
  )
}
