'use client'
import React from 'react'
import { project } from '../component/Constant'
import Portfolio from "../component/Portfolio";
import { motion } from 'framer-motion'

const ProjectComponent = () => {

    return (
        <div className="w-full px-4 flex flex-wrap justify-center">
            {project.map((item, index) => (
                <motion.div initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }} className="w-full p-4 lg:w-1/2" key={`project-${index}`}>
                    <Portfolio item={item} />
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectComponent