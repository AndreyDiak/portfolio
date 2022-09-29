import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export const customColor = '#F7AB0A';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-500/80">
      <Head>
        <title>It's my portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'> 
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
            src="/about.png" 
            alt="" 
            className='h-10 w-10 rounded-full grayscale hover:grayscale-0'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
