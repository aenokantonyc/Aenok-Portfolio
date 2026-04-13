import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Goals from '@/components/Goals';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NodeBackground from '@/components/NodeBackground';
import BackToTop from '@/components/BackToTop';
import OrbitCursor from '@/components/OrbitCursor';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <OrbitCursor />
      <NodeBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Goals />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
