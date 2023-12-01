import { Button } from '@/components/Button'
import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'
import clsx from 'clsx'

function About_index() {
    const researchCards = [
    {
      id: 1,
      title: 'Causal Inference in AI',
      description: 'Focusing on integrating causal reasoning into AI models for healthcare.',
      link: '/research/causal-inference'
    },
    {
      id: 2,
      title: 'AI in Critical Care',
      description: 'Leveraging AI to improve patient outcomes in critical care settings.',
      link: '/research/ai-critical-care'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics',
      description: 'Utilizing big data to drive innovations in healthcare delivery.',
      link: '/research/healthcare-analytics'
    },
  ];
  return (
    <section className='bg-white min-h-screen py-24 sm:py-32'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <IconContainer
            className="dark:bg-indigo-500 dark:highlight-white/10"
            light={require('@/img/icons/home/constraint-based.png').default.src}
            dark={require('@/img/icons/home/dark/constraint-based.png').default.src}
          />

          <Caption className="text-indigo-500 dark:text-indigo-400">About Me</Caption>

          <BigText>
            <Widont>Bridging AI and Healthcare</Widont>
          </BigText>

          <Paragraph className="text-lg text-slate-700">
           I am a Postdoctoral Researcher at MIT, a trained physician, and a passionate advocate for equitable healthcare. I use my clinical background to bring real-world insights to computational innovations in healthcare and aim to enhance patient care and clinical outcomes.
          </Paragraph>
        </div>

        <div className="mx-auto text-left mt-12 mb-12">
          <div>
            <div className="gap-x-2 gap-y-14 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
              {/* AI Card */}
              <div className="flex flex-col justify-between rounded-xl bg-indigo-400/5 p-6 ring-1 ring-inset ring-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <IconContainer
                      className="dark:bg-indigo-500 dark:highlight-white/10"
                      light={require('@/img/icons/home/constraint-based.png').default.src}
                      dark={require('@/img/icons/home/dark/constraint-based.png').default.src}
                    />     
                    <p className="font-semibold text-gray-900 text-2xl">Artificial Intelligence</p>
                  </div>
                  <p className=" text-base text-slate-700">
                    As a Postdoctoral researcher at MIT, I specialize in leveraging AI and causal inference to improve healthcare systems. My work focuses on ethical and efficient AI deployment and the confluence of consciousness and technology.
                  </p>
                </div>
              </div>


              {/* Healthcare Card */}
              <div className="flex flex-col justify-between rounded-xl bg-indigo-400/5 p-6 ring-1 ring-inset ring-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <IconContainer
                      className="dark:bg-indigo-500 dark:highlight-white/10"
                      light={require('@/img/icons/home/constraint-based.png').default.src}
                      dark={require('@/img/icons/home/dark/constraint-based.png').default.src}
                    />     
                    <p className="font-semibold text-gray-900 text-2xl">Healthcare</p>
                  </div>
                  <p className="text-base text-slate-700">
                    As a trained physician I use my clinical background as an honorary researcher in the Department of Critical Care at Guys and St Thomas NHS Trust, bringing real-world insights to computational innovations in healthcare and aiming to enhance patient care and clinical outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About_index
