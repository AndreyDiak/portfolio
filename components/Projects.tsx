'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
   projects: Project[];
};

function Projects({ projects }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="sectionContainer overflow-hidden text-left max-w-full z-0"
      >
         <h3 className="sectionTitle">Projects</h3>

         <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />

         <div
            className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-track-gray-400/20 
        scrollbar-thumb-amber-500/80 scrollbar-thin"
         >
            {projects.map((project, index) => (
               <div
                  key={index}
                  className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-10 sm:p-20 md:p-44 h-screen"
               >
                  <motion.img
                     initial={{
                        y: -300,
                        opacity: 0,
                     }}
                     transition={{ duration: 1.2 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     src={urlFor(project.image).width(1200).url()}
                     alt=""
                  />

                  <div className="space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl">
                     <h4 className="text-2xl md:text-4xl font-semibold text-center">
                        <span className="underline decoration-[#f7ab0a]/50">
                           Case study {index + 1} of {projects.length}:
                        </span>{' '}
                        {project.title}
                     </h4>

                     <p className="text-base md:text-lg text-center md:text-left">
                        {project.summary}
                     </p>
                  </div>
               </div>
            ))}
            {/* projects... */}
         </div>
      </motion.div>
   );
}

export default Projects;
