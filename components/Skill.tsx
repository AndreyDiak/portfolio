'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
   directionLeft?: boolean;
   skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
   return (
      <div className="group relative flex cursor-pointer">
         <motion.img
            initial={{
               x: directionLeft ? -100 : 100,
               opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill.image).url()}
            alt=""
            className="rounded-full border border-gray-500 object-fit object-cover
        w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition 
        duration-300 ease-in-out"
         />
         <div
            className="absolute opacity-0 group-hover:opacity-70 transition
      duration-300 ease-in-out group-hover:bg-white  w-16 h-16 md:w-24 md:h-24 
      xl:w-32 xl:h-32 rounded-full z-0"
         >
            <div className="flex items-center justify-center h-full">
               <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
         </div>
      </div>
   );
}

export default Skill;
