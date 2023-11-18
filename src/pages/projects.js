import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import { projectsData } from '@/components/static'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image = "", link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative 
        '>
      <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={image} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.2
          }}
          priority
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw, 
          50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, image, github, link, }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative
        '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={image} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.2
          }}
          priority
          sizes='(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 
        50vw'
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline'>Visit</Link>
          <Link href={github} target='_blank' className='w-8'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Nevin Edwin | Project Page</title>
        <meta name='description' content='List of projects that i have worked' />
      </Head>
      <main className='w-full flex flex-col items-center justify-center dark:text-light  '>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16' />

          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
                title={projectsData[0].title}
                type={projectsData[0].type}
                summary={projectsData[0].summary}
                link={projectsData[0].link}
                github={projectsData[0].github}
                image={projectsData[0].image}
              />
            </div>
            {
              projectsData.map((eachProject, index) => {
                if (index !== 0) {
                  return (
                    <div className='col-span-6' key={index}>
                      <Project
                        title={eachProject.title}
                        type={eachProject.type}
                        summary={eachProject.summary}
                        link={eachProject.link}
                        github={eachProject.github}
                        image={eachProject.image}
                      />
                    </div>
                  )
                }
              })
            }
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects