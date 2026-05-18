import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, ArrowRight, Sparkles, ChevronRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
// ... (rest of useEffect remains same)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect if we are over a light section (only on home page)
      if (location.pathname === '/') {
        const lightSections = ['services', 'projects', 'team', 'testimonials'];
        let currentIsLight = false;
        
        for (const id of lightSections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 40) {
              currentIsLight = true;
              break;
            }
          }
        }
        setIsLightMode(currentIsLight);
      } else {
        setIsLightMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: 'Služby', href: '/#services' },
    { name: 'AI', href: '/#aiproducts', isNew: true },
    { name: 'Produkty', href: '/#projects' },
    { name: 'Případové studie', href: '/case-study/florbalexpert' },
    { name: 'O nás', href: '/#team' },
    { name: 'Blog', href: '#' },
    { name: 'Kariéra', href: '#' },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
          isScrolled ? "mt-4 w-[95%] md:w-[90%] rounded-[8px]" : "w-full rounded-none",
          isScrolled 
            ? isLightMode 
              ? "bg-white/80 backdrop-blur-md border border-slate-200"
              : "bg-dark-navy/80 backdrop-blur-md border border-white/5" 
            : "bg-transparent",
          isMobileMenuOpen && "bg-dark-navy w-full mt-0 rounded-none border-none"
        )}
      >
        <div className={cn(
          "w-full transition-all duration-500 flex items-center h-16 md:h-20",
          isScrolled ? "px-6 md:px-10" : "px-6 md:px-20"
        )}>
          {/* Logo - Left aligned */}
          <Link to="/" className="flex-1 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://i.imgur.com/8LA5jGD.png" 
              alt="MirandaMedia Logo" 
              className={cn(
                "h-8 md:h-10 w-auto object-contain transition-all duration-300",
                isLightMode && !isMobileMenuOpen ? "" : "brightness-0 invert"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Navigation - Centered (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 flex-initial">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative text-xs font-extrabold uppercase tracking-widest transition-colors group flex items-center gap-1",
                  isLightMode ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"
                )}
              >
                {item.name === 'AI' && <Sparkles size={14} className="text-neon-green" />}
                {item.name}
                {item.isNew && (
                  <span className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-neon-green text-[10px] font-bold text-slate-900 rounded-full leading-none">
                    NEW
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex group px-4 md:px-6 py-2 md:py-3 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-[10px] md:text-xs font-extrabold uppercase tracking-widest rounded-none transition-all duration-300 items-center gap-2"
            >
              <span>Poptat</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isLightMode && !isMobileMenuOpen ? "text-slate-900" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-40 bg-dark-navy flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mb-12">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-bold text-white tracking-tight active:text-neon-green"
                  >
                    <span className="flex items-center gap-3">
                      {item.name === 'AI' && <Sparkles size={20} className="text-neon-green" />}
                      {item.name}
                    </span>
                    <ChevronRight size={24} className="text-white/20" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pb-12 space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Kontakt</p>
                <a href="tel:+420774888616" className="block text-xl font-bold text-white">+420 774 888 616</a>
                <a href="mailto:info@mirandamedia.cz" className="block text-xl font-bold text-white">info@mirandamedia.cz</a>
              </div>
              
              <button className="w-full py-6 bg-neon-green text-slate-900 font-extrabold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                <span>Poptat spolupráci</span>
                <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
