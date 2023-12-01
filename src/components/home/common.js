import clsx from 'clsx'
import { Button } from '../Button'

export function IconContainer({ as: Component = 'div', className = '', light, dark, ...props }) {
  return (
    <Component
      className={`w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden ${className}`}
      {...props}
    >
      {light && (
        <div
          className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
          style={{
            backgroundImage: `url(${light})`,
          }}
        />
      )}
      {dark && (
        <div
          className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
          style={{
            backgroundImage: `url(${dark})`,
          }}
        />
      )}
    </Component>
  )
}

export function Caption({ className = '', ...props }) {
  return <h2 className={`mt-8 font-semibold ${className}`} {...props} />
}

export function BigText({ className = '', ...props }) {
  return (
    <p
      className={`mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight ${className}`}
      {...props}
    />
  )
}

export function Paragraph({ as: Component = 'p', className = '', ...props }) {
  return <Component className={`mt-4 max-w-3xl space-y-6 text-justify ${className}`} {...props} />
}

export function Link({ className, ...props }) {
  return <Button className={clsx('mt-8', className)} {...props} />
}

export function InlineCode({ className = '', ...props }) {
  return (
    <code
      className={`font-mono text-slate-900 font-medium dark:text-slate-200 ${className}`}
      {...props}
    />
  )
}

export { Widont } from '@/components/Widont'

export let themeTabs = {
  Simple: (selected) => (
    <>
      <path
        d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  Economics: (selected) => (
    <>
      <path
        d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  History: (selected) => (
    <>
      <path
        d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z" // TODO: change svg
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  Business: (selected) => (
    <>
      <path
        d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
}
