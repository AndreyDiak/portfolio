'use client';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackCircles, customColor } from './BackCircles';
import { urlFor } from '../sanity';
import { Image as ImageType } from '../typings';
import Image from 'next/image';

type Props = {
   role: string;
   image: ImageType;
};

export default function Hero({ role, image }: Props) {
   const { text } = useTypewriter({
      words: [
         'Nice/to/meet/You.html',
         'MyNameIsAndrey.css',
         'Guy-who-loves-Tea.tsx',
         '<ButLovesToCodeMore />',
      ],
      loop: true,
      delaySpeed: 2000,
   });

   return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
         <BackCircles />
         <Image
            width={200}
            height={200}
            className="relative rounded-full h-32 w-32 object-cover"
            src={urlFor(image).width(200).url()}
            alt=""
         />
         
         <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px]">{role}</h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
               <span className="mr-3 font-mono">{text}</span>
               {/* @ts-ignore */}
               <Cursor cursorColor={customColor} />
            </h1>

            <div className="pt-4">
               <Link href="#about">
                  <button className="heroButton">About</button>
               </Link>
               <Link href="#experience">
                  <button className="heroButton">Experience</button>
               </Link>
               <Link href="#skills">
                  <button className="heroButton">Skills</button>
               </Link>
               <Link href="#projects">
                  <button className="heroButton">Projects</button>
               </Link>
            </div>
         </div>
      </div>
   );
}
