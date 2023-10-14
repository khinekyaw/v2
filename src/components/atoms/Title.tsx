import React, { ReactNode } from 'react'

export interface TitleProps {
  children?: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="w-2 h-2 rounded-full bg-woodsmoke-300" />
      <h3 className="text-xl font-medium">{children}</h3>
    </div>
  )
}

export default Title
