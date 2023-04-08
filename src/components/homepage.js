import { LinkArrow } from "@/components/Icons"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Circles from "./Circles"

function Homepage() {
  const [text, count] = useTypewriter({
    words: ["Artificial Intelligence", "Health Equity", "Critical Care"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Circles />
      <div className="flex flex-col items-center justify-center">
        <h2 className="tracking-[4px] text-base text-gray-400 pb-3 md:tracking-[8px]">
          Jack Gallifant
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10 text-gray-300">
          <span className="mr-3">Exploring a better future in </span>
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10 text-gray-100">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="flex items-center mt-2 self-center">
          <Link
            href="#projects"
            target={"_blank"}
            className="flex items-center bg-zinc-800 text-zinc-400 p-2.5 px-6
                  rounded-lg text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-light md:p-2 md:px-4 md:text-base"
            download={true}
          >
            Latest Work <LinkArrow className={"ml-1 w-2"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
