import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { customColor } from '../pages'
import { BackCircles } from './BackCircles'

type Props = {}

export default function Hero({ }: Props) {

  const { text } = useTypewriter({
    words: [
      'Nice/to/meet/You.html',
      'MyNameIsAndrey.css',
      'Guy-who-loves-Tea.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackCircles />
      <img
        className='relative rounded-full h-32 w-32 object-cover'
        src="/me.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className='mr-3 font-mono'>{text}</span>
          <Cursor cursorColor={customColor} />
        </h1>

        <div className="pt-2">
          <Link href='#about'><button className="heroButton">About</button></Link>
          <Link href='#experience'><button className="heroButton">Experience</button></Link>
          <Link href='#skills'><button className="heroButton">Skills</button></Link>
          <Link href='#projects'><button className="heroButton">Projects</button></Link>
        </div>

      </div>
    </div>
  )
}