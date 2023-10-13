import { cn } from '@/lib/utils'
import React, { FC, ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

interface ButtonProps {
  startContent?: ReactNode
  endContent?: ReactNode
}

const Button: FC<ComponentPropsWithRef<'button'> & ButtonProps> = forwardRef(
  (props, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'box',
          'flex basis-auto items-center whitespace-nowrap',
          'px-2 py-2 gap-2 text-sm font-bold rounded-md',
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

export default Button
