import React, { useState } from 'react';
import {
    BigText,
    Caption,
    IconContainer,
    Link,
    Paragraph,
    Widont
  } from '@/components/home/common'

function About_index() {
  const [visiblePopover, setVisiblePopover] = useState(null);

  const cards = [
    { id: 1, imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src, title: 'AI', description: 'I am fascinated by the potential of AI to improve outcomes for all.' },
    { id: 2, imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src, title: 'Physiology', description: 'I love understanding the fundamental laws that govern how the human body works, then using this to tackle disease.' },
    { id: 3, imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src, title: 'MLOps', description: 'The development of systems that can safely manage and oversee deployment of Machine Learning and care more generally excites me.' },
    { id: 4, imageUrl: require('@/img/resources/refactoringui-small@75.jpg').default.src, title: 'Equality', description: 'I believe we should be constantly striving to produce a system that gives everyone the opportunity to reach their full health potential.' },
  ];


  return (
    <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className='mb-20 md:mb-10'>
                <IconContainer
                className="dark:bg-pink-500 dark:highlight-white/30"
                light={require('@/img/icons/home/build-anything.png').default.src}
                dark={require('@/img/icons/home/dark/build-anything.png').default.src}
                />
                <Caption className="text-pink-500 dark:text-pink-400">About</Caption>
                <BigText>
                <Widont>Creating A Data-Centered Future That Benefits Everyone.</Widont>
                </BigText>
                <Paragraph>
                I am a {' '}
                <a className="text-pink-500 font-semibold dark:text-pink-400">Postdoctoral researcher at MIT </a>{' '}
                working at the Lab for Computational Physiology. I am interested in understanding AI and developing tools to deploy AI safely.
                </Paragraph>
                <Paragraph>
                I also work as an honorary researcher at Guys and St Thomas NHS Trust in the department of Critical Care and am an active mentor for MIT Critical Data.
                Clinically, I have previously worked as a full-time physician in Imperial College London NHS Trust. 
                </Paragraph>
                <Link href="/showcase" color="pink" darkColor="gray">
                See the full portfolio<span className="sr-only">, showcase</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map(card => (
            <div 
                key={card.id} 
                className="relative h-48 overflow-hidden"
                onMouseEnter={() => setVisiblePopover(card.id)}
                onMouseLeave={() => setVisiblePopover(null)}
            >
                <img 
                src={card.imageUrl} 
                alt="Description" 
                className="w-full h-full object-cover transition-transform duration-300 transform scale-100 hover:scale-105 z-10"
                />
                <div 
                className={`absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-start items-start transition-opacity duration-300 ${visiblePopover === card.id ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-20 backdrop-blur-md`}
                style={{ background: 'rgba(255, 255, 255, 0.7)' }}
                >
                    <h2 className="text-2xl mb-2">{card.title}</h2>
                    <p className="text-justify">{card.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}

export default About_index;
