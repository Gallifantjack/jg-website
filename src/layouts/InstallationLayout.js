import { BasicLayout } from '@/layouts/BasicLayout'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import {
  BigText,
  Caption,
  IconContainer,
  Link,
  Paragraph,
  Widont,
  themeTabs,
} from '@/components/home/common'

export function InstallationLayout({ children }) {
  let router = useRouter()

  return (
    <section id="my-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-sky-500 dark:highlight-white/30"
          light={require('@/img/icons/home/build-anything.png').default.src}
          dark={require('@/img/icons/home/dark/build-anything.png').default.src}
        />
        <Caption className="text-sky-500 dark:text-sky-400">Background</Caption>
        <BigText>
          <Widont>Jack Gallifant.</Widont>
        </BigText>
        <Paragraph>
          I am a {' '}
          <a className="text-sky-500 font-semibold dark:text-sky-400">Postdoctoral researcher at MIT </a>{' '}
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
        <div className="relative z-10">
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
