import { Logo } from '@/components/Logo'
import clsx from 'clsx'
import Link from 'next/link'

export function Footer({ className }) {
  return (
    <footer className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      <div className="border-t border-slate-200 pt-10 pb-16 dark:border-slate-200/5">
        <FooterContent />
      </div>
    </footer>
  )
}

function FooterContent() {
  return (
    <div className="text-center">
      <p className="mt-4 text-sm leading-6 text-slate-500">
        Last updated 01-2024. Source code is freely available
        <Link
          href="https://github.com/gallifantjack"
          className="hover:text-sky-500 dark:hover:text-sky-400 pl-1"
        >
          here.
        </Link>
      </p>
      <p className="mt-4 text-sm leading-6 text-slate-500">
        &copy; {new Date().getFullYear()} Jack Gallifant 
      </p>
    </div>
  )
}

Footer.Content = FooterContent
