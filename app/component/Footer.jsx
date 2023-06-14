import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">ARP</span>
        </div>
        <span className="hidden md:block font-medium text-white">© 2023 Personal Porfolio Website. Design with ♥️ by Farrel Andhika.</span>
        <div className="flex gap-2">
        </div>
      </div>
    </div>
  )
}

export default Footer