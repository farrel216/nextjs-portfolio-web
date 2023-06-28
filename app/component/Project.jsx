'use client'
import React from "react";
import monitoring from "../../public/images/portfolio/portfolio-monitoring.png";
import clustering from '../../public/images/portfolio/portfolio-clustering.png';
import ecomm from '../../public/images/portfolio/portfolio-ecom.png';

import Link from "next/link";
import Portfolio from "./Portfolio";
import icon from './Icon'

const Project = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-x-10">
                <div className="flex-1 flex flex-col gap-y-12">
                    <h2 className="font-bold text-3xl mb-2 text-primary text-center lg:text-start">PORTFOLIO</h2>
                    <p className="font-bold text-dark text-lg mb-4">Featured Projects</p>
                    <div className="mb-4 lg:mb-16">
                    <Link href={"/projects"} className=" inline-block border bg-indigo-400 text-light py-2 px-5 text-lg font-semibold rounded-lg items-center hover:bg-indigo-600 hover:shadow-lg transition duration-300 ease-in-out">
                View All Projects
              </Link>
                    </div>
                        <Portfolio title={'E-Commerce Website'} img={ecomm} alt={'Website E-Commerce'} tech={[icon.express,icon.react,icon.tailwind,icon.mongodb]} github={'github.com'} demo={'monitoring.cemebsa.com'} />
                </div>
                <div className={'flex-1 flex flex-col gap-y-8'}>
                        <Portfolio title={'Monitoring Sensor Website'} img={monitoring} alt={'Website Monitoring'} tech={[icon.codeigniter,
                    icon.bootstrap,icon.mysql]} github={'github.com'} demo={'monitoring.cemebsa.com'} />
                        <Portfolio title={'Predict Stress Level'} img={clustering} alt={'Website Clustering'} tech={[icon.flask,icon.python,icon.bootstrap]} github={'github.com'}/>
                </div>
            </div>
        </div>
    );
};

export default Project;
