import { LinkArrow } from "@/components/Icons"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"

function Homepage() {
  const [text, count] = useTypewriter({
    words: ["Artificial Intelligence", "Health Equity", "Critical Care"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-start justify-center overflow-hidden">
      {/* <Circles /> */}
      <div className="flex flex-col items-start justify-center">
        <h2 className="tracking-[4px] text-xl text-[#494949] pb-3 sm:text-sm md:tracking-[2px]">
          Jack Gallifant
        </h2>
        <h1 className="text-4xl sm:text-xl md:text-5xl lg:text-6xl font-bold pb-3 text-[#494949]">
          <span className="mr-3">Designing a better future with </span>
        </h1>
        <h1 className="text-4xl sm:text-xl md:text-5xl lg:text-7xl font-semibold pb-3 text-[#494949]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#494949" />
        </h1>
        <div className="flex pb-3 z-10">
          <Link
            href="/projects"
            target={"_blank"}
            className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-sm hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4
                  "
          >
            Latest Work <LinkArrow className="ml-1 w-2 sm:w-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
