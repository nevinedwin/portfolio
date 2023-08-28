import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden 
      md:right-4 md:left-auto md:top-0 md:bottom-auto md:absolute z-40
    '>
      <div className='w-48 h-auto flex justify-center items-center relative md:w-24'  >
        <CircularText className='fill-dark animate-spin-slow dark:!fill-light ' />
        <Link
          href='mailto:nevinedwin100@gmail.com'
          target='_blank'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
         -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light
         w-20 h-20 rounded-full font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light
         md:w-12 md:h-12 md:text-[10px]
         '
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
