import React from 'react'
import Image, { ImageProps } from 'next/image'

import { cn } from '@/lib/utils'
import Box from '../atoms/Box'

export type BoxImageProps = {
  borderRadius?: 'sm' | 'md' | 'lg' | 'full'
} & ImageProps

const BoxedImage = ({ borderRadius, className, ...props }: BoxImageProps) => {
  return (
    <Box
      borderRadius={borderRadius}
      className={cn('relative p-2 overflow-hidden', className)}
    >
      <div
        className={cn(
          'w-full h-full relative overflow-hidden',
          'rounded-lg',
          borderRadius === 'full' && 'rounded-full'
        )}
      >
        <Image fill {...props} />
      </div>
    </Box>
  )
}

export default BoxedImage
