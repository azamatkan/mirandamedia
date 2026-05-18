"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Spolupráce s MirandaMedia nám otevřela nové možnosti v online prodeji. Jejich přístup k designu je špičkový.",
    by: "Petr Novák, CEO Florbalexpert",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "Migrace na Shoptet proběhla hladce a bez výpadků. Technická podpora je vždy k dispozici.",
    by: "Jan Svoboda, CTO SportNet",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "Unikátní grafika na míru přesně vystihuje naši značku. Zákazníci si nový web velmi chválí.",
    by: "Lucie Bílá, Marketing Manager",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "Efektivita našeho e-shopu se po redesignu zvýšila o 40 %. Skvělá investice.",
    by: "Marek Kučera, E-commerce Director",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "MirandaMedia je partner, na kterého se můžeme spolehnout v každé fázi projektu.",
    by: "Anna Dvořáková, Project Lead",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "Jejich řešení pro integraci ERP systému nám ušetřilo desítky hodin práce měsíčně.",
    by: "Jiří Král, Operations Manager",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Díky jejich analýze jsme odhalili slabá místa v nákupním procesu a zvýšili konverze.",
    by: "Tomáš Novotný, Data Analyst",
    imgSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2070&auto=format&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out flex flex-col items-center text-center justify-center",
        isCenter 
          ? "z-10 bg-[#020617] text-white border-[#020617]" 
          : "z-0 bg-white text-slate-900 border-slate-100 hover:border-neon-green/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 20px 40px rgba(2, 6, 23, 0.2)" : "0px 10px 30px rgba(0, 0, 0, 0.05)"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-slate-100"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="mb-6 relative">
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="h-16 w-16 rounded-full bg-slate-100 object-cover object-top border-2 border-white shadow-lg"
          referrerPolicy="no-referrer"
        />
        {isCenter && (
          <div className="absolute -bottom-2 -right-2 bg-neon-green p-1.5 rounded-full shadow-lg">
            <Quote size={12} className="text-slate-900 fill-current" />
          </div>
        )}
      </div>
      <h3 className={cn(
        "text-base sm:text-lg font-bold leading-relaxed mb-4",
        isCenter ? "text-white" : "text-slate-900"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <div className="mt-auto">
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em]",
          isCenter ? "text-neon-green" : "text-slate-400"
        )}>
          — {testimonial.by}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6"
          >
            Co říkají klienti
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Spolupráce, která má reálný dopad na výkon a růst vašeho byznysu.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full" style={{ height: 600 }}>
        {testimonialsList.map((testimonial, index) => {
        const position = index - (testimonialsList.length - 1) / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      </div>
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center transition-all duration-300",
            "bg-slate-50 border border-slate-200 text-slate-900 hover:bg-neon-green hover:text-slate-900 hover:border-neon-green",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center transition-all duration-300",
            "bg-slate-50 border border-slate-200 text-slate-900 hover:bg-neon-green hover:text-slate-900 hover:border-neon-green",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
