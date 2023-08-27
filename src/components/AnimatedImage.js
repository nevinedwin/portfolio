import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const imageAnimation = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 1
    }
  }
}

const AnimatedImage = ({ image, name = 'img', className = '' }) => {
  return (
    <motion.div
      variants={imageAnimation}
      initial='initial'
      animate='animate'
      className='w-full h-auto flex justify-center items-center'
    >
      <Image src={image} alt={name} className={`w-full h-full ${className}`} 
      priority
      sizes='(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw, 
      50vw' />
    </motion.div>
  )
}

export default AnimatedImage
