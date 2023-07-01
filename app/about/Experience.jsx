'use client'
import React from 'react'
import { exp } from '../component/Constant'
import { motion, useScroll } from 'framer-motion'
import LilIcon from '../component/LilIcon'

const Details = ({ item }) => {
    const ref = React.useRef(null);
    return (

        <div ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LilIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {item.position}, <span className='font-normal italic text-xl'>@{item.company}</span>
                </h3>
                <span className='font-medium text-dark/70'>{item.time} | {item.address}</span>
                <p className='w-full text-justify'>
                    {item.description}
                </p>
            </motion.div>
        </div>
    )
}

const Experience = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='mt-32 mb-44'>
            <h2 className="font-bold text-3xl mb-16 w-full text-center">
                Experience
            </h2>
            <div ref={ref} className='w-full lg:w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
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