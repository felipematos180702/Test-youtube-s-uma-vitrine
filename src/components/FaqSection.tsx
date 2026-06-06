import { useState } from 'react';
import { faqItems } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-24 border-t border-white/5">
      
      {/* Small Header */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest font-extrabold text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1.5 rounded-full inline-block mb-3">
          Suporte e Dúvidas
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
          Perguntas <span className="text-brand-red">Frequentes</span>
        </h2>
        <p className="text-zinc-400 mt-2 text-sm max-w-lg mx-auto">
          Tem alguma dúvida sobre como a vitrine magnética comissionada funciona? Confira as respostas rápidas abaixo.
        </p>
      </div>

      {/* Accordion Item Grid */}
      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id} 
              className="rounded-2xl bg-[#09090A] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300"
            >
              {/* Question Click bar */}
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-zinc-100 hover:text-white transition duration-200"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-red shrink-0" />
                  <span className="font-display tracking-tight">{item.question}</span>
                </div>
                <div className={`p-1.5 bg-zinc-900 border border-white/5 rounded-lg text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Answer expandable body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 text-zinc-400 text-xs md:text-sm font-light leading-relaxed border-t border-white/5 bg-black/20">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Guarantee Badge embedded right next to FAQ */}
      <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-brand-green/5 to-brand-green/20 border border-brand-green/20 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 border border-brand-green/30">
            {/* Stamp visual symbol */}
            <span className="font-serif text-3xl font-black text-brand-green select-none">7</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-white font-display">Garantia Blindada Incondicional</h3>
            <p className="text-zinc-400 text-xs font-light mt-1 max-w-md leading-relaxed">
              Você tem 7 dias inteiros para testar e aplicar os 5 pilares do método. Se não fizer sua primeira venda ou não amar, reembolsamos 100% sem burocracias.
            </p>
          </div>
        </div>
        <div className="text-zinc-500 font-mono text-[10px] border border-white/10 px-3 py-1.5 rounded-lg uppercase tracking-wider backdrop-blur-sm">
          Compra 100% Segura
        </div>
      </div>

    </section>
  );
}
