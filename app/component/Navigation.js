"use client";
import { BsMoonFill } from "react-icons/bs";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }) => {
  const pathname = usePathname();
  console.log(pathname)
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
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full px-32 py-8 font-medium flex items-center justify-center bg-slate-50 border-b-4 border-slate-200"
    >
      <nav className="flex items-center">
        <CustomLink href="/" title="Home" className={"mr-10"} />
        <CustomLink href="/about" title="About" className={"mx-6"} />
        <Logo />
        <CustomLink href="/projects" title="Projects" className={"mx-6"} />
        <CustomLink
          href="/contact"
          title="Contact"
          className={"ml-10"}
        ></CustomLink>
      </nav>
    </motion.div>
  );
};

export default Navigation;
