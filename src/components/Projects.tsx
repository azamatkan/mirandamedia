import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CardStack, type CardStackItem } from '@/components/ui/card-stack';

interface ProjectItem extends CardStackItem {
  duration: string;
  result: string;
}

const projects: ProjectItem[] = [
  {
    id: 'rituals',
    title: 'Rituals',
    duration: '2023 – současnost',
    description: 'Optimalizace konverzního poměru a UX pro globální značku luxusní kosmetiky na českém trhu.',
    result: '+24 % Conversion Rate',
    imageSrc: 'https://i.imgur.com/ycbYwCT.jpeg',
  },
  {
    id: 'philips',
    title: 'Philips',
    duration: '2022 – současnost',
    description: 'Komplexní správa výkonnostních kampaní a analytiky pro zvýšení tržního podílu v segmentu péče o tělo.',
    result: '+150 % ROAS',
    imageSrc: 'https://i.imgur.com/mJe3C6x.jpeg',
  },
  {
    id: 'mattoni',
    title: 'Mattoni',
    duration: '2024 – současnost',
    description: 'Digitální transformace a návrh nového e-commerce řešení pro lídra na trhu minerálních vod.',
    result: 'Digital Transformation',
    imageSrc: 'https://i.imgur.com/NToXYcT.jpeg',
  },
  {
    id: 'penny',
    title: 'Penny Market',
    duration: '2023 – současnost',
    description: 'Návrh a vývoj prvního e-shopu pro Penny Market na Shoptet Premium včetně napojení na logistiku.',
    result: 'E-commerce Launch',
    imageSrc: 'https://i.imgur.com/Xx0Kjt1.jpeg',
  },
];

export default function Projects() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden flex items-center w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="block text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-3">
            Případové studie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Naše projekty
          </h2>
        </motion.div>

        <CardStack<ProjectItem>
          items={projects}
          cardWidth={500}
          cardHeight={320}
          autoAdvance={false}
          showDots
          loop
          renderCard={(item) => (
            <div className="relative h-full w-full">
              <div className="absolute inset-0">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neon-green mb-2">
                  {item.duration} · {item.result}
                </span>
                <div className="text-2xl font-bold text-white">{item.title}</div>
                {item.description && (
                  <div className="mt-2 line-clamp-2 text-sm text-white/80 max-w-md">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          )}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
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
