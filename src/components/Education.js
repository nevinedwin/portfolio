import React, { useRef } from 'react'
import { education } from './static'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, name, link, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%]  flex flex-col items-center justify-between'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          durartion: 0.5,
          type: "spring"
        }}
        className='self-start'
      >
        <h3 className='capitalize font-bold text-2xl'>
          {type}
        </h3>
        <a
          href={link}
          target='_blank'
          className='text-primary dark:text-primaryDark capitalize w-full'
        >
          @{name}
        </a>
        <div className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {place}
        </div>
        <p className='font-medium w-full'>{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  })
  return (
    <div className='my-40 dark:text-light'>
      <h2 className='font-bold text-8xl mb-32 w-full text-left'>
        Education
      </h2>
      <div ref={ref} className='w-full mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top '
        />
        <ul className='w-full flex flex-col items-center justify-between pl-12'>
          {education.map((eachEducation, index) => {
            const { type, name, link, time, place, info } =
              eachEducation
            return (
              <Details
                key={index}
                type={type}
                name={name}
                link={link}
                time={time}
                place={place}
                info={info}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Education
