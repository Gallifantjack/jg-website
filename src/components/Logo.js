import clsx from 'clsx'
import { ReactComponent as JGLogo } from '../../assets/JG_logo.svg';

export function Logo({ className, ...props }) {
  return (
    <JGLogo
      className={clsx('text-slate-900 dark:text-white', className)}
      {...props}
    />
  )
}
