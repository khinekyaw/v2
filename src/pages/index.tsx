import { Inter } from 'next/font/google'
import { BeakerIcon } from '@heroicons/react/24/solid'

import { cn } from '@/lib/utils'

import Title from '@/components/atoms/Title'
import Box from '@/components/atoms/Box'
import Button from '@/components/atoms/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={cn(
        inter.className,
        'p-10 bg-woodsmoke-50 min-h-screen space-y-2'
      )}
    >
      <Box>
        <h1>Title</h1>
        <Title />
      </Box>
      <Box>
        <h1>Button</h1>
        <div className="flex gap-4">
          <Button color="black" startContent={<BeakerIcon className="w-4" />}>
            Hire Me
          </Button>
          <Button startContent={<BeakerIcon className="w-4" />}>
            copy Email
          </Button>
        </div>
      </Box>
    </main>
  )
}
