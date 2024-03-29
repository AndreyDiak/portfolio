import React from 'react';
import { Experience } from '../typings';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import Image from 'next/image';

interface Props {
   experience: Experience;
}

export const ExperienceCard = ({ experience }: Props) => {
   return (
      <article
         className="flex flex-col rounded-lg space-y-7 flex-shrink-0 w-full md:w-[600px] 
         xl:w-[700px] max-h-[650px] snap-center bg-[#292929] hover:opacity-100 
      opacity-40 cursor-pointer p-4 md:p-10 transition-opacity duration-200 overflow-hidden"
      >
         {experience.companyImage && (
            <motion.img
               initial={{
                  y: -100,
                  opacity: 0,
               }}
               transition={{ duration: 1.2 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-[300px] h-[150px] md:w-[400px] md:h-[200px] object-cover object-center"
               src={urlFor(experience?.companyImage).url()}
            />
         )}

         <div className="px-0 md:px-10">
            <h4 className="text-2xl md:text-4xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-2xl my-2">{experience.company}</p>
            <div className="flex space-x-4 my-2">
               {experience.technologies.map((technology) => (
                  <>
                     {technology.image && (
                        <Image
                           key={technology._id}
                           width={50}
                           height={50}
                           src={urlFor(technology.image).url()}
                           className="rounded-full object-cover object-center"
                           alt=""
                        />
                     )}
                  </>
               ))}
            </div>
            <p className="uppercase py-5 text-gray-300">
               {new Date(experience.dateStarted).toDateString()} -{' '}
               {experience.isCurrentlyWorkingHere
                  ? 'Present'
                  : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul
               className="space-y-2 text-white md:space-y-4 ml-5 
            text-base md:text-lg overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]"
            >
               {experience?.points?.map((point) => (
                  <li
                     key={point}
                     style={{
                        listStyle: 'inside',
                        color: '#F7AB0A',
                     }}
                  >
                     <span className="text-white">{point}</span>
                  </li>
               ))}
            </ul>
         </div>
      </article>
   );
};
