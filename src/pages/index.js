import Layout_dark from "@/components/Layout_dark"
import TransitionEffect from "@/components/TransitionEffect"
import Homepage from "@/components/homepage"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
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
