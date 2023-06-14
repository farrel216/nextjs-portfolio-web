'use client'
import { BsMoonFill } from "react-icons/bs";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname, useRouter} from "next/navigation";
import { motion } from "framer-motion";

const MobileLink = ({ href, title, className, toggle }) => {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <button type="button" onClick={()=>{
      toggle()
      router.push(href)
      }} href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full py-8 px-3 lg:px-32 font-medium flex items-center justify-between bg-slate-50 border-b-4 border-slate-200"
    >
      <button
        className="flex flex-col justify-center items-center lg:invisible"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? `rotate-45 translate-y-1` : `-translate-y-0.5`
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            open ? `opacity-0` : `opacity-100`
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
          }`}
        ></span>
      </button>
      {open ? 
      <div className="min-w-[70vw] text-light bg-dark/80 rounded-lg backdrop-blur-md py-36 flex flex-col justify-between items-center fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
        <nav className="flex items-center flex-col justify-center">
          <MobileLink href={'/'} title="Home" className={""} toggle={handleClick}/>
          <MobileLink href={'/about'} title="About" className={""} toggle={handleClick}/>
          <MobileLink href={'/projects'} title="Projects" className={""} toggle={handleClick}/>
          <MobileLink
            href="/contact"
            title="Contact"
            className={""}/>
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
            className={"ml-10"}/>
        </nav>
      </div>
      <BsMoonFill className="" />
    </motion.div>
  );
};

export default Navigation;
