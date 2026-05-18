import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceRow {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: ServiceRow[] = [
  {
    id: 'eshops',
    title: 'E-shopy',
    description: 'Nabušenej e-shop je naše specializace. Zajistíme UX/UI, programování a přivedeme plnotučnej traffic.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop',
  },
  {
    id: 'webs',
    title: 'Weby',
    description: 'Stavíme weby, které nejsou jen hezké, ale hlavně funkční. Od microsites po korporátní portály.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 'apps',
    title: 'Aplikace',
    description: 'Vyvíjíme komplexní systémy na míru — od interních nástrojů po klientské aplikace.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'ppc',
    title: 'PPC a analytika',
    description: 'Optimalizujeme vaše kampaně tak, aby každá koruna přinesla maximální zisk.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 'ux',
    title: 'UX & CRO',
    description: 'Analyzujeme chování uživatelů a odstraňujeme bariéry v nákupním procesu.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  },
];

const products: ServiceRow[] = [
  {
    id: 'margly',
    title: 'Margly',
    description: 'Řízení marží a ziskovosti v reálném čase. Vidíte, kde vyděláváte a kde ztrácíte.',
    image: 'https://i.imgur.com/dGYdJiK.jpeg',
  },
  {
    id: 'advanty',
    title: 'Advanty',
    description: 'Automatizace kampaní a optimalizace výkonu napříč kanály bez manuální práce.',
    image: 'https://i.imgur.com/ZwJRHt9.png',
  },
  {
    id: 'discury',
    title: 'Discury',
    description: 'Chytré doporučování produktů a personalizace pro vyšší konverze.',
    image: 'https://i.imgur.com/VEv1EeM.png',
  },
];

function ServiceListSection({
  eyebrow,
  heading,
  items,
  ctaLabel,
}: {
  eyebrow: string;
  heading: string;
  items: ServiceRow[];
  ctaLabel?: string;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mouseY, setMouseY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  const hoveredItem = items.find((i) => i.id === hoveredId);

  return (
    <section className="bg-dark-navy py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="block text-sm font-bold text-neon-green uppercase tracking-[0.3em] mb-3">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {heading}
          </h2>
        </motion.div>

        <div
          ref={sectionRef}
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Floating hover image — desktop only */}
          <AnimatePresence>
            {hoveredItem && (
              <motion.div
                key={hoveredItem.id}
                initial={{ opacity: 0, scale: 0.92, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.92, x: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="hidden md:block absolute right-0 z-30 pointer-events-none"
                style={{
                  top: Math.max(0, mouseY - 120),
                  width: 340,
                }}
              >
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                  <img
                    src={hoveredItem.image}
                    alt={hoveredItem.title}
                    className="w-full h-[220px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Rows */}
          <div className="border-t border-white/10">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onMouseEnter={() => setHoveredId(item.id)}
                className={cn(
                  'group border-b border-white/10 transition-colors duration-300 cursor-pointer',
                  hoveredId === item.id ? 'bg-white/[0.04]' : 'bg-transparent',
                )}
              >
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_1.4fr_auto] items-center gap-8 py-7 pr-4">
                  <h3
                    className={cn(
                      'text-2xl lg:text-3xl font-bold transition-colors duration-300',
                      hoveredId === item.id ? 'text-white' : 'text-slate-300',
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={cn(
                      'text-base leading-relaxed transition-colors duration-300 max-w-lg',
                      hoveredId === item.id
                        ? 'text-slate-300'
                        : 'text-slate-500',
                    )}
                  >
                    {item.description}
                  </p>

                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0',
                      hoveredId === item.id
                        ? 'bg-neon-green text-slate-900'
                        : 'bg-white/10 text-white',
                    )}
                  >
                    <ArrowUpRight
                      size={20}
                      className={cn(
                        'transition-transform duration-300',
                        hoveredId === item.id && '-translate-y-0.5 translate-x-0.5',
                      )}
                    />
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden py-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <button className="group/btn px-10 py-5 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-sm font-extrabold uppercase tracking-widest rounded-none transition-all duration-300 flex items-center gap-3">
              <span>{ctaLabel}</span>
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function ServicesToProducts() {
  return (
    <>
      <ServiceListSection
        eyebrow="Služby"
        heading="Co děláme pro klienty"
        items={services}
        ctaLabel="Všechny služby"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ServiceListSection
        eyebrow="Naše produkty"
        heading="SaaS nástroje, které jsme vytvořili"
        items={products}
        ctaLabel="Prozkoumat produkty"
      />
    </>
  );
}
