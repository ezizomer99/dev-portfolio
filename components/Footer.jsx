
import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
        <footer className='w-full border-t-2 border-solid shadow-xl border-dark text-lg'>
            <div className='py-8 flex flex-col md:flex-row md:items-end md:justify-between'>
                <div className='flex items-center'>
                    Hey! You made it to the bottom :D I don't know what to write on the footer yet, 
                    but I'll figure something out eventually.
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