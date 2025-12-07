import { assets, infoList, toolsData } from '@/src/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay:0.5}}
      className='text-center text-5xl font-ovo mb-20'>About me</motion.h2>

      {/* Image and Paragraph in one horizontal line */}
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex flex-col lg:flex-row items-center gap-10 mb-20'>
        
        <motion.div 
        initial={{opacity: 0, scale:0.9}}
        whileInView={{opacity: 1, scale:1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl flex-shrink-0'>
            <Image src={assets.user_image} alt='user' width={300} height={300} className='w-full rounded-3xl'/>
        </motion.div>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.8}}
        className='flex-1'>
            <p className='font-ovo'>
              I am an undergraduate in <strong>Computing and Information Systems</strong> with a strong interest in building meaningful digital solutions. I enjoy exploring how software works, understanding systems, and contributing to projects that solve real problems. My passion lies not only in development, but also in analyzing requirements, improving processes, and ensuring that technology aligns with user and business needs.
<br/><br/> I am <strong>a quick learner, a confident communicator</strong>, and someone who enjoys both the technical and organizational sides of the IT field. 
My experience spans <strong>software development, data analysis,</strong> and <strong>project coordination</strong>-allowing me to approach challenges from both a developer’s and a planner’s perspective. 
I have experience working in <strong>Agile</strong> environments using Jira and sprints-especially through the FixPoint mobile application project built with Flutter and PostgreSQL-alongside strong development skills in <strong>Java, JavaScript, React, Next.js, Node.js</strong>, and <strong>API integration</strong>.
I work well in teams, stay organized under pressure, and take responsibility for delivering quality results in every project I’m part of.</p>
        </motion.div>
      </motion.div>

      {/* Cards, Tools section - Centered below */}
      <div className='flex flex-col items-center'>
        <motion.ul 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay:1}}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full mb-10'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
                
                <motion.li 
                whileHover={{scale:1.05}}
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 ${isDarkMode ? "border-white hover:shadow-white" : "border-gray-400 hover:shadow-black"}`} key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <div className={`text-gray-600 text-sm  ${isDarkMode ? "text-white" : ""}`}>{description}</div>
                </motion.li>
            ))}
        </motion.ul>

        <motion.h4 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay:1.3}}
        className={`my-6 text-gray-700 font-ovo  ${isDarkMode ? "text-white" : ""}`}>Tools I use</motion.h4>

        <motion.ul 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:1.5}}
        className='flex flex-wrap items-center justify-center gap-3 sm:gap-5 max-w-4xl'>
          {toolsData.map((tool, index)=>(
            
            <motion.li 
            whileHover={{scale:1.1}}
            className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
            key={index}>
              <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default About
