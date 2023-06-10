import './globals.css'
import { Merriweather, Roboto_Mono } from 'next/font/google'
import Navigation from './component/Navigation'
import Footer from './component/Footer'


// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--font-poppins',
//   weight: ["400", "500", "600", "700", "800", "900"],
//   display: 'swap' 
// })

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ["300","400","700","900"],
})

const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ["300","400","700"],

})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} font-merriweather`}>
      
      <body className={`bg-light text-dark w-full `}>
      <header>
      <Navigation />
      </header>
        {children}
      
      <footer>
      <Footer/>
      </footer>
      </body>
    </html>
  )
}
