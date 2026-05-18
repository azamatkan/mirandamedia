import { motion } from 'motion/react';
import { Mail, Phone, ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-dark-navy py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-5xl md:text-6xl text-white mb-12 leading-tight"
            >
              Máte zájem <br />o naše služby?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg mb-8 max-w-md"
            >
              Pošlete nám nezávaznou poptávku. <br />
              Odpovíme na každou zprávu.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10">
                <img 
                  src="https://i.imgur.com/sAjXihF.png" 
                  alt="Tomáš Cina" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Tomáš Cina</h4>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">CEO MirandaMedia Group s.r.o.</p>
              </div>
            </motion.div>

            <div className="space-y-3">
              <motion.a 
                href="tel:+420774888616"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 text-white hover:text-neon-green transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-lg font-bold">+420 774 888 616</span>
              </motion.a>
              
              <motion.a 
                href="mailto:info@mirandamedia.cz"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 text-white hover:text-neon-green transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-lg font-bold">info@mirandamedia.cz</span>
              </motion.a>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-0"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Jméno a příjmení</label>
                <input 
                  type="text" 
                  placeholder="Zdeněk"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-green transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-green transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefon</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-green transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Vaše zpráva ...</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border border-white/10 rounded-none p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-green transition-colors resize-none"
                />
              </div>

              <p className="text-[10px] text-slate-500 leading-relaxed">
                Odesláním souhlasíte s Podmínkami zpracování osobních údajů
              </p>

              <button className="w-full py-6 bg-neon-green hover:bg-neon-green-hover text-slate-900 font-extrabold uppercase tracking-widest rounded-none transition-all duration-300 flex items-center justify-center gap-3 group">
                <span>Spojit se s Mirandou</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
