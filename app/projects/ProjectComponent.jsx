'use client'
import React from "react";
import monitoring from "../../public/images/portfolio/portfolio-monitoring.png";
import Image from "next/image";
import { SiBootstrap, SiCodeigniter, SiGithub, SiMysql } from "react-icons/si";
import { AiFillRocket } from "react-icons/ai";
import Link from "next/link";

const Project = ({ title, img, alt, tech, github, demo }) => {
    const [showGit, setShowGit] = React.useState(false)
    const [showDemo, setShowDemo] = React.useState(false)
    return (
        <>
            <div className="group relative overflow-hidden border-2 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <Image className="group-hover:scale-125 transition-all duration-500" src={img} alt={alt} />
                <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                    <div className="flex gap-2 items-center text-2xl">
                        {tech}
                    </div>
                </div>
                <div className="absolute left-12 -bottom-full group-hover:bottom-16 transition-all duration-700 z-50">
                    <span className="text-3xl text-green-500">{title}</span>
                </div>
                <div className="absolute left-12 -bottom-full group-hover:bottom-8 transition-all duration-1000 z-50">
                    <div className="flex gap-2 items-center text-xl">
                        <a className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
     absolute" href={github} onMouseEnter={() => { setShowGit(true) }}
                            onMouseLeave={() => { setShowGit(false) }} ><SiGithub /> {showGit && <span className="text-base">&nbsp;Code</span>}</a>
                        <a className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
     absolute left-28" href={demo} onMouseEnter={() => { setShowDemo(true) }}
                            onMouseLeave={() => { setShowDemo(false) }}><AiFillRocket />{showDemo && <span className="text-base">&nbsp;Demo</span>}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProjectComponent = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-x-10">
                <div className="flex-1 flex flex-col gap-y-12 mb-10">
                    <h2 className="font-bold text-3xl mb-2 text-primary text-center lg:text-start">PORTFOLIO</h2>
                    <p className="font-bold text-dark text-lg mb-4">Featured Projects</p>
                    <div className="mb-16">
                    <Link href={"/projects"} className=" inline-block border bg-indigo-400 text-light py-2 px-5 text-lg font-semibold rounded-lg items-center hover:bg-indigo-600 hover:shadow-lg transition duration-300 ease-in-out">
                View All Projects
              </Link>
                    </div>
                        <Project title={'Monitoring Sensor Website'} img={monitoring} alt={'Website Monitoring'} tech={<><SiBootstrap /> <SiCodeigniter /> <SiMysql /></>} github={'github.com'} demo={'monitoring.cemebsa.com'} />
                </div>
                <div className={'flex-1 flex flex-col gap-y-8'}>
                        <Project title={'Monitoring Sensor Website'} img={monitoring} alt={'Website Monitoring'} tech={<><SiBootstrap /> <SiCodeigniter /> <SiMysql /></>} github={'github.com'} demo={'monitoring.cemebsa.com'} />
                        <Project title={'Monitoring Sensor Website'} img={monitoring} alt={'Website Monitoring'} tech={<><SiBootstrap /> <SiCodeigniter /> <SiMysql /></>} github={'github.com'} demo={'monitoring.cemebsa.com'} />
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
