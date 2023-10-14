import { Inter } from 'next/font/google'
import { BeakerIcon } from '@heroicons/react/24/solid'

import { cn } from '@/lib/utils'

import Title from '@/components/atoms/Title'
import Box from '@/components/atoms/Box'
import Button from '@/components/atoms/Button'
import Heading from '@/components/atoms/Heading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={cn(
        inter.className,
        'p-10 bg-athens-gray-100 min-h-screen space-y-2'
      )}
    >
      <Box>
        <h1>Heading</h1>
        <Heading>I'm Khine Kyaw Tun</Heading>
      </Box>
      <Box>
        <h1>Title</h1>
        <Title>Fullstack Developer</Title>
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
