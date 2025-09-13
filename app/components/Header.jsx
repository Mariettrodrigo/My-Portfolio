import { assets } from '@/src/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Mariyeta Rodrigo</h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[50px] font-Ovo'>Project Manager & Business Analyst</h1>
      {/*<h2 className='text-3xl sm:text-4xl md:text-[30px] font-Ovo'>with Technical Background</h2>*/}
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am an undergraduate in Computing and Information Systems with interests in project management and business analysis. I also have technical skills in full-stack development. 
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact'
        className='px-6 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >contact me <Image src={assets.right_arrow} alt='' className='w-4' /></a>
        <a href='#sample-resume.pdf' download 
        className='px-6 py-2 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
      </div>
    </div>
  )
}

export default Header
