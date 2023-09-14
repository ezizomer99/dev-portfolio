import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md-h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-purple-600'>About</p>
                <p className='py-2 text-gray-600'>
                I am a third-year student at the University of Agder, pursuing a degree in information technology. 
                Throughout my academic journey, I've had the valuable opportunity to engage in a wide range of projects, 
                both within the university curriculum and on personal ventures. 
                While my passion primarily lies in backend development, I also find frontend development to be an enjoyable challenge. 
                As a result, I'm always open to exploring different technology stacks and embracing new experiences in the ever-evolving world of IT.
                </p>
                <p className='py-2 text-gray-600'>
                Further down on this page you can find a list of my skills, as well as a timeline of my experience- and education, and at last, my contact information.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/assets/profile.jpg" width="300" height="300" alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About