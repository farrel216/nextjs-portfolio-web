"use client";
import React from "react";
import foto from "../../public/images/profile/foto_almet.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";


const About = () => {
  const control = useAnimation();

  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isInView) {
      control.start({ opacity: 1, y: 0 })
    }
  }, [control, isInView])

  return (
    <div className="pt-5 px-10">
      <div className="container lg:mx-auto lg:py-20 gap-20 flex flex-col lg:flex-row">
        {/* left */}
        <motion.div ref={ref} className={`${pathname === '/about' ? 'flex' : 'hidden'} lg:flex`}
          initial={{ opacity: 0, y: 50 }}
          animate={control}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <div className="h-full rounded-full overflow-hidden w-1/2 lg:w-full">
              <Image src={foto} alt="Farrel Andhika" />
            </div>
          </div>
        </motion.div>
        {/* right */}
        <div className="my-auto flex flex-col gap-3 mx-4">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={control}
            transition={{ duration: 0.7 }}
            className="text-indigo-600 my-4 font-bold text-center text-3xl lg:text-start">
            ABOUT ME
          </motion.h1>

          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={control}
            transition={{ duration: 0.9 }}
            className="text-gray-400 text-justify lg:text-">
            Hello there! I&apos;m Farrel Andhika, a dedicated and enthusiastic
            Computer Science Graduate at Diponegoro University. With a
            strong interest in software development and IT operations, I am on a
            journey to explore the dynamic and ever-evolving world of
            technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={control}
            transition={{ duration: 1 }}
          >
            {pathname === "/about" ? (
              <>
                <div>
                  <p className="text-gray-400 text-justify">
                    I am currently pursuing my Bachelor&apos;s degree in Computer Science at Diponegoro University, where I have gained a solid foundation in various aspects of computer science, including programming, algorithms, data structures, and software engineering. I have consistently maintained a high academic performance, reflecting my commitment to learning and growing in the field.
                  </p>
                </div>
                <div className="inline-block mt-10">
                  <h2 className="text-indigo-400 text-center text-lg text-bold">CONNECT WITH ME</h2>
                  <div
                    className="flex justify-center gap-5 text-3xl py-4 text-slate-600 lg:justify-start lg:text-5xl"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      href="https://linkedin.com/in/farrelarp"
                      target="_blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-600 hover:text-white"
                    >
                      <AiFillLinkedin />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      href="https://instagram.com/farrel_arp"
                      target="_blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-600 hover:text-white"
                    >
                      <AiFillInstagram />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      href="https://github.com/farrel216"
                      target="_blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-600 hover:text-white"
                    >
                      <AiFillGithub />
                    </motion.a>
                  </div>
                </div>
              </>

            ) : (
              <Link href={"/about"} className="mt-5 inline-block border bg-indigo-400 text-light py-2 px-5 text-lg font-semibold rounded-lg items-center hover:bg-indigo-600 hover:shadow-lg transition duration-300 ease-in-out">
                More About Me
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
