import { cn } from '@lib/utils'
import Link from 'next/link'
type ButtonProps = {
  children: string
  url?: string
  submit?: boolean
}

export default function Button({ children, url, submit = false }: ButtonProps) {
  const buttonClasses = [
    // basic style
    'from-main to-accents mb-2  me-2 mt-4 rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-sm font-medium text-white',
    // hover style
    'hover:bg-gradient-to-l',
    'focus:ring-orange focus:outline-none focus:ring-4',
  ]

  return (
    <>
      {url ? (
        <Link href={url} target="blank">
          <button type="button" className={cn(buttonClasses)}>
            {children}
          </button>
        </Link>
      ) : (
        <button type="submit" className={cn(buttonClasses)}>
          {children}
        </button>
      )}
    </>
  )
}
