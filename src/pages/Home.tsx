import Hero from '../components/Hero';
import ProofBar from '../components/ProofBar';
import ServicesToProducts from '../components/ServicesToProducts';
import Projects from '../components/Projects';

import Team from '../components/Team';
import { StaggerTestimonials } from '../components/ui/stagger-testimonials';
import Contact from '../components/Contact';
import BackgroundGradient from '../components/BackgroundGradient';

export default function Home() {
  return (
    <>
      <BackgroundGradient />
      <main className="relative">
        <div id="hero" className="relative z-10 bg-white">
          <Hero />
        </div>
        <div className="relative z-20 bg-white -mt-[50vh] md:-mt-[100vh]">
          <div id="proofbar"><ProofBar /></div>
          
          <div id="services">
            <ServicesToProducts />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="team"><Team /></div>

          <div id="testimonials">
            <StaggerTestimonials />
          </div>

          <div id="contact"><Contact /></div>
        </div>
      </main>
    </>
  );
}
