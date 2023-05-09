import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-base">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-semibold text-[#494949] xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-base sm:text-xs sm:text-justify w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark md:text-6xl sm:text-xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Post-Doctoral Researcher"
            company="MIT Lab for Computational Physiology"
            companyLink="https://lcp.mit.edu/home"
            time="2023-Present"
            address="Boston, USA"
            work="Funded as part of an NIH R01 grant, I am working with Dr. Celi to investigate the social patterning of knowledge generation. Researching the development of Trusted Research Environments, encoded biases, and the safe deployment of AI in healthcare"
          />
          <Details
            position="Honorary Researcher"
            company="Guy’s and St Thomas’ NHS Trust"
            companyLink="https://www.guysandstthomas.nhs.uk/"
            time="2023-Present"
            address="London, UK"
            work="Leading several projects on the downstream implications of bias in medical devices and developing novel machine-learning approaches to aid the prediction of patient deterioration."
          />
          <Details
            position="Teaching Assistant & Mentor"
            company="MIT Lab for Computational Physiology"
            companyLink="https://lcp.mit.edu/home"
            time="2022-Present"
            address="Boston, USA"
            work="I am an active mentor for the MIT Critical Data consortium, which hosts datathons worldwide. We bring together clinicians and data scientists to teach the basics of machine learning and how to understand how bias can be encoded in clinical data."
          />

          <Details
            position="Foundation Year Doctor"
            company="Imperial College Healthcare NHS Trust"
            companyLink="https://www.imperial.nhs.uk/"
            time="2021-Present"
            address="London, UK"
            work="A full-time physician working in busy tertiary centers with experience in Critical Care, Renal Medicine, and Emergency Medicine. I am part of the North West London EHR development team, leading projects on continuous quality improvement and disparity dashboards."
          />

          <Details
            position="Medicine degree"
            company="Norwich Medical School"
            companyLink="https://www.uea.ac.uk/about/norwich-medical-school"
            time="2015-2021"
            address="Norwich, UK."
            work="Completion of my medical degree in 2021 alongside completing USMLE Step 1 (242) and Step 2CK (251) in this period. During my medical degree, I was an active sportsman, University Hockey Captain during my 3rd year, and playing in the 1st XI every year."
          />

          <Details
            position="MSc Physiology."
            company="King’s College London"
            companyLink="https://www.kcl.ac.uk/bmb/our-departments/centre-for-human-applied-physiological-sciences"
            time="2019-2020"
            address="London, UK."
            work="A Masters degree in Human physiology in extreme conditions, including High Altitude and Space. During this time, I worked with Dr. Luigi Camporota and Dr. Federico Formenti to calculate lobar gas exchange to predict lung function after lobar resection."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
