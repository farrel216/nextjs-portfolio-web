'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Carousel from "framer-motion-carousel"
import { BsRouterFill } from 'react-icons/bs'
import { FaReact, FaCloud } from "react-icons/fa"
import { SiNextdotjs, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiCodeigniter, SiGithub, SiLaravel, SiLinux, SiCisco, SiVmware, SiServerless, SiAzuredevops, SiFigma, SiMiro, SiOracle, SiMicrosoftoffice, SiPython } from "react-icons/si"

const Skill = ({ name, x, y, children }) => {
  const [showName, setShowName] = React.useState(false)
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
    cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      onMouseEnter={() => { setShowName(true) }}
      onMouseLeave={() => { setShowName(false) }}
    >
      {children}
      {showName && (
        <>
          &nbsp; {name}
        </>
      )}
    </motion.div>
  )
}

const CarouselSkill = ({ key, className, children }) => {
  return (
    <motion.div
      key={key}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className={`w-full h-screen relative flex items-center justify-center rounded-full ${className}`}>
      {children}
    </motion.div>
  )
}

const Skills = () => {

  return (
    <>
      <h1 className="font-bold text-3xl text-center w-full">Skills</h1>
      <Carousel interval={5000}>

        <CarouselSkill key={1}>
          <div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light">
            Web Development
          </div>
          <Skill name="ReactJS" x="-22vw" y="2vw" >
            <FaReact />
          </Skill>
          <Skill name="ExpressJS" x="-5vw" y="-10vw"><SiExpress /></Skill>
          <Skill name="NextJS" x="20vw" y="6vw">
            <SiNextdotjs />
          </Skill>
          <Skill name="TailwindCSS" x="0vw" y="12vw"><SiTailwindcss /></Skill>
          <Skill name="MongoDB" x="-20vw" y="-15vw"><SiMongodb /></Skill>
          <Skill name="MySQL" x="15vw" y="-12vw"><SiMysql /></Skill>
          <Skill name="CodeIgniter" x="32vw" y="-5vw"><SiCodeigniter /></Skill>
          <Skill name="Laravel" x="0vw" y="-20vw"><SiLaravel /></Skill>
          <Skill name="REST API" x="-17vw" y="15vw"><FaCloud /></Skill>
          <Skill name="GitHub" x="18vw" y="18vw"><SiGithub /></Skill>
        </CarouselSkill>
        <CarouselSkill key={2}>
          <div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark">
            IT Operation
          </div>
          <Skill name="Linux OS" x="-22vw" y="2vw" >
            <SiLinux />
          </Skill>
          <Skill name="Virtual Machine" x="-5vw" y="-10vw"><SiVmware /></Skill>
          <Skill name="Cisco Packet Tracer" x="20vw" y="6vw">
            <SiCisco />
          </Skill>
          <Skill name="Computer Network" x="0vw" y="12vw"><BsRouterFill /></Skill>
          <Skill name="Web Server" x="-20vw" y="-15vw"><SiServerless /></Skill>
          <Skill name="CI/CD" x="15vw" y="-12vw"><SiAzuredevops /></Skill>
        </CarouselSkill>
        <CarouselSkill key={3}>
          <div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark">
            Other
          </div>
          <Skill name="Design" x="20vw" y="6vw"><SiFigma /></Skill>
          <Skill name="Microsoft Office" x="-0vw" y="12vw"><SiMicrosoftoffice /></Skill>
          <Skill name="Data Science" x="-22vw" y="-4vw"><SiPython /></Skill>
          <Skill name="Cloud Computing" x="-20vw" y="6vw"><SiOracle /></Skill>

        </CarouselSkill>

      </Carousel>
    </>
  )
}

export default Skills