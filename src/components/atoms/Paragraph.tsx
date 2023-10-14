import React, { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const Paragraph = ({ children, className, ...props }: ComponentProps<'p'>) => {
  return (
    <p {...props} className={cn('text-lg text-woodsmoke-600', className)}>
      {children}
    </p>
  )
}

export default Paragraph
