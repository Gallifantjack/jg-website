import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { SocialIcon } from "react-social-icons"
import useThemeSwitcher from "./hooks/useThemeSwitcher"

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full sticky top-0 px-32 py-8 font-medium flex items-center justify-between bg-[#ffffff] text-[#494949] z-10 lg:px-16 md:px-12 sm:px-8 border-b-2 border-[#494949]">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-[#494949] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-[#494949] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-[#494949] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://scholar.google.com/citations?user=SlLz8KoAAAAJ&hl=en&oi=ao"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <SocialIcon
              url="https://scholar.google.com/citations?user=SlLz8KoAAAAJ&hl=en&oi=ao"
              fgColor="#494949"
              bgColor="transparent"
            />
          </motion.a>
          <motion.a
            href="https://github.com/Gallifantjack"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <SocialIcon
              url="https://github.com/Gallifantjack"
              fgColor="#494949"
              bgColor="transparent"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jackgallifant/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <SocialIcon
              url="https://www.linkedin.com/in/jackgallifant"
              fgColor="#494949"
              bgColor="transparent"
            />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/75 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  )
}

export default NavBar
