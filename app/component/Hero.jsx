'use client'
import React from "react";
import foto from "../../public/images/profile/foto_profil.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Hero = () => {
  return (
    <div className="container pb-10">
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="w-full self-start px-4 lg:w-1/2"
        >
          <div className="relative">
          <Image
            src={foto}
            alt="Farrel Andhika"
            className="max-w-full mx-auto rounded-3xl"
          />
          <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
            <svg
              viewBox="0 0 200 200"
              width={400}
              height={400}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#14b8a6"
                d="M42.1,-47.6C51.3,-32.9,53.3,-16.4,56.4,3.1C59.5,22.7,63.8,45.3,54.5,57.1C45.3,69,22.7,70,1.5,68.5C-19.6,66.9,-39.3,62.9,-52.3,51.1C-65.4,39.3,-71.8,19.6,-68.4,3.4C-64.9,-12.8,-51.7,-25.6,-38.7,-40.3C-25.6,-55,-12.8,-71.6,1.8,-73.4C16.4,-75.2,32.9,-62.3,42.1,-47.6Z"
                transform="translate(100 100) scale(1.3)"
              />
            </svg>
          </span>
          </div>
        </motion.div>
        <div className="w-full self-center text-center px-4 mt-6 md:px-10 lg:w-1/2 lg:mt-0 lg:right-0 lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-lg text-black lg:text-2xl"
          >
            Hello, <span>I&apos;m</span>
            <span className="block mt-2 text-4xl font-black lg:text-5xl 2xl:text-6xl">
              Farrel Andhika
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-md py-5 text-slate-500 lg:text-lg 2xl:text-xl"
          >
            3rd Year Informatics Students at Diponegoro University
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-2 text-md text-slate-700 lg:text-lg 2xl:text-xl"
          >
            Based on Depok, West Java
          </motion.p>
          <div
            
            className="flex justify-center gap-5 mt-4 text-3xl py-4 text-slate-600 lg:justify-start lg:text-5xl"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0}}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 1.3 }}
              href="https://linkedin.com/in/farrelarp"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <AiFillLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0}}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 1.3 }}
              href="https://instagram.com/farrel_arp"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <AiFillInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0}}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 1.3 }}
              href="https://github.com/farrel216"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <AiFillGithub />
            </motion.a>
          </div>
          <div
          
          
            className="mt-6 flex justify-center lg:justify-start"
          >
            <motion.a
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}}
              href="/resume/resume.pdf"
              download={true}
              target="_blank"
              className="bg-slate-600 border text-light p-2 pl-5 pr-2 text-lg font-semibold rounded-lg flex items-center hover:bg-light hover:text-slate-600 hover:border-slate-600 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Resume <BsBoxArrowUpRight className="ml-2 w-9" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
