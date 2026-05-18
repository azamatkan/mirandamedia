import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'rituals',
    title: 'Rituals',
    duration: '2023 – současnost',
    description: 'Optimalizace konverzního poměru a UX pro globální značku luxusní kosmetiky na českém trhu.',
    result: '+24 % Conversion Rate',
    image: 'https://i.imgur.com/ycbYwCT.jpeg',
    color: 'bg-[#f4e4d4]',
    isLight: true
  },
  {
    id: 'philips',
    title: 'Philips',
    duration: '2022 – současnost',
    description: 'Komplexní správa výkonnostních kampaní a analytiky pro zvýšení tržního podílu v segmentu péče o tělo.',
    result: '+150 % ROAS',
    image: 'https://i.imgur.com/mJe3C6x.jpeg',
    color: 'bg-[#0b5ed7]'
  },
  {
    id: 'mattoni',
    title: 'Mattoni',
    duration: '2024 – současnost',
    description: 'Digitální transformace a návrh nového e-commerce řešení pro lídra na trhu minerálních vod.',
    result: 'Digital Transformation',
    image: 'https://i.imgur.com/NToXYcT.jpeg',
    color: 'bg-[#004a99]'
  },
  {
    id: 'penny',
    title: 'Penny Market',
    duration: '2023 – současnost',
    description: 'Návrh a vývoj prvního e-shopu pro Penny Market na Shoptet Premium včetně napojení na logistiku.',
    result: 'E-commerce Launch',
    image: 'https://i.imgur.com/Xx0Kjt1.jpeg',
    color: 'bg-[#FF0000]',
    badge: 'Shoptet Premium',
    isHighlight: true
  }
];

export default function Projects() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden flex items-center w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Header: Title & Duration */}
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-slate-400 whitespace-nowrap ml-4">
                  {project.duration}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative mb-8 overflow-hidden rounded-none aspect-[16/11] flex items-center justify-center">
                <div className="relative w-full h-full shadow-2xl transition-all duration-700 group-hover:scale-[1.05]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-sm transition-all duration-700 group-hover:blur-sm group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Arrow Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer: Description & Button */}
              <div className="flex flex-col items-start gap-8">
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                  {project.description}
                </p>
                <button className="group/btn px-6 py-3 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 whitespace-nowrap rounded-none">
                  <span>Více</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="group/btn px-12 py-5 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-sm font-extrabold uppercase tracking-widest rounded-none transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
          >
            <span>Všechny projekty</span>
            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
