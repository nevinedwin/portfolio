import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { aboutContent, aboutHeading, aboutStatus } from '@/components/static'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/aboutPic.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import bulb from '../../public/images/bulb.png'
import { motion } from 'framer-motion'
import AnimatedImage from '@/components/AnimatedImage'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Nevin Edwin | About Page</title>
        <meta name='' content='MERN Stack Developer' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={aboutHeading} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2
            md:col-span-8
            '>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark dark:text-light opacity-75'>
                About Me
              </h2>
              {aboutContent.map((eachItem, index) => (
                <p key={index} className='mt-4 font-medium'>
                  {eachItem}
                </p>
              ))}
            </div>
            <div
              className='col-span-3 relative h-max rounded-2xl border-2 border-solid 
            border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4
            md:order-1 md:col-span-8
            '
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-white' />
              <Image
                src={profilePic}
                alt='Nevin Edwin'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 
                33vw'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center 
            md:order-3
            '>
              {aboutStatus.map((eachStatus, index) => (
                <div
                  key={index}
                  className='flex flex-col items-end justify-center xl:items-center'
                >
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={eachStatus.number} />+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                  xl:text-center md:text-lg sm:text-base xs:text-sm
                  '>
                    {eachStatus.content}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </Layout>
        <Skills />
        <div className='flex w-full mb-40'>
          <div className='flex-1 w-[50%] h-auto justify-center items-center ml-40'>
            <Experience />
          </div >
          <div className='flex-1 w-[50%]'></div>
        </div>
        <div className='flex w-full h-auto justify-end items-end mb-40'>
          <div className='w-[50%]'>
            <Education />
          </div>
        </div>
      </main>
    </>
  )
}

export default about
