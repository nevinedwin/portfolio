import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { aboutContent, aboutHeading, aboutStatus } from '@/components/static'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profilePic.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import bulb from '../../public/images/bulb.png'
import {motion} from 'framer-motion'
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
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text={aboutHeading} className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark opacity-75'>
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
            border-dark bg-light p-8'
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image
                src={profilePic}
                alt='Nevin Edwin'
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              {aboutStatus.map((eachStatus, index) => (
                <div
                  key={index}
                  className='flex flex-col items-end justify-center'
                >
                  <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={eachStatus.number} />+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75'>
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
            <Education/>
          </div>
        </div>
      </main>
    </>
  )
}

export default about
