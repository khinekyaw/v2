import React, { FC, ComponentPropsWithRef, forwardRef } from 'react'

import * as styles from '@/lib/styles'
import { cn } from '@/lib/utils'

export type BoxProps = {
  borderRadius?: 'sm' | 'md' | 'lg' | 'full'
} & ComponentPropsWithRef<'div'>

const Box: FC<BoxProps> = forwardRef(
  ({ children, borderRadius, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          styles.box,
          'p-5 rounded-xl',
          borderRadius === 'lg' && 'rounded-2xl',
          borderRadius === 'full' && 'rounded-full',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Box.displayName = 'Box'

export default Box
