'use client'
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MobileLink = ({ href, title, className, toggle }) => {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <button type="button" onClick={() => {
      toggle()
      router.push(href)
    }} href={href} className={`${className} block relative group`}>
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
      ${pathname === href ? "w-full" : "w-0"}`}

      >
        &nbsp;
      </span>
    </button>
  );
};
const CustomLink = ({ href, title, className }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${pathname === href ? "w-full" : "w-0"}`}

      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navigation = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full py-8 px-3 lg:px-32 font-medium flex items-center justify-between bg-light border-b-4 dark:bg-dark dark:border-indigo-900 dark:shadow-2"
    >
      <button
        className="flex flex-col justify-center items-center lg:invisible"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm dark:bg-light ${open ? `rotate-45 translate-y-1` : `-translate-y-0.5`
            }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 dark:bg-light ${open ? `opacity-0` : `opacity-100`
            }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm dark:bg-light ${open ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
            }`}
        ></span>
      </button>
      {open ?
        <div className="min-w-[250px] text-dark bg-white shadow-lg rounded-lg backdrop-blur-md py-5 flex flex-col items-center absolute z-50 top-20 dark:text-light dark:bg-dark lg:hidden">
          <nav className="flex flex-col p-5 gap-4 ">
            <MobileLink href={'/'} title="Home" className={""} toggle={handleClick} />
            <MobileLink href={'/about'} title="About" className={""} toggle={handleClick} />
            <MobileLink href={'/projects'} title="Projects" className={""} toggle={handleClick} />
            <MobileLink
              href="/contact"
              title="Contact"
              className={""} />
          </nav>
        </div>
        : null}
      <div className="flex lg:hidden">
        <Logo />
      </div>
      <div className="hidden lg:flex">
        <nav className="items-center flex">
          <CustomLink href="/" title="Home" className={"mr-10"} />
          <CustomLink href="/about" title="About" className={"mx-6"} />
          <div className="mx-20">
            <Logo />
          </div>
          <CustomLink href="/projects" title="Projects" className={"mx-6"} />
          <CustomLink
            href="/contact"
            title="Contact"
            className={"ml-10"} />
        </nav>
      </div>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode === "dark" ?
          <BsSunFill className="fill-dark dark:fill-white" /> :
          <BsMoonFill className="fill-dark dark:fill-white" />
        }
      </button>
    </motion.div>
  );
};

export default Navigation;
