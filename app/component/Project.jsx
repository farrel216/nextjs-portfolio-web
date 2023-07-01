'use client'
import React from "react";

import { project } from "./Constant";
import Link from "next/link";
import Portfolio from "./Portfolio";

const Project = () => {
    return (
        <div className='flex justify-center'>
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center my-16">
                        <h2 className="font-bold text-3xl mb-2 text-dark text-center">Latest <span className='text-primary'>Project</span></h2>
                        <div className="mb-16">
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center">
                    <div className="w-full p-4 lg:w-1/2">
                        <Portfolio item={project[0]} />
                    </div>
                    <div className="w-full p-4 lg:w-1/2">
                        <Portfolio item={project[1]} />
                    </div>
                    <div className="w-full p-4 lg:w-1/2">
                        <Portfolio item={project[2]} />
                    </div>
                    <div className="w-full p-4 lg:w-1/2">
                        <Portfolio item={project[3]} />
                    </div>
                </div>
                <div className="w-full px-8 flex justify-center">
                    <Link className="w-full text-center border bg-indigo-400 text-light py-2 px-5 text-lg font-semibold rounded-lg items-center hover:bg-indigo-600 hover:shadow-lg transition duration-300 ease-in-out" href='/projects'>View More</Link >

                </div>
            </div>
        </div>
    );
};

export default Project;
