
"use client"
import React, {useState} from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {

    const [footerBg, setFooterBg] = useState('#d4d4d4')
  return (
    <div>
        <footer
            style={{backgroundColor: `${footerBg}`}}
            className='w-full z-[100] border-t-2 border-solid shadow-xl border-dark text-lg '>
                <div className='py-8 flex flex-col md:flex-row md:items-end md:justify-between'>
                    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                        Hey! You made it to the bottom :D I do not know what to write on the footer yet, 
                        but I will figure something out eventually.
                    </div>
                    <div className='mt-4 flex justify-center space-x-4 md:mt-0 md:justify-end md:space-x-8'>
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
        </footer>
    </div>
  )
}

export default Footer