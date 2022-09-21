import React from 'react'
import { motion } from 'framer-motion'
import { customColor } from '../pages'
type Props = {}

export function BackCircles({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0]
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#333333] rounded-full 
      w-[200px] h-[200px] animate-ping mt-52'/>
      <div className='absolute border border-[#333333] rounded-full 
      w-[300px] h-[300px] mt-52'/>
      <div className='absolute border border-[#333333] rounded-full 
      w-[500px] h-[500px] mt-52'/>
      <div className={`absolute border border-[${customColor}] opacity-20
      w-[650px] h-[650px] rounded-full animate-pulse mt-52`}/>
      <div className='absolute border border-[#333333] rounded-full
      w-[800px] h-[800px] mt-52 opacity-40'/>  
    </motion.div>
  )
}