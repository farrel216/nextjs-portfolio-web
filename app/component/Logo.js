'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mx-20'>
        <MotionLink href='/'
        className='font-bold text-4xl bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'
        whileHover={{scale:1.5}}
        >
            ARP
        </MotionLink>
    </div>
  )
}

export default Logo