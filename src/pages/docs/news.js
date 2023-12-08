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
              objectFit: 'contain',
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
                superTitle: 'December 2023',
                title: 'PRIMR 23 - Generative AI impact on IRB',
                body: (
                  <p>
                    Panel discussion on challenges faced by the IRB in the wake of generative AI.
                  </p>
                ),
                href: 'https://headlessui.dev',
                image: require('@/img/resources/primr_logo.png').default.src,
                color: 'text-cyan-500',
              },
              {
                superTitle: 'November 2023',
                title: 'Quantifying digital inequality published in BMJ HCI',
                body: (
                  <p>
                    Our paper that looks at NHS app usage across the UK has been published in BMJ HCI.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/dig_ineq.jpg').default.src,
                color: 'text-purple-500', 
              },
              {
                superTitle: 'November 2023',
                title: 'Disparity Dashboards published in LDH',
                body: (
                  <p>
                    Our paper on health equity dashboards has been published in Lancet Digital Health.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/landig.jpg').default.src,
                color: 'text-purple-500',
              },
              {
                superTitle: 'October 2023',
                title: 'Promises and Pitfalls of Generative AI',
                body: (
                  <p>
                    Invited talk at Texas Children's Hospital on what 2024 holds for generative AI in healthcare.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/TCH_Logo_Color.jpg').default.src,
                color: 'text-pink-500',
              },
              {
                superTitle: 'October 2023',
                title: 'Mapping NHS data flows accepted to LDH',
                body: (
                  <p>
                    Our paper on evaluating NHS data flows has been accepted to Lancet Digital Health.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/map_ball_chart.jpg').default.src,
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
                color: 'text-blue-500',
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
