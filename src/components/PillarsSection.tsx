import { benefitPillars } from '../data';
import { PackageX, TrendingUp, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

// Help component mapping icon dynamically
const getIcon = (iconName: string) => {
  const props = { className: "w-8 h-8 text-brand-red shrink-0" };
  switch (iconName) {
    case 'PackageX':
      return <PackageX {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    default:
      return <Zap {...props} />;
  }
};

export default function PillarsSection() {
  return (
    <section id="pilares-metodo" className="scroll-mt-24 py-20 w-full bg-white text-zinc-950 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title & Description of the pillars section */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1.5 rounded-full inline-block mb-3">
            Por Trás Da Operação
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-zinc-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Os 6 Pilares Fundamentais do Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">Mecanismo Exclusivo</span>
          </h2>
          <p className="text-zinc-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Desenhado especialmente para quem busca escalar de forma rápida e precisa, você vai aprender a vender! sem estoque, são 23 aulas que te levam direto ao faturamento real.
          </p>
        </div>

        {/* Pillars Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {benefitPillars.map((pillar, index) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group p-3 sm:p-6 lg:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-brand-red/30 shadow-sm hover:shadow-[0_15px_30px_rgba(255,0,60,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 sm:mb-5 flex items-center justify-between">
                    <div className="p-2 sm:p-3.5 bg-brand-red/10 rounded-xl border border-brand-red/20 inline-block group-hover:bg-brand-red/20 transition-all">
                      {getIcon(pillar.iconName)}
                    </div>
                    <span className="font-mono text-lg sm:text-2xl font-black text-zinc-300">
                      0{pillar.id}
                    </span>
                  </div>
                  
                  <h3 className="text-sm sm:text-xl font-bold font-display text-zinc-900 mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover highlight bar */}
                <div className="w-full h-1 bg-zinc-250 group-hover:bg-brand-red rounded-full mt-4 sm:mt-6 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
