import React, { FC, ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import * as styles from '@/lib/styles'

interface ButtonProps {
  startContent?: ReactNode
  endContent?: ReactNode
  color?: 'white' | 'black'
}

const Button: FC<ComponentPropsWithRef<'button'> & ButtonProps> = forwardRef(
  ({ color = 'white', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.box,
          'flex basis-auto items-center whitespace-nowrap',
          'px-2 py-2 gap-2 text-sm font-bold rounded-md',
          color === 'black' && 'bg-woodsmoke-950 text-white',
          props.className
        )}
      >
        {props.startContent}
        {props.children}
        {props.endContent}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
