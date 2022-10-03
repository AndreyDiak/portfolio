import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { customColor } from '../pages'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {
  email: string
  phoneNumber: string
  address: string
}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

function ContactMe({ email, phoneNumber, address }: Props) {

  const {
    register,
    handleSubmit
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:brodiaga_0880@mail.ru?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center'>
      <h4 className="sectionTitle">Contact</h4>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className={`underline decoration-[#f7ab0a]/50`}>Lets talk</span>
        </h4>

        <div className="">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className={`text-[#f7ab0a] h-7 w-7 animate-pulse`} />
            <p className="text-2xl">{phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className={`text-[#f7ab0a] h-7 w-7 animate-pulse`} />
            <p className="text-2xl">{email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className={`text-[#f7ab0a] h-7 w-7 animate-pulse`} />
            <p className="text-2xl">{address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col w-fit space-y-2 mx-auto'>
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name' className='contactInput' type="text" />
            <input
              {...register('email')}
              placeholder='Email' className='contactInput' type="email" />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject' className='contactInput' type="text" />

          <textarea
            {...register('message')}
            placeholder='Message' className='contactInput' name="" id="" />

          <button
            type='submit'
            className={`bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#f7ab0a]/80`}
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default ContactMe