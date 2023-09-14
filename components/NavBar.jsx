"use client"
import React, {useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiFillMail} from 'react-icons/ai'
import { BsLinkedin, BsGithub} from 'react-icons/bs'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image 
                src="/assets/logo.png" 
                alt="/" 
                width="125" 
                height="50" 
            />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Education</li>
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact Me</li>
                    </Link>
                </ul>

                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/50" : ""}>
            <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-100 p-10 ease-in duration-500" 
                                : "fixed right-[-100%] top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/assets/logo.png" width="87" height="35" alt='/'  />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                            <li className='py-4 text-sm'>Home</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>About</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Education</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Contact Me</li>
                        </Link>
                    </ul>

                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-purple-950'>Connect With Me</p>
                    </div>

                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsLinkedin />
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsGithub />
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiFillMail />
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default NavBar