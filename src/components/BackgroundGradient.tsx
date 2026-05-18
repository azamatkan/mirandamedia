import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function BackgroundGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary following gradient */}
      <motion.div
        style={{
          left: x,
          top: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute h-[800px] w-[800px] rounded-full bg-neon-green/5 blur-[120px]"
      />
      
      {/* Secondary subtle following gradient */}
      <motion.div
        style={{
          left: x,
          top: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[80px]"
      />

      {/* Static ambient gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-green/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
