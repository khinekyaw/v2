import React, { ComponentPropsWithRef, FC, ReactNode, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface HeadingProps {
  as?: heading
  children?: ReactNode
}

const Heading: FC<ComponentPropsWithRef<heading> & HeadingProps> = forwardRef(
  ({ as: Component = 'h1', children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-4xl font-bold', className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
