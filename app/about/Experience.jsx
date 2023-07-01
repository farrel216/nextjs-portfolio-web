import React from 'react'
import { exp } from '../component/Constant'

const Details = ({ item }) => {

    return (

        <div className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {item.position}, <span className='font-normal italic text-xl'>@{item.company}</span>
                </h3>
                <span className='font-medium text-dark/70'>{item.time} | {item.address}</span>
                <p className='w-full'>
                    {item.description}
                </p>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div className='my-32'>
            <h2 className="font-bold text-7xl mb-32 w-full text-center">
                Experience
            </h2>
            <div className='w-[75%] mx-auto relative'>
                <div>
                    {exp.map((item, index) => (
                        <Details key={index} item={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Experience