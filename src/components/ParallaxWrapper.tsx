import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
}

export default function ParallaxWrapper({ children, backgroundColor = "#020617" }: ParallaxWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <div ref={containerRef} className="relative h-[130vh]" style={{ backgroundColor }}>
      <motion.div 
        style={{ scale, opacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center will-change-transform z-0 overflow-hidden"
      >
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
