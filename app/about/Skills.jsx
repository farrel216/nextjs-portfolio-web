'use client'
import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
    cursor-pointer absolute"
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x, y:y}}
    transition={{duration:1.2}}>
    {name}
  </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-7xl text-center w-full">Skills</h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full">
        <div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark">
          Web Development
        </div>
        <Skill name="HTML" x="20vw" y="6vw"/>
        <Skill name="HTML" x="0vw" y="6vw"/>
        <Skill name="HTML" x="-20vw" y="6vw"/>
        <Skill name="HTML" x="10vw" y="6vw"/>
        <Skill name="HTML" x="5vw" y="6vw"/>
        <Skill name="HTML" x="-9vw" y="6vw"/>
      </div>
    </>
  )
}

export default Skills