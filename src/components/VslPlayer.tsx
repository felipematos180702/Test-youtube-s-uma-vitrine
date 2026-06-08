import { Volume2 } from 'lucide-react';

export default function VslPlayer() {
  // Video embed parameters for maximum VSL conversion
  const embedUrl = "https://www.youtube.com/embed/3mjM0iZF4Lg?autoplay=0&mute=0&rel=0&showinfo=0&controls=1";

  return (
    <div id="vsl-player-container" className="w-full max-w-4xl mx-auto mt-4 md:mt-8 mb-10 md:mb-16 px-2 md:px-4">
      {/* VSL Outer frame with premium dark glowing glassmorphism */}
      <div className="relative group rounded-xl md:rounded-2xl bg-gradient-to-b from-[#1F1F21] to-[#0A0A0B] p-1 md:p-2 border border-white/10 shadow-[0_0_50px_rgba(255,0,60,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,0,60,0.25)]">
        
        {/* Video Screen Content */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
          
          {/* Active Iframe Embed directly to prevent needing double-clicks */}
          <iframe
            className="w-full h-full border-0 absolute inset-0 rounded-xl"
            src={embedUrl}
            title="Vídeo de Vendas Ultra Premium"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          
        </div>

        {/* Ambient indicator footer of the video */}
        <div className="flex items-center justify-between mt-3 px-3 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="font-mono text-zinc-500">Transmissão em HD @ 1080p</span>
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Assista até o fim para liberar descontos extras</span>
          </div>
        </div>

      </div>
    </div>
  );
}
