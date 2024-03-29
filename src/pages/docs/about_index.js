import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'

function About_index() {
  return (
    <section className='bg-white min-h-screen py-24 sm:py-32'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <div class="bg-indigo-600 text-white p-4 text-xl font-bold rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center flex-shrink-0">
          1
          </div>

          <Caption className="text-indigo-700 dark:text-indigo-400">About Me</Caption>

          <BigText>
            <Widont>Exploring the Intersection of Healthcare and AI</Widont>
          </BigText>

          <Paragraph className="text-lg text-slate-700">
            I blend my clinical background with my passion for AI. 
            As a postdoctoral researcher at MIT, I strive to understand and shape how AI can be aligned with human values, particularly in the realm of healthcare. 
            My goal is to contribute to a future where AI can be used to improve health outcomes for everyone.          
          </Paragraph>
        </div>

        <div className="mx-auto text-left mt-12 mb-12">
          <div>
            <div className="gap-x-2 gap-y-14 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
              {/* AI Card */}
              <div className="flex flex-col justify-between rounded-xl bg-indigo-100 p-6 ring-1 ring-inset ring-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                  <div class="flex h-10 w-10 bg-indigo-700 items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                      <path d="M16.5 7.5h-9v9h9v-9Z" />
                      <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
                    </svg>
                  </div>                    
                  <p className="font-semibold text-gray-900 text-2xl">Artificial Intelligence</p>
                  </div>
                   <Paragraph className="text-base text-slate-700">
                    I am deeply interested in ensuring that intelligent systems are aligned with human values and building mechanisms to ensure that these systems are developed with fairness and safety in mind.
                  </Paragraph>
                   <Paragraph className="text-base text-slate-700">
                    My recent work involves investigating mechanistic interpretability of language models, how they encode clinical information across subgroups, and exploring ways to mitigate biases.
                  </Paragraph>                
                </div>
              </div>


              {/* Healthcare Card */}
              <div className="flex flex-col justify-between rounded-xl bg-indigo-100 p-6 ring-1 ring-inset ring-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                  <div class="flex h-10 w-10 bg-indigo-700 items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                      <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                    </svg>
                  </div>
                    <p className="font-semibold text-gray-900 text-2xl">Healthcare</p>
                  </div>
                   <Paragraph className="text-base text-slate-700">
                    Implementation of AI in healthcare is inevitable, my goal is to build systems that facilitate safe deployment in real world settings and educating healthcare workers about the risks of these tools.
                  </Paragraph>
                   <Paragraph className="text-base text-slate-700">
                    I am currently working on building tools for monitoring AI tools post deployment, detecting subpopulation shifts in clinical data, and building capacity around high quality educational resources.
                  </Paragraph>
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
