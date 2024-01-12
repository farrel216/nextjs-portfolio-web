import Hero from './component/Hero'
import About from './component/About'
import PageTransition from './component/PageTransition'
import Project from './component/Project'


export const metadata = {
  title: 'Farrel Portfolio | Homepage',
  description: 'Generated by create next app',
}

export default function Home() {

  return (
    <main>
      <PageTransition />
      <section className='flex items-start w-full h-full bg-gradient-to-t from-indigo-200 dark:from-indigo-800 '>
        <Hero />
      </section>
      <section className='lg:px-12'>
        <About />
      </section>
      <section className='lg:px-12 lg:pb-20 w-full'>
        <Project />
      </section>
    </main>
  )
}
