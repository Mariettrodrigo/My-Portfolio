"use client"
import { assets } from '@/src/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { Typewriter } from 'react-simple-typewriter'

const Header = ({isDarkMode}) => {

  const words = [
    "Aspiring IT Professional",
    "Software Developer",
    "Business Analyst",
    "Project Manager",
  ];

  return (
    <div className='w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale:0 }}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type:'spring', stiffness:100}}
      >
        <Image src={assets.profile_img} alt='' className='w-30 rounded-full' />
      </motion.div>

       {/* Name — now BIGGER */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-3xl md:text-5xl font-ovo mb-1'>
        Hi! I'm Mariyeta Rodrigo
      </motion.h3>

       {/* Typewriter Title — now SMALLER */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-xl sm:text-2xl lg:text-3xl font-ovo'
      >
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </motion.h1>

      
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.6, delay:0.7}}
      className='max-w-2xl mx-auto font-ovo leading-tight'>
        A motivated and well-organized individual with a passion for software development, strong analytical and communication skills, and a growing interest in leading and supporting technology-driven projects.</motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        
        <motion.a 
        initial={{y: 30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.6, delay:1}}
        href='#contact'
        className={`px-6 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 ${isDarkMode ? "bg-transparent border-white text-white" : "bg-black text-white border-black"}`}
        >contact me <Image src={ assets.right_arrow_white} alt='' className='w-4' /></motion.a>
        
        <motion.a 
        initial={{y: 30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.6, delay:1.2}}
        href='/my-resume.pdf' download="my-resume.pdf"
        className={`px-6 py-2 border rounded-full border-gray-500 flex items-center gap-2 ${isDarkMode ? "bg-white !text-black" : "border-gray-500 text-black"}`}>my resume 
        <Image src={assets.download_icon} alt='' className='w-4'
        />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
