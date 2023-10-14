import { Inter } from 'next/font/google'
import { BeakerIcon } from '@heroicons/react/24/solid'

import { cn } from '@/lib/utils'

import Title from '@/components/atoms/Title'
import Box from '@/components/atoms/Box'
import Button from '@/components/atoms/Button'
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import Badge from '@/components/atoms/Badge'
import BoxedImage from '@/components/patterns/BoxedImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={cn(
        inter.className,
        'p-10 bg-athens-gray-100 min-h-screen space-y-2 text-woodsmoke-800'
      )}
    >
      <Heading>Atoms</Heading>
      <Box>
        <h1>Box</h1>
        <Box variant="flat">Flat Box</Box>
      </Box>
      <Box>
        <h1>Heading</h1>
        <Heading>I'm Khine Kyaw Tun</Heading>
      </Box>
      <Box>
        <h1>Title</h1>
        <Title>Fullstack Developer</Title>
        <Title disableDot>Without Dot</Title>
      </Box>
      <Box>
        <h1>Paragraph</h1>
        <Paragraph>I am a fullstack developer</Paragraph>
      </Box>
      <Box>
        <h1>Badge</h1>
        <Badge>Default Badge</Badge>
        <Badge color="success">• AVAILABLE FOR WORK</Badge>
      </Box>
      <Box>
        <h1>Button</h1>
        <div className="flex gap-4">
          <Button color="black" startContent={<BeakerIcon className="w-4" />}>
            Hire Me
          </Button>
          <Button startContent={<BeakerIcon className="w-4" />}>
            Copy Email
          </Button>
        </div>
      </Box>
      <Heading>Patterns</Heading>
      <Box>
        <h1>Boxed Image</h1>
        <div className="flex gap-3">
          <BoxedImage
            src={'/vercel.webp'}
            alt=""
            sizes="(min-width: 780px) 110px, 46px"
            className="w-16 md:w-20 aspect-square"
          />
          <BoxedImage
            borderRadius="full"
            src={'/vercel.webp'}
            alt=""
            sizes="(min-width: 780px) 110px, 46px"
            className="w-16 md:w-20 aspect-square"
          />
        </div>
      </Box>
    </main>
  )
}
