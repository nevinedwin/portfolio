import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { articleContent } from '@/components/static'
import { motion, useMotionValue } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'


const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const imageRef = useRef(null);

	function handleMouse(event) {
		imageRef.current.style.display = "inline-block";
		x.set(event.pageX);
		y.set(-10);
	}

	function handleMouseLeave(event) {
		imageRef.current.style.display = "none";
		x.set(0);
		y.set(0);
	}

	return (
		<Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
			<h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
			<FramerImage src={img} ref={imageRef} alt='title'
				style={{
					x: x,
					y: y
				}}
				whileInView={{
					opacity: 1
				}}
				initial={{
					opacity: 0
				}}
				transition={{
					duration: 0.2
				}}
				className='z-10 w-96 h-auto hidden absolute rounded-lg' />
		</Link>
	)
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
	return (
		<li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
			<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
			<Link href={link} target='_blank'
				className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
			>
				<FramerImage src={img} alt={title} className='w-full h-auto'
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
			<Link href={link} target='_blank'>
				<h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4'>{title}</h2>
				<p className='text-sm mb-2'>{summary}</p>
				<span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
			</Link>
		</li>
	)
}

const Article = ({ img, title, date, link }) => {
	return (
		<motion.li
			initial={{
				y: 200
			}}
			whileInView={{
				y: 0
			}}
			viewport={{
				once: true
			}}
			transition={{
				duration: 0.5, ease: "easeInOut"
			}}
			className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light
		first:mt-0 border border-dark  dark:border-light border-solid border-r-4 border-b-4'
		>
			<MovingImage title={title} img={img} link={link} />
			<span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
		</motion.li>
	)
}


const Articles = () => {
	return (
		<>
			<Head>
				<title>Nevin Edwin | Article Page</title>
				<meta name='' content='MERN Stack Developer' />
			</Head>
			<main className='w-full flex flex-col items-center justify-center overflow-hidden dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText text={"Words can change the World!"} />
					<ul className='grid grid-cols-2 gap-16 mt-16'>
						{
							articleContent.map((ecahArticle, index) => {
								const { title, img, summary, link, time } = ecahArticle;
								return (
									<FeaturedArticle key={index} title={title} img={img} summary={summary} link={link} time={time} />
								)
							})
						}
					</ul>
					<h2 className='font-bold text-4xl w-full text-center my-16 mt-32'> Article is Empty</h2>
					<ul>
						{
							articleContent.map((ecahArticle, index) => {
								const { title, img, summary, link, date } = ecahArticle;
								return (
									<Article key={index} title={title} img={img} summary={summary} link={link} date={date} />
								)
							})
						}
					</ul>
				</Layout>
			</main>
		</>

	)
}

export default Articles