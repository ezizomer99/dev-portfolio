import React from 'react'
import { FaLinkedinIn, FaGithub, } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

const Hero = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>Hey, I am <span className='text-purple-600'> Eziz</span></h1>
                <h1 className='py-4 text-gray-700'>A Fullstack Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a fullstack developer that loves to learn new things and build exciting projects. Back-end is my favorite part of development, 
                    but I also enjoy working on the front-end whether it be hobbyprogramming or working with it professionally.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a
                        href='https://www.linkedin.com/in/ezizomer99/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a
                        href='https://github.com/ezizomer99'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <Link href='mailto:ezizomer1999@gmail.com'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero 