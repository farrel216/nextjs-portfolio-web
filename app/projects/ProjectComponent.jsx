'use client'
import React from "react";
import * as image from '../../public/images'

import icon from '../component/Icon'
import Portfolio from "../component/Portfolio";


const ProjectComponent = () => {
    return (
        <>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'E-Commerce Website'} img={image.ecomm} alt={'Website E-Commerce'} tech={[icon.express, icon.react, icon.tailwind, icon.mongodb]} github={'https://github.com'} demo={'https://monitoring.cemebsa.com'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Monitoring Sensor Website'} img={image.monitoring} alt={'Website Monitoring'} tech={[icon.codeigniter,
                icon.bootstrap, icon.mysql]} github={'https://github.com/farrel216/KJABB-Monitoring-Web'} demo={'https://monitoring.cemebsa.com'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Predict Stress Level'} img={image.clustering} alt={'Website Clustering'} tech={[icon.flask, icon.python, icon.bootstrap]} github={'https://github.com/farrel216/ML-Clustering'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Koperasi Kejujuran'} img={image.koperasi} alt={'Koperasi Kejujuran'} tech={[icon.laravel, icon.bootstrap, icon.mysql]} github={'https://github.com/farrel216/koperasi_kejujuran'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'SIA Informatika'} img={image.sia} alt={'SIA IF'} tech={[icon.php, icon.bootstrap, icon.mysql]} github={'https://github.com/farrel216/PPL_C_2022_6'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Image Classification'} img={image.klasifikasi} alt={'Klasifikasi Gambar'} tech={[icon.python]} github={'https://github.com/farrel216/rockpaperscissors-dicoding'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Truck Game OpenGL'} img={image.truk} alt={'Truck Game'} tech={[icon.cpp, icon.opengl]} github={'https://github.com/farrel216/game-trukgandeng'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Ticket Sale MVC'} alt={'Ticket'} tech={[icon.java]} github={'https://github.com/farrel216/TiketPenjualan-MVC'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'TCP Connection'} alt={'TCP'} tech={[icon.java]} github={'https://github.com/farrel216/TCPconnection'} />
            </div>
            <div className="p-4 lg:w-1/2">
                <Portfolio title={'Sentiment Analysis IKN'} alt={'Sentiment Analysis'} tech={[icon.python]} github={'https://github.com/farrel216/GEMASTIK-SentimentAnalysisLogoIKN'} />
            </div>
        </>

    );
};

export default ProjectComponent;
