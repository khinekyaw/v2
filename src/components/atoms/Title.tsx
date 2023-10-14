import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

export interface TitleProps {
  children?: ReactNode
  className?: string
  disableDot?: boolean
}

const Title = ({ children, disableDot, className }: TitleProps) => {
  return (
    <div className={cn('flex items-center space-x-3', className)}>
      {!disableDot ? (
        <span className="w-2 h-2 rounded-full bg-woodsmoke-300" />
      ) : null}
      <h3 className="text-xl font-medium">{children}</h3>
    </div>
  )
}

export default Title
