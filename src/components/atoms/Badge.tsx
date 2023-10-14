import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

export type BadgeProps = {
  color?: 'default' | 'success'
} & ComponentProps<'span'>

const Badge = ({
  color = 'default',
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      {...props}
      className={cn(
        'px-2 py-1',
        'rounded-s-full rounded-e-full bg-woodsmoke-100',
        'text-sm font-medium',
        color === 'success' && 'bg-green-100 text-green-600',
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
