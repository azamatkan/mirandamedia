import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'HOMEPAGE', href: '/' },
    { name: 'O NÁS', href: '/#team' },
    { name: 'PŘÍPADOVÉ STUDIE', href: '/case-study/florbalexpert' },
    { name: 'SLUŽBY', href: '/#services' },
    { name: 'KARIÉRA', href: '#' },
    { name: 'BLOG', href: '#' },
    { name: 'KONTAKT', href: '/#contact' },
  ];

  return (
    <footer className="bg-dark-navy pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Navigation */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          {footerLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-xs font-extrabold text-slate-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Awards */}
        <div className="flex justify-center gap-16 mb-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-56 h-56 border border-white/10 rounded-full flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://i.imgur.com/IhpoBrJ.png" alt="WebTop100" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-56 h-56 border border-white/10 rounded-full flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://i.imgur.com/XHPcCLT.png" alt="APEK" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-2xl mb-8 leading-tight">
              Potkejte se <br />s námi osobně
            </h3>
            <div className="space-y-1 text-xs font-bold">
              <p className="text-white">IČO: <span className="text-slate-400 font-medium">08272930</span></p>
              <p className="text-white">DIČ: <span className="text-slate-400 font-medium">CZ08272930</span></p>
              <p className="text-white">BÚ: <span className="text-slate-400 font-medium">2201649999/2010</span></p>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <img src="https://i.imgur.com/2sI6ohW.png" alt="Praha Map" className="w-32 h-auto opacity-50" referrerPolicy="no-referrer" />
              <div>
                <h4 className="text-neon-green font-bold mb-2">Praha</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Jankovcova 1596/14b,<br />
                  Praha 7 – Holešovice
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://i.imgur.com/zkcb3pl.png" alt="Brno Map" className="w-32 h-auto opacity-50" referrerPolicy="no-referrer" />
              <div>
                <h4 className="text-neon-green font-bold mb-2">Brno</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Holandska Str 2/4<br />
                  63900
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://i.imgur.com/niQNW5w.png" alt="Bratislava Map" className="w-32 h-auto opacity-50" referrerPolicy="no-referrer" />
              <div>
                <h4 className="text-neon-green font-bold mb-2">Bratislava</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Suché mýto 1<br />
                  811 03
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Certifications */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="flex-1">
            <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Naši partneři</h4>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-10">
              <img src="https://i.imgur.com/oJldkKi.png" alt="Google Partner" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/3V7vnrw.png" alt="Zlatý Shoptet Partner" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/7RguGuT.png" alt="Meta Business Partner" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/BBJdEtT.png" alt="Heureka Partner" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/vUKtG1h.png" alt="Ověření Sklik" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/khuMGcr.png" alt="Axfone" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/33RSLxR.png" alt="Shoptet Partner" className="h-12 w-auto transition-all" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="md:w-64">
            <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest md:text-right">Certifikace</h4>
            <div className="flex md:justify-end">
              <img src="https://i.imgur.com/ETJSy2i.png" alt="Certifikát CO2" className="h-16 w-auto transition-all" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <a href="mailto:info@mirandamedia.cz" className="flex items-center gap-2 text-white hover:text-neon-green transition-colors font-bold">
              <Mail size={18} className="text-neon-green" />
              <span>info@mirandamedia.cz</span>
            </a>
            <a href="tel:+420732264251" className="flex items-center gap-2 text-white hover:text-neon-green transition-colors font-bold">
              <Phone size={18} className="text-neon-green" />
              <span>+420 732 264 251</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>

          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            © MirandaMedia Group s.r.o. {currentYear} | Zpracování osobních údajů
          </p>
        </div>
      </div>
    </footer>
  );
}
