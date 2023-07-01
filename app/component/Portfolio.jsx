'use client'
import Image from 'next/image'
import React from 'react'
import { AiFillRocket } from 'react-icons/ai'
import { SiGithub } from 'react-icons/si'
import placehold from '../../public/images/placehold.png'


const Portfolio = ({ item }) => {
    const [showGit, setShowGit] = React.useState(false)
    const [showDemo, setShowDemo] = React.useState(false)
    return (
        <>
            <div className="group relative overflow-hidden border-2 rounded-xl w-full h-64">
                <div className="group-hover:bg-gradient-to-t from-slate-700/90 to-slate-50/20 w-full h-full absolute z-40 transition-all duration-300"></div>
                <Image className="group-hover:scale-125 transition-all duration-500 w-full h-full" src={item.img ? item.img : placehold} alt={item.alt} />
                <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                    <div className="flex gap-2 items-center text-md lg:text-2xl">
                        {(item.tech).map((i) =>
                            <Image key={i.alt} src={i.src} alt={i.alt} width={0} height={0} style={{ width: 'auto', height: '25px' }} />
                        )}
                    </div>
                </div>
                <div className="absolute left-12 -bottom-full group-hover:bottom-16 transition-all duration-700 z-50">
                    <span className="text-lg lg:text-2xl text-light">{item.title}</span>
                </div>
                <div className="absolute left-12 -bottom-full group-hover:bottom-8 transition-all duration-1000 z-50">
                    <div className="flex gap-4 items-center text-xl">
                        <a className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
     absolute" href={item.github} onMouseEnter={() => { setShowGit(true) }}
                            onMouseLeave={() => { setShowGit(false) }} target='_blank' ><SiGithub /> {showGit && <span className="text-base">&nbsp;Code</span>}</a>
                        {item.demo && <a className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
     absolute left-28" target='_blank' href={item.demo} onMouseEnter={() => { setShowDemo(true) }}
                            onMouseLeave={() => { setShowDemo(false) }}><AiFillRocket />{showDemo && <span className="text-base">&nbsp;Demo</span>}</a>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio