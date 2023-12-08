import { Button } from '@/components/Button'
import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'
import clsx from 'clsx'

function Research_index() {
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
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <IconContainer
            className="dark:bg-indigo-500 dark:highlight-white/10"
            light={require('@/img/icons/home/constraint-based.png').default.src}
            dark={require('@/img/icons/home/dark/constraint-based.png').default.src}
          />

          <Caption className="text-indigo-500 dark:text-indigo-400">Research Focus</Caption>

          <BigText className='text-white'>
            <Widont>Frontiers of xxxx</Widont>
          </BigText>

          <Paragraph className='text-slate-50'>
           My goal is to understand how AI learns, thinks, and reasons, so that we can harmonize human and machine intelligence to improve human lives.
          </Paragraph>
        </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">Mechanistic Interpretability</p>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">Improving safety of clinical predictions </p>
              <p className="mt-2 text-base leading-7 text-slate-300">Working to understand what models learn and how they make decisions.</p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-slate-200 p-8 lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">MLOps</p>
            <div>
              <p className="text-lg font-semibold tracking-tight text-gray-900">Building capacity for safe deployment</p>
              <p className="mt-2 text-base leading-7 text-slate-600">Developing tools to track data shifts and model calibration.</p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-red-800 p-8 lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">Health Equity</p>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">Identifying drivers of differences in patient outcomes</p>
              <p className="mt-2 text-base leading-7 text-red-200">Using data science to address disparities in healthcare.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Research_index
