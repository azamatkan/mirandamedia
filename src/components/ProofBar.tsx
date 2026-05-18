import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const logos = [
  { src: '/logos/rituals.png', alt: 'Rituals' },
  { src: '/logos/philips.png', alt: 'Philips' },
  { src: '/logos/svijany.png', alt: 'Svijany' },
  { src: '/logos/penny.png', alt: 'Penny' },
];

export default function ProofBar() {
  return (
    <section className="bg-white py-16 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="mb-8 text-center">
          <span className="block text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-2">
            Pomáháme růst značkám
          </span>
        </h2>

        <div className="relative py-6">
          <InfiniteSlider gap={80} reverse speed={30} speedOnHover={60}>
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="pointer-events-none h-6 md:h-8 w-auto select-none opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            blurIntensity={1}
            className="pointer-events-none absolute top-0 left-0 h-full w-[80px] md:w-[160px]"
            direction="left"
          />
          <ProgressiveBlur
            blurIntensity={1}
            className="pointer-events-none absolute top-0 right-0 h-full w-[80px] md:w-[160px]"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
