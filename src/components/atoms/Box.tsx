import React, { FC, ComponentPropsWithRef, forwardRef } from 'react'

import * as styles from '@/lib/styles'
import { cn } from '@/lib/utils'

const Box: FC<ComponentPropsWithRef<'div'>> = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={cn(styles.box, 'p-5 rounded-2xl', props.className)}
    >
      {props.children}
    </div>
  )
})

Box.displayName = 'Box'

export default Box
