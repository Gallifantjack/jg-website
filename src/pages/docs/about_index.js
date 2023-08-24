import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'
import { useState } from 'react'

function About_index() {
  const [visiblePopover, setVisiblePopover] = useState(null)

  const cards = [
    {
      id: 1,
      imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src,
      title: 'Causal Inference in AI',
      description:
        'Exploring the role of causality in machine learning algorithms and AI systems. The focus is on understanding how causal inference can be integrated to make more robust and interpretable models.',
    },
    {
      id: 2,
      imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src,
      title: 'MLOps for Health Equity',
      description:
        'Investigating the application of MLOps in the healthcare industry with a focus on equity. The objective is to develop machine learning systems that can be deployed to improve healthcare outcomes for all demographic groups.',
    },
    {
      id: 3,
      imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src,
      title: 'Consciousness, Thought, and Memory in Biological Artificial Systems',
      description:
        'Studying the integration of consciousness, thought, and memory in biological artificial systems. This involves understanding the mechanics of thought and memory in both biological entities and AI models.',
    },
    {
      id: 4,
      imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src,
      title: 'Interaction of Biological and Artificial Systems',
      description:
        'Researching the interfaces and interactions between biological and artificial systems, with a focus on how these two types of systems can complement, enhance, or inhibit each other.',
    },
  ]

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <IconContainer
            className="dark:bg-pink-500 dark:highlight-white/30"
            light={require('@/img/icons/home/build-anything.png').default.src}
            dark={require('@/img/icons/home/dark/build-anything.png').default.src}
          />
          <Caption className="text-pink-500 dark:text-pink-400">About</Caption>
          <BigText>
            <Widont> Recoding Neural Networks.</Widont>
          </BigText>
          <Paragraph>
            As a
            <a className="text-pink-500 font-semibold dark:text-pink-400">
              {' '}
              Postdoctoral researcher at MIT,
            </a>{' '}
            I specialize in leveraging AI and causal inference to improve healthcare systems. My
            work aims to understand factors driving biological and artificial systems decisions;
            exploring the confluence of consciousness and technology, focusing on ethical and
            efficient AI deployment.
          </Paragraph>
          <Paragraph>
            With a clinical background, I also contribute to Guys and St Thomas NHS Trust, adding a
            real-world perspective to computational innovations.
          </Paragraph>
          <Link href="/showcase" color="pink" darkColor="gray">
            See recent publications<span className="sr-only">, showcase</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-72 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 left-0 w-full flex justify-center bg-gray-200 text-gray-700 p-2 rounded-t-lg">
                <h2 className="text-lg font-semibold">{card.title}</h2>
              </div>
              <div className="absolute top-10 bottom-0 left-0 right-0">
                <img
                  src={require('@/img/resources/refactoringui-small@75.jpg').default.src}
                  alt="Description"
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
                />
              </div>
              <div className="absolute top-10 bottom-0 left-0 right-0 p-4 flex flex-col justify-center items-start backdrop-blur-md transition-opacity duration-300 hover:opacity-100 opacity-0">
                <p className="text-white text-lg text-justify">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About_index
