'use client';
import Link from 'next/link';
import type { Image as ImageType } from '../typings';
import Image from 'next/image';
import { urlFor } from '../sanity';

function Footer({ image }: { image: ImageType }) {
   return (
      <Link href="#hero">
         <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
               <Image
                  width={50}
                  height={50}
                  src={urlFor(image).width(50).url()}
                  alt=""
                  className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
               />
            </div>
         </footer>
      </Link>
   );
}

export default Footer;
