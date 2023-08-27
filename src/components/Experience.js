import React, { useRef } from 'react'
import { experience } from './static'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%]  flex flex-col items-center justify-between dark:text-light'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          durartion: 0.5,
          type: "spring"
        }}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}
        </h3>
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        <div className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {address}
        </div>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })
  return (
    <div className='my-40 flex items-center flex-col justify-center ml-[5%]'>
      <h2 className='font-bold text-8xl mb-32 w-full text-left'>
        Experience
      </h2>
      <div ref={ref} className='w-full mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'
        />
        <ul className='w-full flex flex-col items-center justify-between ml-12'>
          {experience.map((eachExperience, index) => {
            const { position, company, companyLink, time, address, work } =
              eachExperience
            return (
              <Details
                key={index}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                work={work}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Experience
