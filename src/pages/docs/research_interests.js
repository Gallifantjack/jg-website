import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { Button } from '@/components/Button'
import clsx from 'clsx'

import {
  BigText,
  Caption,
  IconContainer,
  Link,
  Paragraph,
  Widont
} from '@/components/home/common'

function CardGroup({ children, className }) {
  return (
    <ul className={clsx('grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start', className)}>
      {children}
    </ul>
  )
}

function Card({ title, superTitle, href, color, body, image, button }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
          {button ? (
            <>
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </>
          ) : (
            <a
              href={href}
              className={clsx(
                'before:absolute before:inset-0',
                !button && 'hover:text-slate-600 dark:hover:text-white'
              )}
            >
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </a>
          )}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">{body}</div>
        {button && (
          <Button href={href} className="mt-6">
            {button}
          </Button>
        )}
      </div>
      <img
        src={image}
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width="1216"
        height="640"
      />
    </li>
  )
}

function Icon({ children, className }) {
  return (
    <div
      className={clsx(
        'relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export function Research_interests() {
  return (
    <section id="research-interests">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ul className="sm:space-y-6">
          {[
            {
              title: 'Developing tools to deploy AI safely',
              description: 'Disparity Dashboards',
              images: [
                require('@/img/resources/refactoringui-small@75.jpg').default.src,
                require('@/img/resources/refactoringui@75.jpg').default.src,
              ],
              color: 'text-blue-500',
              href: 'https://refactoringui.com/?ref=resources',
              body: (
                <>
                  <p>
                  Continous evaluation of AI models is essential to ensure that they are safe to deploy in the real world. 
                  </p>
                  <p>
                  Disparity Dashboards
                  <span className="font-semibold"> systematically and contiously</span>
                  {' '} evaluate the impact of AI models on different subgroups of the population.
                  </p>
                </>
              ),
            },
            {
              title: 'Characterising the knowledge landscape',
              description: 'Medical Knowledge Graphs',
              images: [
                require('@/img/resources/tailwindui-small@75.jpg').default.src,
                require('@/img/resources/tailwindui@75.jpg').default.src,
              ],
              color: 'text-sky-500',
              href: 'https://tailwindui.com/?ref=resources',
              body: (
                <>
                  <p>
                  AI models are only as good as the data they are trained on.
                  </p>
                  <p>
                  It is essential to understand who is represented in the data, and what opinions are able to contribute to the model.
                  </p>
                </>
              ),
            },
          ].map(({ title, description, images, color, body, href }) => (
            <li
              key={title}
              className="-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50"
            >
              <div className="flex-auto">
                <h3 className={clsx('mb-4 text-sm leading-6 font-semibold', color)}>{title}</h3>
                <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                  {description}
                </p>
                <div className="mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400">
                  {body}
                </div>
                <Button
                  href={href}
                  color={[
                    'bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0',
                    'text-slate-300 group-hover:text-slate-200',
                  ]}
                  darkColor="gray"
                >
                  Learn more<span className="sr-only">, {title}</span>
                </Button>
              </div>
              <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
                <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800">
                  <picture>
                    <source type="image/jpeg" srcSet={images[1]} media="(min-width: 640px)" />
                    <img src={images[0]} alt="" decoding="async" />
                  </picture>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
          Additional Projects
        </h2>
        <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
          <p>
          I work on a number of projects that all aim to further the safe and effective deployment of AI in healthcare.
          </p>
        </div>

        <CardGroup>
          {[
            {
              superTitle: 'Device Bias',
              title: 'Evaluating the downstream impact on AI models',
              body: (
                <p>
                  Device biases across subgroups of the population can lead to downstream biases in AI models.
                </p>
              ),
              href: 'https://headlessui.dev',
              image: require('@/img/resources/headlessui@75.jpg').default.src,
              color: 'text-indigo-500',
            },
            {
              superTitle: 'LLM egulation',
              title: 'Designing regulatory frameworks for LLMs',
              body: (
                <p>
                  Questions of transparency, liability, and privacy are all raised by the use of LLMs in healthcare.
                </p>
              ),
              href: 'https://heroicons.com',
              image: require('@/img/resources/heroicons@75.jpg').default.src,
              color: 'text-purple-500',
            },
            {
              superTitle: 'MLOps',
              title: 'Safeguards for the deployment of AI models',
              body: (
                <p>
                  Standards for the deployment of AI models are essential to ensure that they are safe and effective.
                </p>
              ),
              href: 'https://heropatterns.com',
              image: require('@/img/resources/heropatterns@75.jpg').default.src,
              color: 'text-cyan-500',
            },
          ].map((card) => (
            <Card
              key={card.title}
              {...card}
            />
          ))}
        </CardGroup>
        <Button className= 'my-10' href="/showcase">See the full research portfolio</Button>
      </div>
    </section>
  )
}

Research_interests.layoutProps = {
  meta: {
    title: 'My Research',
  },
  Layout: DocumentationLayout,
}
