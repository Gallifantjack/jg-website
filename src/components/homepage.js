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
      <div className="z-20 relative">
        <h2 className="tracking-[12px] text-sm uppercase text-gray-700 pb-3 md:tracking-[15px]">
          Jack Gallifant
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10 text-dark">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  )
}

export default Homepage
