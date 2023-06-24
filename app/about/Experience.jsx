import React from 'react'

const Details = ({position, company, time, address, description}) =>{
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}, <span className='font-normal italic text-xl'>@{company}</span>
                </h3>
                <span className='font-medium text-dark/70'>{time} | {address}</span>
                <p className='w-full'>
                    {description}
                </p>
            </div>
        </li>
    )
}

const Experience = () => {
  return (
    <div className='my-32'>
        <h2 className="font-bold text-7xl mb-32 w-full text-center">
            Experience
        </h2>
        <div className='w-[75%] mx-auto relative'>
            <ul>
                <Details position={'Computer Network Laboratory Assistant'} company={'Diponegoro University'} time={`Feb '23 - May '23`} address={'Semarang, Indonesia'} description={`Facilitated lecturer to provide guidance, discussion, and encourage skills to 58 of total computer science once a week for learning concepts, technologies, and principles used in the development and management of computer networks.`}/>
                <Details position={'Algorithm Analysis and Strategy Laboratory Assistant'} company={'Diponegoro University'} time={`Feb '23 - May '23`} address={'Semarang, Indonesia'} description={`Facilitated lecturer to provide guidance, discussion, and encourage skills to 53 of total computer science students once a week about how to design, analyze, and implement algorithms efficiently and effectively in solving certain problems.`}/>
                <Details position={'Web Developer Intern'} company={'PT Rekayasa Agromarin Indonesia'} time={`Aug '22 - Des '22`} address={'Jepara, Indonesia'} description={'Developed a software to receive and collect data from sensors installed in the fishing environment in real time. Part of "Magang Bersertifikat Kampus Merdeka Matching Fund KEDAIREKA"'}/>
            </ul>
        </div>

    </div>
  )
}

export default Experience