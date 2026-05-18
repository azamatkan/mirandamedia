import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ShoppingBag, Award, Star } from 'lucide-react';

export default function ProofBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const springScale = useSpring(scale, { damping: 20, stiffness: 100 });

  const clientLogos = [
    { name: 'Penny', logo: 'https://i.imgur.com/ES5hYzs.png' },
    { name: 'Svijany', logo: 'https://i.imgur.com/rFdJWsS.png' },
    { name: 'Philips', logo: 'https://i.imgur.com/QmoVe1p.png' },
    { name: 'Rituals', logo: 'https://i.imgur.com/fGo72To.png' },
  ];

  return (
    <section ref={containerRef} className="bg-white py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          style={{ scale: springScale, opacity }}
        >
          {/* Logo Marquee */}
          <div className="overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              animate={{ x: [0, -1035] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-20 whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
                <img
                  key={`${client.name}-${i}`}
                  src={client.logo}
                  alt={client.name}
                  className="h-6 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
