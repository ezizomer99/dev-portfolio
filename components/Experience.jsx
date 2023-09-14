import React from 'react'

const Details = ({position, company, companyLink, date, location, work}) => {

    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='uppercase font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
            target='_blank'
            className='text-purple-800'
            >@{company}</a></h3>
            <span className='uppercase font-medium text-gray-500'>
                {date} | {location}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] m-auto'>
        <p className='uppercase text-xl tracking-widest text-purple-600'>Experience</p>

            <div className='w-[75%] mx-auto relative'>

                <div className='absolute left-8 top-8 w-[4px] h-full bg-dark origin-top'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                    position="Frontend Developer Intern" company="Sikri"
                    companyLink="https://www.sikri.no/"
                    date="August 2023 - Present" location="Kristiansand, Norway"
                    work="Working with a team responsible for developing software used by the Norwegian municipalities and counties.
                    I am specifically working on the eBuilding Case System, which is used by the municipalities to manage building cases."
                    />

                    <Details 
                    position="Fullstack .NET Developer" company="Nordic Door AS | University of Agder"
                    companyLink="https://www.nordicdoor.no/"
                    date="August 2022 - December 2022" location="Remote"
                    work="During my third semester, me and my group got a project through the University of Agder, where we were tasked with developing a web application for Nordic Door AS.
                    The application was developed using C# along with the .NET framework, and the frontend was developed using basic HTML & Bootstrap CSS.
                    It was also developed using the MVC architectural pattern, where we had a Model, View and Controller for each page.
                    Docker was used to containerize the application, MySQL was used as the database in MariaDB. 
                    The web application was developed using an agile Scrum methodology, where we had daily scrum meetings, sprint planning meetings, sprint reviews and sprint retrospectives.
                    We also used Azure DevOps to manage our project, where we had a backlog of user stories, and we used Azure Boards to manage our sprints.
                    The application was made to streamline, manage & systematize the internal process of creating & managing improvement proposals submitted by employees.
                    We estimate that around 200 workers went from using a manual process with post-it notes on a physical board to a robust and digital solution."
                    />

                    <Details 
                    position="Mentor & Teaching Assistant" company="University of Agder"
                    companyLink="https://www.uia.no/en"
                    date="August 2022 - December 2022" location="Kristiansand, Norway"
                    work="Gave academic guidance to first-year IT students, and helped them with their assignments and projects.
                    I also corrected assignments, and would give feedback to the students on how they could improve their work.
                    If needed, I would also give lectures on various topics, such as HTML, CSS, JavaScript, Git & GitHub."
                    />

                    <Details 
                    position="Warehouse Employee" company="Manpower AS"
                    companyLink="https://www.sikri.no/"
                    date="January 2021 - July 2021" location="Langhus, Norway"
                    work="I worked full-time at a warehouse as I was transitioning studies from Civil Engineering to Information Technology.
                    Here I gained a new perspective on what it means to work full-time, and I learned a lot about myself and what I want to do in the future."
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience