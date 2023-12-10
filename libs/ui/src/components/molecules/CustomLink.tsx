'use client'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '../../utils'
import { ChevronRight } from 'lucide-react'

const CustomLinkComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
> = ({ children, href, className, ...props }) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <NextLink
      href={href}
      className={cn(
        active ? 'font-semibold text-primary' : '',
        'flex gap-1 transition-all relative',
        className,
      )}
      {...props}
    >
      {active ? <ChevronRight className="absolute right-full" /> : null}{' '}
      {children}
    </NextLink>
  )
}

export const Link = forwardRef(CustomLinkComponent)
