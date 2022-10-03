import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import SkillCircle from './Skill'
import { url } from 'inspector'
import { urlFor } from '../sanity'
import Skill from './Skill'
// import Skill fro./SkillCircleill'

type Props = {
  skills: SkillType[]
}

function Skills({ skills }: Props) {

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
        {skills.slice(0, skills.length / 2).map((skill) =>
          <Skill
            key={skill._id}
            skill={skill}
          />)
        }
        {skills.slice(skills.length / 2, skills.length).map((skill) =>
          <Skill
            key={skill._id}
            skill={skill}
            directionLeft
          />)
        }
      </div>
    </motion.div>
  )
}

export default Skills