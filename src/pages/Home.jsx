import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import BlockchainChat from '../components/BlockchainChat/BlockchainChat';
import AIWorkflow from '../components/AIWorkflow/AIWorkflow';
import EngineeringStrengths from '../components/EngineeringStrengths/EngineeringStrengths';
import Experience from '../components/Experience/Experience';
import GitHub from '../components/GitHub/GitHub';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BlockchainChat />
        <AIWorkflow />
        <EngineeringStrengths />
        <Experience />
        <GitHub />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
