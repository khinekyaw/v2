import { cn } from '@/lib/utils'
import React, { FC, ComponentPropsWithRef, forwardRef } from 'react'

const Box: FC<ComponentPropsWithRef<'div'>> = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={cn('box', 'p-5 rounded-2xl', props.className)}>
      {props.children}
    </div>
  )
})

export default Box
