'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';
import { InboxIcon } from '@heroicons/react/24/solid';

type Props = {
   socials: Social[];
};

function Header({ socials }: Props) {
   return (
      <header
         className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center"
      >
         <motion.div
            initial={{
               x: -500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{
               x: 0,
               opacity: 1,
               scale: 1,
            }}
            transition={{
               duration: 1.2,
            }}
            className="flex flex-row items-center"
         >
            {/* Socials */}
            {socials.map((social) => (
               <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" />
            ))}
         </motion.div>

         <motion.div
            initial={{
               x: 500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{
               x: 0,
               opacity: 1,
               scale: 1,
            }}
            transition={{
               duration: 1.2,
            }}
            className="cursor-pointer group"
         >
            <Link href="#contact" className="flex space-x-2 items-center">
               <InboxIcon className={`h-7 w-7`} color="gray" />
               <p className="uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:text-gray-300">
                  Get In Touch
               </p>
            </Link>
         </motion.div>
      </header>
   );
}

export default Header;
