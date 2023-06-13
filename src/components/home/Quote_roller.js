// quote_roller.js

import { useEffect, useState } from 'react'

const quotes = [
  {
    content: 'Inspiration is perishable - Babak Nivi',
    author: {
      name: 'Babak Nivi',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'The three big ones in life are wealth, health, and happiness. We pursue them in that order, but their importance is reverse. A calm mind, a fit body, and a house full of love. These things cannot be bought. They must be earned.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'No one is going to value you more than you value yourself.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Whenever you can in life, optimize for independence rather than money.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Impatience with actions, patience with results.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'A personal metric: how much of the day is spent doing things out of obligation rather than out of interest?',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'Realize in most things (relationships, work, even in learning) what you’re trying to do is find the thing you can go all-in on to earn compound interest.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'Finally, build systems to get rich without getting lucky. Aim that if lived 1000 times, successful in 999.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Learn to sell. Learn to build. If you can do both, you will be unstoppable.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Sharks eat well but live a life surrounded by sharks.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'The direction you’re heading matters more than speed, especially with leverage.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Don’t take yourself so seriously. You’re just a monkey with a plan.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: "Intentions don't matter, actions do.",
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'My definition of wisdom is knowing the long-term consequences of your actions.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'First, you know it. Then, you understand it. Then, you can explain it. Then, you can feel it. Finally, you are it.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'Simple heuristic: If you’re evenly split on a difficult decision, take the path more painful in the short term.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Only thing to protect against is the risk of ruin.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'Realize that in modern society, the downside risk is not that large. Even personal bankruptcy can wipe the debts clean in good ecosystems. I’m most familiar with Silicon Valley, but generally, people will forgive failures as long as you were honest and made a high-integrity effort.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'The one thing you have to avoid is the risk of ruin.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'All of man’s troubles arise because he cannot sit in a room quietly by himself.',
    author: {
      name: 'Blaise Pascal',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'We think of ourselves as fixed and the world as malleable, but it’s really we who are malleable and the world is largely fixed.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      "There is no purpose to life. Osho said, 'It’s like writing on water or building houses of sand.'",
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'What you feel tells you nothing about the facts — it merely tells you something about your estimate of the facts.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Tension is who you think you should be. Relaxation is who you are.',
    author: {
      name: 'Buddhist proverb',
      book: 'The Navalmanack',
    },
  },
  {
    content:
      'Enlightenment is the space between your thoughts. Beauty needs a certain amount of emptiness.',
    author: {
      name: 'Naval Ravikant',
      book: 'The Navalmanack',
    },
  },
  {
    content: 'Music is the space between the notes.',
    author: {
      name: 'Claude Debussy',
      book: 'The Navalmanack',
    },
  },
]

const Quote = ({ quote }) => (
  <div className="relative text-center text-lg leading-6">
    <figure className="relative flex flex-col bg-slate-50 rounded-lg p-12 dark:bg-slate-800 dark:highlight-white/5">
      <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
        <p>{quote.content}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-4">
        <div className="flex-auto">
          <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
            {quote.author.name}
          </div>
          <div className="mt-0.5">{quote.author.book}</div>
        </div>
      </figcaption>
    </figure>
  </div>
)

const Quote_roller = ({ bookFilter }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const filteredQuotes = bookFilter
    ? quotes.filter((quote) => quote.author.book === bookFilter)
    : quotes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === filteredQuotes.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [filteredQuotes])

  const onNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === filteredQuotes.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentQuote = filteredQuotes[currentQuoteIndex]

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-3 md:px-5">
      <h2 className="sr-only">Quotes</h2>
      <div className="grid place-items-center gap-6 lg:gap-8 sm:grid-cols-1 lg:grid-cols-1">
        {filteredQuotes.length > 0 ? (
          <>
            <Quote quote={currentQuote} />
            <button
              type="button"
              className="absolute right-0 bottom-0 mb-6 mr-6 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-8 w-8 rounded-full flex items-center justify-center dark:bg-slate-700 dark:hover:bg-slate-600"
              onClick={onNextQuote}
            >
              ➤
            </button>
          </>
        ) : (
          <p>No quotes found for the selected book.</p>
        )}
      </div>
    </section>
  )
}

export default Quote_roller
