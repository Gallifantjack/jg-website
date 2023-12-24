import { Button } from '@/components/Button'
import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'
import clsx from 'clsx'

function Research_index() {
  return (
    <section className="min-h-screen py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-20 md:mb-10">
          <div class="bg-red-800 text-white p-4 text-xl font-bold rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center flex-shrink-0">
            2
          </div>
          <Caption className="text-red-700">Research Focus</Caption>

          <BigText className="text-white">
            <Widont> Supervising Superhuman Intelligence</Widont>
          </BigText>

          <Paragraph className="text-slate-50">
            My goal is to build the tools that help us understand how AI learns, thinks, and reasons, so that we can harmonize
            human and machine intelligence to improve human lives.
          </Paragraph>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p class="flex-none text-3xl font-bold tracking-tight text-white">
              Alignment
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-white">
                Reverse Engineering AI Systems
              </p>
              <p class="mt-2 text-base text-justify leading-7 text-gray-400">
                We are using causal interventions to understand how knowledge is stored and used by AI.
              </p>
            </div>
          </div>
          <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-slate-200 p-8 lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p class="flex-none text-3xl font-bold tracking-tight text-gray-900">
              Personalization Without Discrimination
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg text-justify font-semibold tracking-tight text-gray-900">
                AI that works for everyone
              </p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                Developing tools to mitigate perpetuation of biases encoded in clinical data.
              </p>
            </div>
          </div>
          <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-red-800 p-8 lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p class="flex-none text-3xl font-bold tracking-tight text-white">
              Building The Flywheel
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-white">Promote health equity</p>
              <p class="mt-2 text-base text-justify leading-7 text-red-200">
                We are building open-source tools to maximize the impact of AI in healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research_index
