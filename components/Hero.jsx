import React from 'react'
import { FaLinkedinIn, FaGithub, } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>Hey, I am <span className='text-purple-600'> Eziz</span></h1>
                <h1 className='py-4 text-gray-700'>A Fullstack Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a fullstack developer that loves to learn new things and build exciting projects. Back-end is my favorite part of development, 
                    but I also enjoy working on the front-end whether it be hobbyprogramming or working with it professionally.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-200'>
                        <FaLinkedinIn />
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-200'>
                        <FaGithub />
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-200'>
                        <AiOutlineMail />
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero 