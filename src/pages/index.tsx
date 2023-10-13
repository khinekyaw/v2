import { Inter } from 'next/font/google'
import { BeakerIcon } from '@heroicons/react/24/solid'

import { cn } from '@/lib/utils'

import Title from '@/components/atoms/Title'
import Box from '@/components/atoms/Box'
import Button from '@/components/atoms/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={cn(inter.className, 'p-10 bg-woodsmoke-50 min-h-screen')}>
      <Box>
        <Title />
        <Button startContent={<BeakerIcon className="w-4" />}>
          Hire Me Yes Button
        </Button>
      </Box>
    </main>
  )
}
