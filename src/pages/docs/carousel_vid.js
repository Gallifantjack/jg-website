import { BigText, Widont } from '@/components/home/common'
import { showcase } from '@/showcase' // Make sure this is the correct path and variable
import { useEffect, useRef, useState } from 'react'

function Site({ site, darkMode }) {
  const videoRef = useRef(null)
  const state = useRef('idle')

  function onTimeUpdate() {
    if (state.current === 'playing') {
      videoRef.current.style.opacity = 1
    }
  }

  function onEnded() {
    videoRef.current.style.opacity = 0
  }

  return (
    <div
      className={`card ${darkMode ? 'dark-mode' : ''}`}
      onMouseEnter={() => {
        if (state.current === 'idle') {
          state.current = 'playing'
          videoRef.current.play()
        }
      }}
      onMouseLeave={() => {
        state.current = 'idle'
        videoRef.current.pause()
      }}
    >
      <video
        ref={videoRef}
        src={site.video}
        muted
        loop
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
      <h2>{site.name}</h2>
      <p>{site.description}</p>
    </div>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const totalItems = showcase.length
  const extendedShowcase = [...showcase, ...showcase.slice(0, 2)]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === totalItems) {
          return 0
        }
        return prevIndex + 1
      })
    }, 7000)

    return () => clearInterval(interval)
  }, [totalItems])

  const shiftAmount = `-${(100 / 3) * activeIndex}%`

  return (
    <section className="relative">
      <div className="text-center my-10">
        <BigText>
          <Widont> Bridging the Human-AI Interface.</Widont>
        </BigText>
        <p className="text-xl text-gray-500 mt-2">
          {' '}
          Creating a data-driven future that benefits everyone.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="carousel-container">
          <div
            className="carousel-wrapper"
            style={{
              transform: `translateX(${shiftAmount})`,
              transition: activeIndex === 0 ? 'none' : 'transform 1s ease',
            }}
          >
            {extendedShowcase.map((site, index) => (
              <div className="carousel-item" key={index}>
                <Site site={site} darkMode={isDarkMode} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
