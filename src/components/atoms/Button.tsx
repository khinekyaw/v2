import React, { FC, ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import * as styles from '@/lib/styles'

interface ButtonProps {
  startContent?: ReactNode
  endContent?: ReactNode
  color?: 'white' | 'black'
}

const Button: FC<ComponentPropsWithRef<'button'> & ButtonProps> = forwardRef(
  (
    {
      color = 'white',
      children,
      className,
      startContent,
      endContent,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          styles.box,
          'flex basis-auto items-center whitespace-nowrap',
          'px-3 py-2 gap-2 text-sm font-bold rounded-md',
          color === 'black' && 'bg-woodsmoke-950 text-white',
          className
        )}
      >
        {startContent}
        {children}
        {endContent}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
