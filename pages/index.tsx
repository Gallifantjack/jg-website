import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Head>
        <title>Jack Gallifant</title>
      </Head>
      
      <Header />

      {/* Hero */}
      < section id='hero' className="snap-start">
      < Hero />
      </section> 

      {/* About Section */}
      <section id='about' className="snap-start">
        <About />
      </section>

      {/* Experience Section */}
      <section id='WorkExperience' className="snap-start">
        <WorkExperience />
      </section>

      {/* Skills Section */}
      <section id='skills' className="snap-start">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id='projects' className="snap-start">
        <Projects />
      </section>

      {/* Contact Me Section */}
      <section id='contact' className="snap-start">
        <ContactMe />
      </section>
        
    </div>
  );
};

export default Home;
