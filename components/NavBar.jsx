"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiFillMail} from 'react-icons/ai'
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import { useRouter } from 'next/router'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div 
        style={{backgroundColor: `${navBg}`}}
        className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 shadow-xl z-[100]"}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
                <Image
                    src="/assets/logo.png" 
                    alt="/"
                    width="110" 
                    height="50" 
                />
            </Link>
            
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href='/#home'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>

                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>

                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>

                    <Link href='/#experience'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Experience</li>
                    </Link>

                    <Link href='/#education'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Education</li>
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
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/#home">
                            <li className='py-4 text-sm'>Home</li>
                        </Link>

                        <Link href="/#about">
                            <li className='py-4 text-sm'>About</li>
                        </Link>

                        <Link href="/#skills">
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>

                        <Link href="/#experience">
                            <li className='py-4 text-sm'>Experience</li>
                        </Link>

                        <Link href="/#education">
                            <li className='py-4 text-sm'>Education</li>
                        </Link>
                    </ul>

                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-purple-950'>Connect With Me</p>
                    </div>

                    <div className='flex items-center justify-between my-4 w-full sm:w-[100%] '>
                        <a
                            href='https://www.linkedin.com/in/ezizomer99/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsLinkedin />
                            </div>
                        </a>

                        <a
                            href='https://github.com/ezizomer99'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsGithub />
                            </div>
                        </a>
                        
                        <div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar