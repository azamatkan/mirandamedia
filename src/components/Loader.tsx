import { motion } from 'motion/react';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://i.imgur.com/H4b9u5t.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for branding or progress if needed */}
        <div className="absolute inset-0 bg-black/20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#59DC8E] animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-[0.4em]">MirandaMedia</span>
          </div>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[#59DC8E]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
