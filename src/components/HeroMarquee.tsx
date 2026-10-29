import { Flame, Sparkles } from 'lucide-react';

export default function HeroMarquee() {
  const items = [
    { text: 'OFERTA BLACK FRIDAY', highlight: true },
    { text: 'DESCONTO LIBERADO', highlight: false },
    { text: 'OFERTA BLACK FRIDAY', highlight: true },
    { text: 'DESCONTO LIBERADO', highlight: false },
  ];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-amber-500/40 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 py-3 md:py-4 my-6 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
      {/* Left and Right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex gap-6 md:gap-10 whitespace-nowrap will-change-transform items-center animate-marquee-fast">
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base font-display font-black tracking-wider uppercase select-none"
          >
            {item.highlight ? (
              <Flame className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0 animate-pulse" />
            ) : (
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 shrink-0" />
            )}
            <span
              className={
                item.highlight
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 font-black drop-shadow-[0_1px_8px_rgba(245,158,11,0.3)]'
                  : 'text-zinc-100 font-extrabold'
              }
            >
              {item.text}
            </span>
            <span className="text-amber-500/50 text-sm md:text-base mx-2 select-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
