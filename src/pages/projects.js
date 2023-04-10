import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import Layout_dark from "@/components/Layout_dark"
import TransitionEffect from "@/components/TransitionEffect"
import { motion, useMotionValue } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import article5 from "../../public/images/articles/aimv_image.png"
import {
  default as article1,
  default as article_equity_innovation,
} from "../../public/images/articles/critical-bias.png"
import article6 from "../../public/images/articles/lobar_image.png"
import article4 from "../../public/images/articles/mechvent_image.png"
import article3 from "../../public/images/articles/nlp_image.png"
import project5 from "../../public/images/projects/Pulse_oximeter.jpg"
import project3 from "../../public/images/projects/Respiratory-medicine-thumbnail.png"
import project1 from "../../public/images/projects/dashboard.png"
import project6 from "../../public/images/projects/equity-innovation.png"
import project4 from "../../public/images/projects/hospital-bed-promo.webp"
import project2 from "../../public/images/projects/ventilator.webp"

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center bg-slate-900">
        <Layout className="pt-16">
          <AnimatedText
            text="Recent Work"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Lancet Digital Health"
                title="AI Dashboard"
                summary="An end-to-end Natural Language Processing pipeline that performs real- time identification, classification, and characterisation of AI research abstracts extracted from MEDLINE, outputting results to an interactive dash- board, creating a live view of global AI development."
                img={project1}
                link="https://doi.org/10.1016/S2589-7500(22)00032-2"
                github="https://github.com/whizzlab/health_ai_online_pipeline.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="British Journal of Anaesthesia"
                title="Mechanical ventilators for LMICs"
                img={project2}
                link="https://doi.org/10.1016/j.bja.2022.01.007"
                github="_blank"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="British Journal of Anaesthesia"
                title="Quantifying of lobar gas exchange"
                img={project3}
                link="https://doi.org/10.1016/j.bja.2021.04.022"
                github="_blank"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="British Journal of Anaesthesia"
                title="AI for mechanical ventilation"
                summary="A systematic review of AI literature as applied to mechanical ventilation, evaluating adherence to the Transparent Reporting of a multivariable pre- diction model for Individual Prognosis Or Diagnosis (TRIPOD) statement, risk of bias using the Prediction model Risk Of Bias Assessment Tool (PROBAST), algorithm design using a novel rubric, and the availability of both data and code."
                img={project4}
                link="https://doi.org/10.1016/j.bja.2021.09.025"
                github="_blank"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Critical Care Clinics"
                img={project5}
                title="Bias in Critical Care Devices"
                link="https://doi.org/10.1016/j.ccc.2023.02.005"
                github="_blank"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="PLOS Digital Health"
                img={project6}
                title="Equity and Innovation"
                link="https://doi.org/10.1371/journal.pdig.0000224"
                github="_blank"
              />
            </div>
          </div>
        </Layout>
        <Layout_dark>
          <h2 className="font-bold text-4xl w-full text-center mb-12 text-light">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="Equity should be fundamental to innovation."
              img={article_equity_innovation}
              date="2023"
              link="https://doi.org/10.1371/journal.pdig.0000224"
            />
            <Article
              title="Critical Bias in Critical Care Devices."
              img={article1}
              date="2023"
              link="https://doi.org/10.1016/j.ccc.2023.02.005"
            />
            <Article
              title="An interactive dashboard to track themes, development maturity, and global equity in clinical artificial intelligence research."
              img={article3}
              date="2022"
              link="https://doi.org/10.1016/S2589-7500(22)00032-2"
            />
            <Article
              title="Mechanical ventilators for low- and middle-income 2022 countries: informing a context-specific and sustainable design."
              img={article4}
              date="2022"
              link="https://doi.org/10.1016/j.bja.2022.01.007"
            />
            <Article
              title="Artificial intelligence for mechanical ventilation: 2021 systematic review of design, reporting standards, and bias."
              img={article5}
              date="2022"
              link="https://doi.org/10.1016/j.bja.2021.09.025"
            />
            <Article
              title="Quantification of lobar gas exchange: a proof-of-concept study in pigs"
              img={article6}
              date="2021"
              link="https://doi.org/10.1016/j.bja.2021.04.022"
            />
          </ul>
        </Layout_dark>
      </main>
    </>
  )
}

export default projects
