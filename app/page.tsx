import { Metadata } from 'next';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import {
   fetchExperience,
   fetchPageInfo,
   fetchProjects,
   fetchSkills,
   fetchSocials,
} from '../utils/fetchData';

import Footer from '../components/Footer';
import '../styles/globals.css';
import Experience from '../components/Experience';
import { sanityClient } from '../sanity';

export const metadata: Metadata = {
   title: 'My Portfolio',
};

export default async function Page() {
   const [pageInfo, skills, projects, socials, experiences] = await Promise.all([
      fetchPageInfo(),
      fetchSkills(),
      fetchProjects(),
      fetchSocials(),
      fetchExperience(),
   ]);

   return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-500/80">
         {/* Header */}
         <Header socials={socials} />

         {/* Hero */}
         <section id="hero" className="snap-start">
            <Hero role={pageInfo.role} image={pageInfo.heroImage} />
         </section>

         {/* About */}
         <section id="about" className="snap-center">
            <About about={pageInfo.backgroundInfo} />
         </section>

         {/* Experience */}
         <section id="experience" className="snap-center">
            <Experience experiences={experiences} />
         </section>

         {/* Skills */}
         <section id="skills" className="snap-start">
            <Skills skills={skills} />
         </section>

         {/* Projects */}
         <section id="projects" className="snap-start">
            <Projects projects={projects} />
         </section>

         {/* Contact Me */}
         <section id="contact" className="snap-start">
            <ContactMe
               phoneNumber={pageInfo.phoneNumber}
               email={pageInfo.email}
               address={pageInfo.address}
            />
         </section>

         <Footer image={pageInfo.heroImage} />
      </div>
   );
}
