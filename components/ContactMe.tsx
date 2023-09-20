'use client'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
   email: string;
   phoneNumber: string;
   address: string;
};

type Inputs = {
   name: string;
   email: string;
   subject: string;
   message: string;
};

function ContactMe({ email, phoneNumber, address }: Props) {
   const { register, handleSubmit } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto:brodiaga_0880@mail.ru?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
   };

   return (
      <div className="sectionContainer md:text-left md:flex-row max-w-7xl">
         <h4 className="sectionTitle">Contact</h4>

         <div className="flex flex-col space-y-10">
            <h4 className="flex flex-col md:flex-row text-2xl md:text-4xl font-semibold text-center">
               I have got just what you need.{' '}
               <div className={`underline decoration-[#f7ab0a]/50`}>Lets talk</div>
            </h4>

            <div className="flex justify-center">
               <div>
                  <div className="flex items-center  space-x-5 justify-start md:justify-center">
                     <PhoneIcon className={`text-[#f7ab0a] h-7 w-7 animate-pulse`} />
                     <p className="text-2xl">{phoneNumber}</p>
                  </div>

                  <div className="flex items-center space-x-5 justify-start md:justify-center">
                     <EnvelopeIcon className={`text-[#f7ab0a] h-7 w-7 animate-pulse`} />
                     <p className="text-2xl">{email}</p>
                  </div>

                  <div className="flex items-center  space-x-5 justify-start md:justify-center">
                     <MapPinIcon className={`text-[#f7ab0a] h-7 w-7 animate-pulse`} />
                     <p className="text-2xl">{address}</p>
                  </div>
               </div>
            </div>

            <form
               onSubmit={handleSubmit(onSubmit)}
               action=""
               className="flex flex-col space-y-2 px-10 md:w-full"
            >
               <div className="flex space-x-0 md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row">
                  <input
                     {...register('name')}
                     placeholder="Name"
                     className="contactInput"
                     type="text"
                  />
                  <input
                     {...register('email')}
                     placeholder="Email"
                     className="contactInput"
                     type="email"
                  />
               </div>

               <input
                  {...register('subject')}
                  placeholder="Subject"
                  className="contactInput"
                  type="text"
               />

               <textarea
                  {...register('message')}
                  placeholder="Message"
                  className="contactInput"
                  name=""
                  id=""
               />

               <button
                  type="submit"
                  className={`bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#f7ab0a]/80`}
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
}

export default ContactMe;
