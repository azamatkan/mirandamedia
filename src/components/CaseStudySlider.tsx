import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const caseStudies = [
  {
    id: 1,
    client: "Pet Center",
    description: "E-shop + mobilní aplikace s plnou integrací na Shoptet Premium",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    client: "Svijany",
    description: "Komplexní B2B portál a věrnostní systém pro partnery",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "Philips",
    description: "Performance marketing a optimalizace konverzního poměru",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop",
  },
  {
    id: 4,
    client: "Rituals",
    description: "Lokalizace a expanze na středoevropské trhy",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    client: "Penny",
    description: "Digitální transformace a věrnostní mobilní aplikace",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    client: "Alza",
    description: "UX audit a redesign klíčových nákupních procesů",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    client: "Zoot",
    description: "Automatizace skladového hospodářství a logistiky",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    client: "Rohlik.cz",
    description: "Implementace AI pro predikci poptávky",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 9,
    client: "Mall.cz",
    description: "Integrace platebních bran a věrnostních programů",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
  },
  {
    id: 10,
    client: "Notino",
    description: "Personalizace nákupního zážitku pomocí strojového učení",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop",
  },
  {
    id: 11,
    client: "Mountfield",
    description: "Omnichannel strategie a propojení online/offline světa",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 12,
    client: "Sportisimo",
    description: "Optimalizace vyhledávání a filtrace produktů",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 13,
    client: "Kytary.cz",
    description: "Mezinárodní expanze a multijazyčná podpora",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 14,
    client: "Bonami",
    description: "Inspirativní commerce a vizuální vyhledávání",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 15,
    client: "Pilulka",
    description: "Expresní doručení a věrnostní systém Pilulka Klub",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2070&auto=format&fit=crop",
  }
];

interface CaseStudySliderProps {
  onHoverImage?: (image: string | null) => void;
}

export default function CaseStudySlider({ onHoverImage }: CaseStudySliderProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 relative h-[220px] flex items-center justify-center">
      <div className="flex gap-2 items-center justify-start px-8 h-full overflow-x-auto">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            className="relative flex-shrink-0 cursor-pointer group"
            initial={{ width: 140, height: 140 }}
            animate={{ width: 140, height: 140 }}
            whileHover={{
              width: 320,
              height: 180,
              zIndex: 50,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => onHoverImage?.(study.image)}
            onMouseLeave={() => onHoverImage?.(null)}
          >
            <div className="w-full h-full rounded-none overflow-hidden relative shadow-2xl">
              <img
                src={study.image}
                alt={study.client}
                className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-left">
                <div className="flex justify-between items-start">
                  <span className="text-white font-bold text-base leading-tight drop-shadow-md">{study.client}</span>
                  <ArrowUpRight size={18} className="text-white drop-shadow-md" />
                </div>
                <p className="text-white/90 text-base leading-tight line-clamp-3 drop-shadow-sm">
                  {study.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
