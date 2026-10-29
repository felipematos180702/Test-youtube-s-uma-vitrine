import { motion } from 'motion/react';
import { Gift, Users, Award, ShieldAlert, Sparkles, CheckCircle2, Flame } from 'lucide-react';

interface BonusCardProps {
  index: number;
  badge: 'BÔNUS CONFIRMADO' | 'PRESENTE' | 'RESTRITO';
  title: string;
  subtitle?: string;
  description: string;
  value: string;
  highlights?: string[];
  isSpecial?: boolean;
}

const bonuses: BonusCardProps[] = [
  {
    index: 1,
    badge: 'BÔNUS CONFIRMADO',
    title: "GRUPO DE SUPORTE + O PRESENTE DAS AULAS BONUS!",
    subtitle: "Networking de Elite & Apoio Continuo",
    description: "Esqueça a solidão de tentar vender na internet sozinho. Destrave acesso direto ao nosso canal exclusivo com mentores experientes e tire dúvidas instantaneamente enquanto interage com centenas de afiliados focados em comissões.",
    value: "R$ 297,00",
    highlights: ["Suporte contínuo com especialistas", "Networking direto de vendas", "Aulas secretas inclusas"]
  },
  {
    index: 2,
    badge: 'PRESENTE',
    title: "MÓDULO 9 - AULA BONUS, TRAFEGO PAGO (O PULO DO GATO)",
    subtitle: "Acelerando seu Faturamento de Forma Massiva",
    description: "Descubra como colocar anúncios de alta conversão para trabalhar por você de modo cirúrgico. Saiba exatamente qual criativo usar, quanto investir no Facebook / Google Ads e colha cliques altamente compradores sem depender de dancinhas.",
    value: "R$ 397,00",
    highlights: ["Estruturas de anúncios copiáveis", "Orçamento mínimo de teste", "Alimentação de funil automático"]
  },
  {
    index: 3,
    badge: 'RESTRITO',
    title: "MÓDULO 10 - TRAFEGO PAGO PROIBIDO, O MAIS ABSURDO QUE EXISTE! (AULA BONUS)",
    subtitle: "Estratégias de Arbitragem Extrema de Alto Retorno",
    isSpecial: true,
    description: "Este é o verdadeiro segrego guardado a sete chaves pelos milionários do mercado de afiliados. Aprenda estratégias agressivas, lógicas de tráfego ultra lucrativas que fogem de qualquer complicação convencional para multiplicar seus retornos em tempo recorde.",
    value: "R$ 497,00",
    highlights: ["Estruturas de arbitragem avançada", "Conversões exponenciais", "Escudo anti-bloqueio"]
  }
];

export default function SpecialBonuses() {
  return (
    <section id="bonus-exclusivos" className="py-20 px-4 bg-black relative overflow-hidden">
      
      {/* Background radial atmosphere glow lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <span className="bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
          <Gift className="w-4 h-4 text-emerald-400 animate-bounce" />
          Bônus Inclusos na Black Friday • R$ 1.191,00 Grátis Hoje
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight leading-none">
          Bônus Exclusivos <span className="text-emerald-400 bg-clip-text">Inclusos na Sua Inscrição</span> Hoje
        </h2>
        <p className="text-zinc-300 mt-6 max-w-3xl mx-auto text-[17px] font-light leading-relaxed">
          <span 
            className="block text-white text-[16px] sm:text-[18px] md:text-[22px] font-black font-display uppercase tracking-tight mb-3 mx-auto px-4"
            style={{ width: '100%', maxWidth: '768px', borderWidth: '1px', borderRadius: '2px', lineHeight: '35.75px', borderColor: '#000000' }}
          >
            SÃO PRATICAMENTE <span className="text-[#ff0909] font-extrabold" style={{ paddingTop: '2px', paddingBottom: '2px', paddingRight: '-1px' }}>2 CURSOS DENTRO DE 1</span>
          </span>
          Ao garantir sua vaga hoje, você também desbloqueia gratuitamente o módulo completo de <strong className="text-emerald-300 font-extrabold">Tráfego Pago</strong>, um conteúdo que sozinho já tem potencial para transformar seus resultados.
        </p>
      </div>

      {/* Grid wrapper for responsive bento-like cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {bonuses.map((bonus) => {
          const isProibido = bonus.badge === 'RESTRITO';
          
          return (
            <motion.div
              key={bonus.index}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: bonus.index * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 md:p-8 rounded-3xl bg-[#0F0F11] border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ring-1 ${
                bonus.isSpecial 
                  ? 'border-emerald-500/60 ring-emerald-500/20 shadow-[0_15px_40px_rgba(16,185,129,0.18)] border-2' 
                  : 'border-emerald-600/30 ring-emerald-600/10 shadow-[0_15px_30px_rgba(16,185,129,0.06)]'
              }`}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 z-10 flex items-center">
                <span className={`text-[9px] font-black items-center gap-1 uppercase tracking-widest px-2.5 py-1 rounded-md border shadow-sm ${
                  isProibido
                    ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30'
                    : bonus.badge === 'PRESENTE'
                    ? 'bg-emerald-600/15 text-emerald-400 border-emerald-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20'
                }`}>
                  {isProibido ? "⚠️ SECRET/PROIBIDO" : bonus.badge}
                </span>
              </div>

              {/* Header Info */}
              <div className="relative pr-16">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">
                  BÔNUS EXCLUSIVO #{bonus.index}
                </span>
                <h3 className="text-lg md:text-xl font-extrabold font-display leading-tight tracking-tight text-white">
                  {bonus.title}
                </h3>
                {bonus.subtitle && (
                  <p className="text-zinc-400 text-xs mt-1.5 font-semibold font-mono block">
                    {bonus.subtitle}
                  </p>
                )}
              </div>



              {/* Bottom footer values display with Stacking Callout */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-zinc-500 line-through block leading-none">
                    Vendido por: {bonus.value}
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                      100% GRÁTIS
                    </span>

                  </div>
                </div>

                <div className={`p-2.5 rounded-xl bg-zinc-900 border text-zinc-400 ${
                  bonus.isSpecial ? 'border-emerald-500/30 text-emerald-400' : 'border-emerald-600/30 text-emerald-400'
                }`}>
                  {bonus.isSpecial ? <ShieldAlert className="w-5 h-5 text-emerald-400" /> : <Award className="w-5 h-5" />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
