import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;