import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import CaseStudySlider, { caseStudies } from './CaseStudySlider';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    caseStudies.forEach((study) => {
      const img = new Image();
      img.src = study.image;
    });
  }, []);

  return (
    <div className="relative">
      <section
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#05070A] pt-16 md:pt-20"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30 scale-[1.15]"
          >
            <source src="https://i.imgur.com/bM35epG.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hovered case study background images */}
        <div className="absolute inset-0 z-[1]">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="absolute inset-0 transition-opacity duration-400 ease-in-out"
              style={{ opacity: hoveredImage === study.image ? 1 : 0 }}
            >
              <img
                src={study.image}
                alt=""
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          {/* Dark overlay for readability when a background image is showing */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-400 ease-in-out"
            style={{ opacity: hoveredImage ? 1 : 0 }}
          />
        </div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* Mouse Following Gradient Background */}
        <motion.div
          className="absolute inset-0 z-0 opacity-100"
          animate={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(89, 220, 142, 0.15), transparent 80%)`
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        />

        {/* Base Gradient - Darker Deep Purple to Black */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120a1f] via-[#05070a]/80 to-[#05070a] z-[-1]" />

        {/* Static Background Glows for depth */}
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-[#59DC8E]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-10 text-white"
            >
              Tvoříme <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">úspěšné e-shopy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-xs font-extrabold tracking-widest text-slate-400 leading-relaxed mb-16"
            >
              Navrhujeme a stavíme e-shopy, weby a aplikace. <br className="hidden md:block" />
              Optimalizujeme výkon kampaní. AI používáme tam, kde má reálný dopad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] rounded-none transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Chci nabídku</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-transparent border border-white/20 text-white text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] rounded-none transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Sparkles size={18} className="text-neon-green" />
                <span>AI produkty</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="w-full relative z-10 mt-12">
          <CaseStudySlider onHoverImage={setHoveredImage} />
        </div>
      </section>
    </div>
  );
}
