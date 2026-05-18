import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ChevronDown, List, ArrowUpRight } from 'lucide-react';

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

interface DynamicIslandTocProps {
  articleSelector?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function DynamicIslandToc({
  articleSelector = 'article',
  ctaText,
  ctaHref,
}: DynamicIslandTocProps) {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector(articleSelector);
    if (!article) return;

    const els = article.querySelectorAll('h2[id], h3[id]');
    const found: TocHeading[] = [];
    els.forEach((el) => {
      found.push({
        id: el.id,
        text: el.textContent?.trim() || '',
        level: el.tagName === 'H2' ? 2 : 3,
      });
    });
    setHeadings(found);
  }, [articleSelector]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id);
      setIsOpen(false);
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  const activeHeading = headings.find((h) => h.id === activeId);

  if (headings.length === 0) return null;

  return (
    <div ref={tocRef} className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-[9999]">
      <motion.div
        layout
        className={cn(
          'overflow-hidden backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]',
          isOpen ? 'rounded-2xl' : 'rounded-full'
        )}
        style={{ background: 'rgba(10, 12, 18, 0.92)' }}
        transition={{ layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
      >
        {/* Collapsed pill */}
        <motion.button
          layout="position"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-5 py-3 w-full text-left cursor-pointer"
        >
          <List size={14} className="text-neon-green flex-shrink-0" />
          <span className="text-xs font-bold text-white truncate max-w-[200px]">
            {activeHeading?.text || 'Obsah'}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={14} className="text-slate-400 flex-shrink-0" />
          </motion.div>
        </motion.button>

        {/* Expanded TOC */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-4 pt-1 border-t border-white/5">
                <nav className="space-y-1 mt-3">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollTo(heading.id)}
                      className={cn(
                        'block w-full text-left py-1.5 transition-all duration-200 rounded-lg',
                        heading.level === 3 ? 'pl-5 text-[11px]' : 'pl-1 text-xs font-semibold',
                        activeId === heading.id
                          ? 'text-neon-green'
                          : 'text-slate-400 hover:text-white'
                      )}
                    >
                      {heading.level === 3 && (
                        <span className="inline-block w-1 h-1 rounded-full bg-current mr-2 align-middle" />
                      )}
                      {heading.text}
                    </button>
                  ))}
                </nav>

                {ctaText && (
                  <a
                    href={ctaHref || '#contact'}
                    onClick={() => setIsOpen(false)}
                    className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-[10px] font-extrabold uppercase tracking-[0.15em] rounded-lg transition-all duration-300 group"
                  >
                    <span>{ctaText}</span>
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
