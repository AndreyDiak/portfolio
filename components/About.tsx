import React from 'react'
import { motion } from 'framer-motion'
import { customColor } from '../pages'

type Props = {
  about: string
}

export default function About({ about }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className="sectionTitle">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        src="/about.png"
        alt=""
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[700px]'
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className={`underline decoration-[#f7ab0a]/50`}>little</span>{' '}
          background
        </h4>
        <p className='text-base text-gray-200 font-mono'>
          { about }
        </p>
      </div>
    </motion.div>
  )
}
