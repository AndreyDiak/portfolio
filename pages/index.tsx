import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { useEffect } from 'react';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { urlFor } from '../sanity';
import { PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from '../utils/fetchData';

export const customColor = '#F7AB0A';

type Props = {
  pageInfo: PageInfo
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home = ({ pageInfo, skills, projects, socials }: Props) => {

  
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-500/80">
      <Head>
        <title>It&apos;s my portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero
          role={pageInfo.role}
          image={urlFor(pageInfo.heroImage).width(200).url()}
        />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About about={pageInfo.backgroundInfo}/>
      </section>

      {/* Experience */}

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe 
          phoneNumber={pageInfo.phoneNumber}
          email={pageInfo.email}
          address={pageInfo.address}
        />
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src={urlFor(pageInfo.heroImage).url()}
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


export const getStaticProps: GetStaticProps<Props> = async () => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    },
    revalidate: 100
  }
}