'use client';
import { motion } from 'framer-motion';

type Props = {
   about: string;
};

export default function About({ about }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 3.5 }}
         className="sectionContainer max-w-7xl"
      >
         <h3 className="sectionTitle">About</h3>
         <motion.img
            initial={{
               x: -200,
               opacity: 0,
            }}
            transition={{
               duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            src="/about.png"
            alt=""
            className="-mb-20 md:mb-0 flex-shrink-0 w-24 h-24 sm:w-48 sm:h-48 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[700px]"
         />

         <div className="space-y-4 md:space-y-10 px-0 md:px-10">
            <h4 className="text-2xl md:text-4xl font-semibold">
               Here is a <span className={`underline decoration-[#f7ab0a]/50`}>little</span>{' '}
               background
            </h4>
            <p className="text-sm md:text-base text-gray-200 font-mono text-left">{about}</p>
         </div>
      </motion.div>
   );
}
