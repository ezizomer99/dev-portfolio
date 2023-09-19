import React from 'react'

const Details = ({study, university, date, location, desc}) => {

    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='uppercase font-bold text-2xl'>{study}&nbsp; <a href={university}
            target='_blank'
            className='text-purple-800'
            >@{university}</a></h3>
            <span className='uppercase font-medium text-gray-500'>
                {date} | {location}
            </span>
            <p className='font-medium w-full'>
                {desc}
            </p>
        </div>
    </li>
}

const Education = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div id="education" className='max-w-[1240px] m-auto'>
        <p className='uppercase text-xl tracking-widest text-purple-600 '>Education (under construction)</p>

            <div className='w-[75%] mx-auto relative'>
            
            <div className='absolute left-8 top-0 bottom-0 w-[2px] bg-dark' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 ' >
                    <Details 
                    study="IT" university="University of Agder"
                    date="August 2021 - Present" location="Kristiansand, Norway"
                    desc="idk what speodfjsdfsdkolfnsfjdsknf"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Education