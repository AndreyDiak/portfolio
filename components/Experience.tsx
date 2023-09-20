'use client';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { ExperienceCard } from './ExperienceCard';

interface Props {
   experiences: Experience[];
}

export default function Experience({ experiences }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 3.5 }}
         className="sectionContainer overflow-hidden text-left max-w-full "
      >
         <h3 className="sectionTitle">Experience</h3>
         <div className="w-full flex justify-evenly p-2 md:p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray400/20 scrollbar-thumb-[#F7AB0A]/80">
            {experiences.map((experience) => (
               <ExperienceCard key={experience._id} experience={experience} />
            ))}
         </div>
      </motion.div>
   );
}
