import Hero from '../components/Hero';
import ProofBar from '../components/ProofBar';
import ServicesToProducts from '../components/ServicesToProducts';
import Projects from '../components/Projects';
import Team from '../components/Team';
import { StaggerTestimonials } from '../components/ui/stagger-testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <div id="hero"><Hero /></div>
      <div id="proofbar"><ProofBar /></div>
      <div id="services"><ServicesToProducts /></div>
      <div id="projects"><Projects /></div>
      <div id="team"><Team /></div>
      <div id="testimonials"><StaggerTestimonials /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}
