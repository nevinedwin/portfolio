import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profilePic.png'
// import profilePic from '../../public/images/developer-pic-1.png'
import { homePageContent, homePageHeading } from '@/components/static'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import Footer from '@/components/Footer'
import HireMe from '@/components/HireMe'
import AnimatedImage from '@/components/AnimatedImage'
// import bulbImg from '../../public/images/'

export default function Home () {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Nevin Edwin Portfolio' />
      </Head>
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:order-2'>
              <AnimatedText
                text={homePageHeading}
                className='!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl
                '
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>{homePageContent}</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/resume.pdf'
                  target={'_blank'}
                  className='flex items-center p-2.5 px-6
               bg-dark text-light  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
               border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
               md:p-2 md:px-4 md:text-base
               '
                  // download={true} //for downloading resume uncomment this
                >
                  Resume <LinkArrow className='w-6 ml-1' />
                </Link>
                <Link
                  href='mailto:nevinedwin100@gmail.com'
                  className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline 
                  md:text-base
                  '
                  target={'_blank'}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex px-10 pb-20 md:w-full md:order-1'>
              <AnimatedImage
                image={profilePic}
                name='profilePic'
                className='w-full h-fit lg:!hidden md:!inline-block md:!w-full'
              />
            </div>
          </div>
        </Layout>
        <HireMe />
        <div>{/* <Image src={} alt='bulb' className='w-full h-auto'/> */}</div>
      </main>
      {/* <Footer /> */}
    </>
  )
}
