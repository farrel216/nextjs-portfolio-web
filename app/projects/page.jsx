import React from 'react'
import ProjectComponent from './ProjectComponent'

export const metadata = {
  title: 'Farrel Portfolio | Projects Page',
  description: 'Generated by create next app',
}

const Projects = () => {
  return (
    <div className='flex justify-center'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center my-16">
            <h2 className="font-bold text-3xl mb-2 text-dark text-center">Latest <span className='text-primary'>Project</span></h2>
            <div className="mb-16">
            </div>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          <ProjectComponent />
        </div>
      </div>
    </div>
  )
}

export default Projects