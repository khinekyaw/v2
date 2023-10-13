import { cn } from '@/lib/utils'
import React, { FC, ComponentPropsWithRef, forwardRef } from 'react'

const Button: FC<ComponentPropsWithRef<'button'>> = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={cn('box p-2 text-sm font-bold rounded-md', props.className)}
    >
      {props.children}
    </button>
  )
})

export default Button
