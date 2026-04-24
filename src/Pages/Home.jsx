import Hero from '../Components/Home';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Certification from '../Components/Certification';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import SectionWrapper from '../Components/SectionWrapper';

function Home() {
  return (
    <div className="flex flex-col gap-16 pt-32 pb-16">

      <SectionWrapper id="home">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="about" withGradient>
        <About />
      </SectionWrapper>

      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>

      <SectionWrapper id="projects" withGradient>
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="certifications" withGradient>
        <Certification />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>

    </div>
  );
}

export default Home;