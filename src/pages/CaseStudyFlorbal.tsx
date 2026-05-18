import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const sections = [
  { id: 'intro', name: 'Představení klienta' },
  { id: 'design', name: 'Design a prototypy' },
  { id: 'tech', name: 'Technické řešení' },
  { id: 'results', name: 'Výsledek a zhodnocení' },
];

export default function CaseStudyFlorbal() {
  const [activeSection, setActiveSection] = useState('intro');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark-navy text-slate-300 min-h-screen font-sans selection:bg-neon-green selection:text-slate-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-green z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 overflow-hidden bg-dark-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-green/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block text-xs font-bold text-neon-green uppercase tracking-[0.4em] mb-6"
                >
                  MirandaMedia Case Study
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
                >
                  Kompletní řešení <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-white/40">Florbalexpert.cz</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                  Florbalexpert se rozhodl pro kompletní relauch svého e-shopu s cílem modernizace a zefektivnění online prodeje. 
                  Hlavním zadáním bylo přesunout stávající e-shop na platformu Shoptet a připravit unikátní grafický design na míru.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-6 mb-10"
                >
                  <button className="group px-10 py-5 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-2">
                    <span>Chci nabídku</span>
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                  <button className="group px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-xs font-extrabold uppercase tracking-widest transition-all duration-300 border border-white/10 flex items-center gap-2">
                    <span>Zobrazit e-shop</span>
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            }
          >
            <video
              src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Videos/Case_study_scroll.mp4"
              className="mx-auto rounded-2xl object-cover h-full object-top w-full"
              autoPlay
              loop
              muted
              playsInline
            />
          </ContainerScroll>
        </div>
      </section>

      {/* Section 01: Představení klienta (Standalone) */}
      <section id="intro" className="scroll-mt-32 py-32 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div className="relative">
                <img 
                  src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/1.png" 
                  alt="01" 
                  className="w-48 h-auto mb-12"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter mb-12 whitespace-nowrap">
                  Představení klienta
                </h2>
              </div>
              
              <div className="space-y-10 text-slate-400 text-xl leading-relaxed max-w-xl font-light">
                <p>
                  Florbalexpert.cz je specializovaný obchod zaměřený na florbalové vybavení pro profesionální i amatérské sportovce. 
                  Provozovatelem e-shopu i kamenné prodejny Florbalexpert je společnost SPINFLO s.r.o., která od roku 2002 působí jako výhradní dovozce špičkové švédské florbalové značky Unihoc v ČR a postupně rozšířila portfolio o další prémiové sportovní značky jako ZONEFLOORBALL, McDavid, Shock Doctor, FootBalance či Nathan .
                </p>
                <p>
                  Díky tomu patří Florbalexpert mezi přední specializované prodejce s nejširší nabídkou florbalového vybavení na českém trhu a zastupuje řadu významných světových značek. 
                  Kromě internetového obchodu provozuje také kamennou prodejnu v Praze, čímž zákazníkům nabízí možnost osobního vyzkoušení a odborného poradenství.
                </p>
              </div>
            </div>

            {/* Right Column: Image & Stats */}
            <div className="space-y-24">
              <div className="relative overflow-hidden aspect-[4/3] group shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                <img 
                  src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/image101.png" 
                  alt="Florbalexpert" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="grid grid-cols-2 gap-x-16 gap-y-20">
                {[
                  { val: '2', label: 'Florbal v číslech' },
                  { val: '3', label: 'Florbal v číslech' },
                  { val: '10+', label: 'Florbal v číslech' },
                  { val: '15+', label: 'Florbal v číslech' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-6">
                    <span className="block text-4xl md:text-5xl font-bold text-white tracking-tighter">{stat.val}</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 relative mt-40">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:w-80 flex-shrink-0 hidden lg:block">
          <div className="sticky top-32 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-10 leading-tight">
                Co všechno jsme <br /> na tomto projektu udělali?
              </h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-sm font-bold text-white mb-6">Realizace projektu</h4>
                  <ul className="space-y-4">
                    {[
                      { label: "Grafický design", id: "sub-design" },
                      { label: "Migrace dat", id: "sub-migration" },
                      { label: "Nastavení administrace a doplňků Shoptet", id: "sub-admin" },
                      { label: "Přesměrování URL a SEO", id: null },
                      { label: "Uživatelské testování a spuštění", id: null },
                      { label: "Projektové řízení", id: null }
                    ].map((item, i) => (
                      <li key={i}>
                        <a 
                          href={item.id ? `#${item.id}` : undefined}
                          className={cn(
                            "flex items-start gap-4 text-slate-400 text-sm leading-relaxed transition-all duration-300",
                            item.id ? "hover:text-neon-green" : "cursor-default"
                          )}
                        >
                          <span className="w-2 h-2 bg-neon-green shadow-[0_0_10px_rgba(89,220,142,0.5)] flex-shrink-0 mt-1.5" />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-6">Technické řešení</h4>
                  <ul className="space-y-4">
                    {[
                      { label: "Integrace e-shopu Shoptet s ERP ABRA", id: "tech" },
                      { label: "SLA – servisní podpora", id: null },
                      { label: "Výsledek a přínos", id: "results" }
                    ].map((item, i) => (
                      <li key={i}>
                        <a 
                          href={item.id ? `#${item.id}` : undefined}
                          className={cn(
                            "flex items-start gap-4 text-slate-400 text-sm leading-relaxed transition-all duration-300",
                            item.id ? "hover:text-neon-green" : "cursor-default"
                          )}
                        >
                          <span className="w-2 h-2 bg-neon-green shadow-[0_0_10px_rgba(89,220,142,0.5)] flex-shrink-0 mt-1.5" />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-6">Výsledek a přínos</h4>
                </div>
              </div>
            </div>

            <button className="w-full py-6 px-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group">
              To je přesně to, co hledám
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-40 pb-40">
          {/* Section 02: Realizace projektu */}
          <section id="design" className="scroll-mt-32 relative overflow-hidden">
            <div className="space-y-32">
              <div className="relative">
                <img 
                  src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/2.png" 
                  alt="02" 
                  className="w-48 h-auto mb-12"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tighter mb-12">
                  Realizace projektu
                </h2>
              </div>

              {/* Sub-section: Grafický design */}
              <div id="sub-design" className="space-y-12 scroll-mt-40">
                <div className="max-w-4xl space-y-6">
                  <h3 className="text-3xl font-bold text-white">Grafický design</h3>
                  <p className="text-lg leading-relaxed text-slate-400">
                    Vývoj e-shopu na míru: Na základě požadavků klienta jsme navrhli zcela unikátní grafický design e-shopu Florbalexpert.cz, který zahrnuje všechny klíčové šablony – od úvodní stránky přes kategorie (včetně podkategorií) a detail produktu až po košík a celý nákupní proces .
                  </p>
                </div>
                
                <div className="relative pt-20 flex justify-center">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-neon-green/10 blur-[100px] rounded-full opacity-50" />
                  <img 
                    src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/Banner.png" 
                    alt="Design Mockup MacBook" 
                    className="relative z-10 w-full max-w-5xl h-auto drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Sub-section: Migrace dat */}
              <div id="sub-migration" className="space-y-12 scroll-mt-40">
                <div className="max-w-4xl space-y-6">
                  <h3 className="text-3xl font-bold text-white">Migrace dat</h3>
                  <p className="text-lg leading-relaxed text-slate-400">
                    Přesun existujících dat probíhal tak, aby zákazníci nepocítili žádný diskomfort. Kompletně jsme migrovali produktová data ze starého systému do Shoptetu – exportovali jsme tisíce položek z katalogu, provedli jejich validaci a import do nové platformy . Stejně tak jsme zajistili import zákaznických účtů; z důvodu bezpečnosti a GDPR se nepřenášela původní hesla, ale zákazníci obdrželi jednoduchou možnost vytvořit si nové heslo přes e-mail na novém eshopu .
                  </p>
                </div>
                
                <div className="relative pt-20 flex justify-center">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-neon-green/20 blur-[100px] rounded-full opacity-50" />
                  <img 
                    src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/MacBook16.png" 
                    alt="Data Migration MacBook" 
                    className="relative z-10 w-full max-w-5xl h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Sub-section: Nastavení administrace */}
              <div id="sub-admin" className="space-y-12 scroll-mt-40">
                <div className="max-w-4xl space-y-6">
                  <h3 className="text-3xl font-bold text-white">Nastavení administrace a doplňků Shoptet</h3>
                  <p className="text-lg leading-relaxed text-slate-400">
                    Platformu Shoptet jsme nakonfigurovali a vybavili potřebnými moduly a integracemi tak, aby e-shop nabídl veškeré funkce na úrovni moderní ecommerce. E-shop tak nyní disponuje funkcemi jako fulltextové vyhledávání, systém zákaznických účtů s možností přihlášení přes sociální sítě (Google, Facebook) , a pokročilé filtrování a řazení produktů dle parametrů.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <img 
                    src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/image2.png" 
                    alt="Shoptet Admin 01" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/image3.png" 
                    alt="Shoptet Admin 02" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Section 03: Technické řešení */}
          <section id="tech" className="scroll-mt-32">
            <div className="space-y-32">
              <div className="relative">
                <img 
                  src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/3.png" 
                  alt="03" 
                  className="w-48 h-auto mb-12"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tighter mb-12">
                  Technické řešení
                </h2>
              </div>

              <div className="space-y-20">
                <div className="max-w-4xl space-y-8">
                  <h3 className="text-3xl font-bold text-white">Integrace e-shopu Shoptet s ERP ABRA</h3>
                  <p className="text-xl leading-relaxed text-slate-400 font-light">
                    Klíčovou součástí projektu bylo robustní propojení nové platformy Shoptet s podnikovým informačním systémem ABRA. Implementovali jsme komunikační mezivrstvu (middleware), která zajišťuje automatickou synchronizaci dat mezi e-shopem a ERP v reálném čase. Řešení pokrývá dva samostatné e-shopy (dvě instance Shoptetu) a umožňuje tak správu jak české, tak zahraniční mutace či souvisejícího obchodu v rámci jednotného systému . Níže uvádíme přehled hlavních datových toků a funkcionalit integrace:
                  </p>
                </div>

                <div className="relative grid grid-cols-12 gap-4 items-start pt-10">
                  <div className="col-span-12 md:col-span-8 relative z-10">
                    <img 
                      src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/image7.png" 
                      alt="Technical Solution 1" 
                      className="w-full h-auto shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-7 bg-white/0 ml-auto -mt-32 md:-mt-64 relative z-20">
                    <img 
                      src="https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/image8.png" 
                      alt="Technical Solution 2" 
                      className="w-full h-auto shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 04: Výsledek a zhodnocení */}
          <section id="results" className="scroll-mt-32">
            <div className="relative mb-12">
              <span className="text-[12rem] font-black text-white/[0.03] absolute -top-24 -left-12 leading-none select-none">04</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10 flex items-center gap-6">
                <span className="w-12 h-[2px] bg-neon-green" />
                Výsledek a zhodnocení
              </h2>
            </div>

            <div className="max-w-4xl space-y-8">
              <p className="text-xl leading-relaxed text-white">
                Nasazením nového e-shopu na Shoptetu získal Florbalexpert moderní, rychlou a stabilní platformu, která výrazně zlepšila technický výkon stránek (rychlejší načítání a bezproblémový provoz i při špičkovém vytížení). Automatizace procesů díky integraci s ERP vedla ke snížení chybovosti – odpadlo ruční přepisování objednávek a skladových karet, údaje se na obou stranách shodují v reálném čase.
              </p>
              <p className="text-lg leading-relaxed">
                Díky pečlivému přesměrování URL nedošlo k žádnému propadu organické návštěvnosti z vyhledávačů, naopak e-shop pokračuje v růstu a získává nové zákazníky i mimo dosavadní základnu. Celý projekt přinesl pozitivní dopad na spokojenost zákazníků – modernější a spolehlivější e-shop zvýšil důvěru nakupujících, což se projevilo ve vyšším počtu opakovaných objednávek a kladné zpětné vazbě.
              </p>
              
              <div className="pt-12">
                <button className="group px-12 py-6 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-sm font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-3">
                  <span>Chci podobné řešení</span>
                  <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 px-12 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-neon-green">★</span>)}
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-12 italic leading-tight">
                "S prací MirandaMedia jsme nadmíru spokojeni. Celý proces relauchu proběhl hladce a výsledek předčil naše očekávání. Nový e-shop je nejen krásný, ale hlavně funkční a naši zákazníci si ho chválí."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Client Avatar" 
                  className="w-16 h-16 rounded-full border-2 border-neon-green p-1"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="text-white font-bold">Tomáš Novák</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Majitel Florbalexpert</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* More Case Studies */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Prozkoumejte naše další <br /> případové studie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                title: 'Rituals', 
                desc: 'Krátký popis o projektu excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                img: 'https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/rituals.png',
                tags: ['Shoptet Premium', 'Shoptet na míru', 'Kosmetika', 'B2C']
              },
              { 
                title: 'Philips', 
                desc: 'Krátký popis o projektu excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                img: 'https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/phillips.png',
                tags: ['Shoptet Premium', 'Shoptet na míru', 'Elektro', 'B2C']
              },
              { 
                title: 'FairBio', 
                desc: 'Krátký popis o projektu excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                img: 'https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/fairbio.png',
                tags: ['Shoptet Premium', 'Shoptet na míru', 'Kosmetika', 'B2C']
              },
              { 
                title: 'Forbalexpert', 
                desc: 'Krátký popis o projektu excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                img: 'https://mepstzvtcaxmntkiirrd.supabase.co/storage/v1/object/public/Photos/forbalexpert.png',
                tags: ['Shoptet Premium', 'Shoptet na míru', 'Sport', 'B2C']
              },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden mb-8 group-hover:shadow-[0_0_50px_rgba(89,220,142,0.1)] transition-all duration-500">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 transition-colors">{project.title}</h4>
                <p className="text-[13px] text-slate-400 leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-10">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-3 group-hover:text-neon-green transition-all">
                    PROHLEDNOUT <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tighter">
                Líbí se vám naše práce? <br />
                <span className="text-neon-green">Ozvěte se!</span>
              </h2>
              
              <div className="flex items-center gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-2xl max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Contact Person" 
                  className="w-20 h-20 rounded-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-white font-bold text-xl">Tomáš Cina</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">CEO MirandaMedia Group s.r.o.</p>
                  <div className="space-y-1">
                    <a href="tel:+420732264251" className="block text-sm font-bold text-white hover:text-neon-green transition-colors">+420 732 264 251</a>
                    <a href="mailto:info@mirandamedia.cz" className="block text-sm font-bold text-white hover:text-neon-green transition-colors">info@mirandamedia.cz</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Jméno a příjmení</label>
                    <input type="text" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">E-mail</label>
                    <input type="email" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Telefon</label>
                  <input type="tel" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Vaše zpráva...</label>
                  <textarea rows={4} className="w-full bg-white/[0.03] border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-all resize-none" />
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="w-4 h-4 accent-neon-green" />
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Odesláním souhlasíte s Podmínkami zpracování osobních údajů</p>
                </div>
                <button className="w-full py-6 bg-neon-green hover:bg-neon-green-hover text-slate-900 text-xs font-extrabold uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 group">
                  <span>Spojit se s Mirandou</span>
                  <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
