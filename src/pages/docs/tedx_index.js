import React from 'react';
import {
    BigText,
    Caption,
    IconContainer,
    Link,
    Paragraph,
    Widont
  } from '@/components/home/common'

function TedxIndex() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-10">
                <IconContainer
                    className="dark:bg-green-500 dark:highlight-white/30"
                    light={require('@/img/icons/home/build-anything.png').default.src}
                    dark={require('@/img/icons/home/dark/build-anything.png').default.src}
                />
                
                <Caption className="text-green-500 dark:text-green-400">About</Caption>
                
                <BigText>
                    <Widont>Creating A Data-Centered Future That Benefits Everyone.</Widont>
                </BigText>
                
                <Paragraph>
                    I am a {' '}
                    <a className="text-green-500 font-semibold dark:text-green-400">Postdoctoral researcher at MIT </a>{' '}
                    working at the Lab for Computational Physiology. I am interested in understanding AI and developing tools to deploy AI safely.
                </Paragraph>
                
                <Paragraph>
                    I also work as an honorary researcher at Guys and St Thomas NHS Trust in the department of Critical Care and am an active mentor for MIT Critical Data.
                    Clinically, I have previously worked as a full-time physician in Imperial College London NHS Trust. 
                </Paragraph>
                
                <Link href="/showcase" color="sky" darkColor="gray">
                    See the full portfolio<span className="sr-only">, showcase</span>
                </Link>

                <div className='flex justify-center mb-20 mt-10'>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/seUxBboIxDk" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default TedxIndex;
