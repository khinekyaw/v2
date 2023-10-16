import React, { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const Layout = ({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) => {
  return (
    <div className={cn('mx-auto max-w-2xl w-full px-5', className)}>
      {children}
    </div>
  )
}

export default Layout
