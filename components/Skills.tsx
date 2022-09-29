import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
  return (
    <motion.div
      className='relative flex flex-col text-center md:text-left 
      xl:flex-row max-w-[2000px] justify-center items-center xl:px-10 min-h-screen xl:space-y-0 mx-auto'
    >
      <h3 className="sectionTitle">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px]
      text-gray-500 text-sm"
      >
        Hover over a skill currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        
      </div>
    </motion.div>
  )
}

export default Skills