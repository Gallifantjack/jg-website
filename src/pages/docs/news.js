import { Button } from '@/components/Button'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'
import clsx from 'clsx'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style,
        display: 'block', 
        background: 'none', 
        color: 'gray',
        zIndex: 2,  // Ensures the arrow is above other elements
        right: '-25px',  // Adjusts the position of the next arrow
      }}
      onClick={onClick}
    >
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>→</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'block', 
        background: 'none', 
        color: 'gray',
        zIndex: 2,  // Ensures the arrow is above other elements
        left: '-25px',  // Adjusts the position of the prev arrow
      }}
      onClick={onClick}
    >
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>←</span>
    </div>
  );
}


function Card({ title, superTitle, href, color, body, image, video }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start px-1">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold ">
          <a href={href} className="hover:text-slate-600">
            <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
            {title}
          </a>
        </h3>
        <div className="prose prose-slate prose-sm text-slate-700 pb-5">{body}</div>
      </div>

      {/* Media Wrapper */}
      <div className="relative mb-6 sm:mb-0 xl:mb-6 w-full sm:w-[17rem] xl:w-full rounded-lg overflow-hidden">
        {/* Placeholder to maintain aspect ratio */}
        <div style={{ paddingTop: '56.25%' }}></div>

        {/* Check for video and display it; otherwise display image */}
        {video ? (
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            src={image}
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
    </li>
  )
}

function News_section() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,  // Enable auto-scrolling
    autoplaySpeed: 3000,  // Set the speed of auto-scrolling (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='bg-white min-h-screen py-24 sm:py-32'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <IconContainer
            className="dark:bg-indigo-500 dark:highlight-white/10"
            light={require('@/img/icons/home/constraint-based.png').default.src}
            dark={require('@/img/icons/home/dark/constraint-based.png').default.src}
          />

          <Caption className="text-indigo-500">News</Caption>

          <BigText>
            <Widont>Latest Updates</Widont>
          </BigText>

          <Paragraph className='text-lg text-slate-700'>
            Latest updates on the research, publications, and events from the lab.
          </Paragraph>
        </div>
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Slider {...settings}>            {[
              {
                superTitle: 'November 2023',
                title: 'Evaluating the downstream impact on models',
                body: (
                  <p>
                    Effects of racial bias in pulse oximeters on the National Early Warning Scores
                    ability to predict Cardiac Arrest, ICU, and death.
                  </p>
                ),
                href: 'https://headlessui.dev',
                image: require('@/img/resources/headlessui@75.jpg').default.src,
                color: 'text-indigo-500',
              },
              {
                superTitle: 'October 2023',
                title: 'Discovering the mechanism behind generalization',
                body: (
                  <p>
                    Questions of transparency, liability, and privacy are all raised by the use of
                    LLMs in healthcare.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/heroicons@75.jpg').default.src,
                color: 'text-purple-500',
              },
              {
                superTitle: 'February 2023',
                title: 'TEDx- Whose life will AI save?',
                body: (
                  <p>
                    Exploring the hidden drivers behind model performance, and who our AI is
                    learning from.
                  </p>
                ),
                href: 'https://youtube.com',
                video: 'https://www.youtube.com/embed/seUxBboIxDk',
                color: 'text-cyan-500',
              },
              {
                superTitle: 'February 2023',
                title: 'TEDx- Whose life will AI save?',
                body: (
                  <p>
                    Exploring the hidden drivers behind model performance, and who our AI is
                    learning from.
                  </p>
                ),
                href: 'https://youtube.com',
                video: 'https://www.youtube.com/embed/seUxBboIxDk',
                color: 'text-cyan-500',
              },
              {
                superTitle: 'February 2023',
                title: 'TEDx- Whose life will AI save?',
                body: (
                  <p>
                    Exploring the hidden drivers behind model performance, and who our AI is
                    learning from.
                  </p>
                ),
                href: 'https://youtube.com',
                video: 'https://www.youtube.com/embed/seUxBboIxDk',
                color: 'text-cyan-500',
              },
            ].map((card) => (
              <div key={card.title}>
                <Card {...card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default News_section
