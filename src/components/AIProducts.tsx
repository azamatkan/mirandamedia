import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Zap, Target, ArrowUpRight, Check, ChevronRight } from 'lucide-react';

const aiProducts = [
  {
    id: 'margly',
    name: 'Margly',
    description: 'Řízení marží, nákladů a ziskovosti v reálném čase. Vidíte, kde vyděláváte a kde ztrácíte.',
    icon: TrendingUp,
    color: 'from-neon-green/20 to-transparent',
    accent: 'text-neon-green',
    image: 'https://i.imgur.com/dGYdJiK.jpeg',
    benefits: [
      'Analýza ziskovosti v reálném čase',
      'Automatické hlídání marží',
      'Napojení na ERP a feedy'
    ]
  },
  {
    id: 'advanty',
    name: 'Advanty',
    description: 'Automatizace kampaní a optimalizace výkonu napříč kanály bez manuální práce.',
    icon: Zap,
    color: 'from-cyan-500/20 to-transparent',
    accent: 'text-cyan-400',
    image: 'https://i.imgur.com/ZwJRHt9.png',
    benefits: [
      'Automatické bidování kampaní',
      'Optimalizace PNO a ROAS',
      'Cross-channel reporting'
    ]
  },
  {
    id: 'discury',
    name: 'Discury',
    description: 'Chytré doporučování produktů a personalizace pro vyšší konverze.',
    icon: Target,
    color: 'from-purple-500/20 to-transparent',
    accent: 'text-purple-400',
    image: 'https://i.imgur.com/VEv1EeM.png',
    benefits: [
      'AI personalizace obsahu',
      'Prediktivní doporučování',
      'Zvýšení konverzního poměru'
    ]
  }
];

export default function AIProducts() {
  const [activeTab, setActiveTab] = useState(aiProducts[0].id);
  const activeProduct = aiProducts.find(p => p.id === activeTab)!;

  return (
    <section className="bg-dark-navy py-24 relative overflow-hidden flex items-center w-full">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.05),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-6"
          >
            Vlastní AI nástroje pro růst e-shopu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Produkty, které vznikly z reálných projektů a dnes pomáhají škálovat výkon.
          </motion.p>
        </div>

        {/* Screenshot with Glass Border and Gradient Background */}
        <div className="relative p-2 md:p-4 lg:p-6 group max-w-5xl mx-auto">
          {/* Background Gradient Glow - Green and Blue */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(57,255,20,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(0,245,255,0.15),transparent_50%)] blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-70" />
          
          {/* Glass Border Container (Window Frame Style) */}
          <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 p-2 md:p-3 lg:p-4 shadow-2xl transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20">
            <div className="border border-white/5 bg-dark-navy/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/9] w-full overflow-hidden"
                >
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Decorative Glow behind the frame */}
          <div className={`absolute -inset-10 bg-gradient-to-r ${activeProduct.color} opacity-5 blur-[120px] -z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-10`} />
        </div>

        {/* Filter Tabs - Moved below screenshot */}
        <div className="flex justify-center mt-8 mb-8">
          <div className="flex flex-wrap md:inline-flex justify-center p-1 bg-white/5 border border-white/10 rounded-none">
            {aiProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-none ${
                  activeTab === product.id 
                    ? 'bg-white/10 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content - Moved below screenshot and tabs */}
        <div className="text-center mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-slate-400 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                {activeProduct.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
                {activeProduct.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
                    <Check size={16} className={activeProduct.accent} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic CTA Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="group/cta px-10 py-5 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-sm font-extrabold uppercase tracking-widest rounded-none transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <span>Vyzkoušet {activeProduct.name}</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
