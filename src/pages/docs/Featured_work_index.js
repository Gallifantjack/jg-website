import { Button } from '@/components/Button'
import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'
import clsx from 'clsx'

function CardGroup({ children, className }) {
  return (
    <ul className={clsx('grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start', className)}>
      {children}
    </ul>
  )
}

function Card({ title, superTitle, href, color, body, image, video }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
          <a href={href} className="hover:text-slate-600 dark:hover:text-white">
            <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
            {title}
          </a>
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">{body}</div>
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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

function Featured_work() {
  return (
    <section className='bg-[#0B1120] min-h-screen py-24 sm:py-32'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <div class="bg-blue-600 text-white p-4 text-xl font-bold rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center flex-shrink-0">
          4
          </div>

          <Caption className="text-blue-500">Featured Work</Caption>

          <BigText className='text-white'>
            <Widont>Selected Projects</Widont>
          </BigText>

          <Paragraph>
            A collection of research and projects that focus on ethical AI
            deployment, healthcare equity, and understanding biological systems.
          </Paragraph>
        </div>
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ul className="sm:space-y-6">
            {[
              {
                title: 'Fairness of AI Metrics',
                description: 'AUROC and AUPRC under Class Imbalance',
                images: [
                  require('@/img/resources/atomic_mistakes.png').default.src,
                ],
                color: 'text-blue-500',
                href: '/feat_auc',
                body: (
                  <>
                  <p>
                    This study disproves popular belief that AUPRC is the best metric in class imbalance settings.
                  </p>
                  <p>
                    Using a novel theoretical framework, we show that AUPRC is inherently discriminatory, favouring subgroups with higher prevalence of positive labels.
                  </p>
                  </>
                ),
              },
              {
                title: 'Characterizing UK Health Data Flow',
                description: 'Mapping NHS Data',
                images: [
                  require('@/img/resources/map_clusters.jpg').default.src,
                  require('@/img/resources/map_clusters.jpg').default.src,
                ],
                color: 'text-blue-500',
                href: '/feat_nhs_map',
                body: (
                  <>
                  <p>
                    The study explores the UK's NHS data management, uncovering a vast network of data flows across healthcare and research sectors.
                  </p>
                  <p>
                    Key findings highlight transparency issues and trust concerns in data handling, alongside prevalent non-compliance with safe data access practices.
                  </p>
                  </>
                ),
              },
              {
                title: 'Developing tools to deploy AI safely',
                description: 'Disparity Dashboards',
                images: [
                  require('@/img/resources/dash_example.png').default.src,
                ],
                color: 'text-blue-500',
                href: '/feat_disp_dash',
                body: (
                  <>
                    <p>
                      Continous evaluation of AI models is essential to ensure that they are safe to
                      deploy in the real world.
                    </p>
                    <p>
                      Disparity Dashboards
                      <span className="font-semibold"> systematically and contiously</span> evaluate
                      the impact of AI models on different subgroups of the population.
                    </p>
                  </>
                ),
              },
              { 
                title: 'Quantifying digital health inequality across the NHS',
                description: 'Digital Inequality',
                images: [
                  require('@/img/resources/dig_ineq.jpg').default.src,
                ],
                color: 'text-blue-500',
                href: '/feat_dig_ineq',
                body: (
                  <>
                    <p>AI models are only as good as the data they are trained on.</p>
                    <p>
                      It is essential to understand who is represented in the data, and what
                      opinions are able to contribute to the model.
                    </p>
                  </>
                ),
              },
              {
                title: 'New tools to monitor Health equity',
                description: 'Diversity Factor',
                images: [
                  require('@/img/resources/div_fact.png').default.src,
                ],
                color: 'text-blue-500',
                href: '/feat_div_fact',
                body: (
                  <>
                    <p>AI models are only as good as the data they are trained on.</p>
                    <p>
                      It is essential to understand who is represented in the data, and what
                      opinions are able to contribute to the model.
                    </p>
                  </>
                ),
              },
            ].map(({ title, description, images, color, body, href }) => (
              <li
                key={title}
                className="-mx-4 p-4 pb-10 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50"
              >
                <div className="flex-auto">
                  <h3 className={clsx('mb-4 text-sm leading-6 font-semibold', color)}>{title}</h3>
                  <p className="mb-2 text-xl font-semibold tracking-tight  dark:text-slate-200">
                    {description}
                  </p>
                  <div className="mb-6 text-sm leading-6  space-y-4 dark:text-slate-400">
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
                  <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg  overflow-hidden dark:bg-slate-800">
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
      </div>
    </section>
  )
}

export default Featured_work
