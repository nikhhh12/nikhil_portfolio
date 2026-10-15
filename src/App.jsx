import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackgroundEffects from './components/BackgroundEffects';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-cyan-500/20 selection:text-cyan-200">
      <ScrollProgress />
      <BackgroundEffects />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
