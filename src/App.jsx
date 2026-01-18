import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navar from './components/navbar/Navar';
import Hero from './components/herosection/Hero';
import Particle from './components/particle/Particle';
import Skills from './components/skills/Skills';
import Certifications from './components/certificate/certifications'; 
import Experience from './components/Experience/Experience';
import Language from './components/language/Language';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Particle />
      <Navar />
      <Hero />
      <Skills />
      <Certifications /> 
      <Experience />
      <Language />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;