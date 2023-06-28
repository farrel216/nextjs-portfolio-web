'use client'
import "./globals.css";
import { Merriweather, Roboto_Mono } from "next/font/google";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--font-poppins',
//   weight: ["400", "500", "600", "700", "800", "900"],
//   display: 'swap'
// })

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

const roboto = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const mainContent = useRef(null)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(()=>{
    if(mainContent.current){
      mainContent.current.scrollTop = 0;
    }
  }, [pathname])
  return (
    <html ref={mainContent} lang="en" className={`${merriweather.variable} font-merriweather`}>
      <body className={`bg-light text-dark w-full `}>
        <header>
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
