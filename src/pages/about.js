import AnimatedText from "@/components/AnimatedText"
import Experience from "@/components/Experience"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import profilePic from "../../public/images/profile/tedx_quarterbody.jpg"

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="I am a full-time physician working in London and an honorary
                researcher at Guys and St Thomas NHS Trust and teaching fellow
                at MIT Critical Data."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen sm:items-start">
        <Layout className="pt-16 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 sm:mt-20 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 40vw,
              20vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center text-[#494949] lg:w-full lg:text-center">
              <AnimatedText
                text="Creating a data centered future that benefits everyone."
                className="!text-5xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-xl text-[#494949]
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs sm:text-justify">
                I am a full-time physician working in London and an honorary
                researcher at Guys and St Thomas NHS Trust and teaching fellow
                at MIT Critical Data.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs sm:text-justify">
                AI can unlock new clinical insights but also{" "}
                <span className="underline font-bold">
                  {" "}
                  perpetuate biases at scale.
                </span>{" "}
                I use technology to identify, map, and reduce these disparities
                as part of a worldwide team; facilitating safe AI deployment for
                all.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/projects"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Publications
                </Link>
                <Link
                  href="mailto:jack.gallifant@nhs.net"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default about
