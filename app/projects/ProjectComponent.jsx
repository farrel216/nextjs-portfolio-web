import React from 'react'
import { project } from '../component/Constant'
import Portfolio from "../component/Portfolio";
const ProjectComponent = () => {
    return (
        <div className="w-full px-4 flex flex-wrap justify-center">
            {project.map((item, index) => (
                <div className="w-full p-4 lg:w-1/2" key={`project-${index}`}>
                    <Portfolio item={item} />
                </div>
            ))}
        </div>
    )
}

export default ProjectComponent