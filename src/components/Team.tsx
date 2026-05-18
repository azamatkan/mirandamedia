import { motion } from 'motion/react';
import { Users, Award, Briefcase, ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Team() {
  return (
    <section className="bg-white pt-16 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Content: Text & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20 items-center">
          {/* Left Side: Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl text-slate-900 mb-10 uppercase tracking-widest font-bold">
                Tým, který rozumí e-commerce
              </h2>
              <p className="text-xl font-medium text-[#058D61] mb-10">
                Spojujeme technologii, data a zkušenosti z reálných projektů.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
                Jsme tým designérů, vývojářů a specialistů na výkon, kteří pomáhají e-shopům růst. 
                Z projektů, které realizujeme, stavíme vlastní nástroje, které posouvají výsledky dál.
              </p>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-xs font-extrabold uppercase tracking-widest rounded-none transition-all duration-300 flex items-center gap-3"
              >
                <span>Poznat nás</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Stats */}
          <div className="flex flex-col justify-center">
            <div className="space-y-0">
              {[
                { label: '80+', desc: 'Úspěšně dokončených projektů pro lokální i globální klienty.' },
                { label: '10+ let', desc: 'Zkušeností v oblasti e-commerce, designu a vývoje.' },
                { label: 'Premium', desc: 'Certifikovaný Shoptet Premium partner pro nejnáročnější řešení.' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "py-8 md:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12",
                    idx !== 2 && "border-b border-slate-100"
                  )}
                >
                  <span className="text-4xl md:text-5xl font-bold text-slate-900 sm:min-w-[140px]">{stat.label}</span>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-[240px]">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image: Full Width (vw) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-none shadow-2xl"
      >
        <img 
          src="https://i.imgur.com/oCJjiTm.png" 
          alt="MirandaMedia Team"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
