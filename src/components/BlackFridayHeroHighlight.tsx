import { motion } from 'motion/react';
import { Tag, Flame, Zap, ShieldCheck, LucideIcon } from 'lucide-react';

interface BlackFridaySealProps {
  onClick?: () => void;
  className?: string;
}

export function BlackFridaySeal({ onClick, className = '' }: BlackFridaySealProps) {
  return (
    <div className={`flex items-center justify-center mb-3 md:mb-6 ${className}`}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: [1, 1.02, 1], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative inline-flex items-center gap-2 px-3.5 py-1.5 md:px-5 md:py-2 rounded-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.25)] text-center cursor-pointer group hover:border-amber-400 transition-all"
        onClick={onClick}
      >
        {/* Glowing dot effect */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>

        {/* Badge Title */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-black text-[9px] md:text-[11px] font-black uppercase px-2 py-0.5 rounded font-display tracking-wider shadow-sm">
            SELO OFICIAL
          </span>
          <span className="text-white text-xs md:text-sm font-black font-display tracking-widest uppercase flex items-center gap-1">
            BLACK FRIDAY <span className="text-amber-400 font-extrabold">• DESCONTO LIBERADO</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

interface MarqueeItem {
  text: string;
  icon?: LucideIcon;
  highlight: boolean;
}

export function BlackFridayMarquee() {
  const marqueeItems: MarqueeItem[] = [
    { text: 'BLACK FRIDAY 2026', icon: Flame, highlight: true },
    { text: 'SELO OFICIAL BLACK FRIDAY', icon: ShieldCheck, highlight: true },
    { text: 'MAIOR DESCONTO DO ANO', icon: Flame, highlight: false },
    { text: 'CONDIÇÃO EXCLUSIVA', highlight: true },
    { text: 'BÔNUS EXCLUSIVOS INCLUSOS', highlight: true },
    { text: 'ACESSO IMEDIATO', icon: Zap, highlight: false },
    { text: 'VAGAS LIMITADAS', icon: Flame, highlight: true },
  ];

  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden border-y-2 border-amber-500/35 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 py-4 md:py-6 my-4 md:my-6 shadow-[0_0_25px_rgba(245,158,11,0.12)]">
      {/* Left and Right blur fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Continuous Marquee Track */}
      <motion.div
        className="flex gap-6 md:gap-10 whitespace-nowrap will-change-transform items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 28,
        }}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2 md:gap-3 text-sm md:text-base lg:text-lg font-display font-black tracking-wider uppercase select-none"
            >
              {Icon && (
                <Icon
                  className={`w-4 h-4 md:w-5 md:h-5 shrink-0 ${
                    item.highlight ? 'text-amber-400 animate-pulse' : 'text-zinc-500'
                  }`}
                />
              )}
              <span
                className={
                  item.highlight
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 font-black drop-shadow-[0_1px_8px_rgba(245,158,11,0.25)]'
                    : 'text-zinc-200'
                }
              >
                {item.text}
              </span>
              <span className="text-amber-500/40 text-base md:text-lg mx-2 md:mx-3 select-none">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function BlackFridayHeroHighlight({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <div className="w-full">
      <BlackFridaySeal onClick={onCtaClick} />
      <BlackFridayMarquee />
    </div>
  );
}
