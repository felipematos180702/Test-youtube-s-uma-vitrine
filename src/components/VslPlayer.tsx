import { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function VslPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleStartVideo = () => {
    setIsPlaying(true);
  };

  // Video embed parameters hiding YouTube controls, logos, and related videos
  const activeEmbedUrl = "https://www.youtube.com/embed/3mjM0iZF4Lg?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&enablejsapi=1&iv_load_policy=3&disablekb=1";

  return (
    <div id="vsl-player-container" className="w-full max-w-4xl mx-auto mt-4 md:mt-8 mb-10 md:mb-16 px-2 md:px-4">
      {/* VSL Outer frame with premium dark glowing glassmorphism */}
      <div className="relative group rounded-xl md:rounded-2xl bg-gradient-to-b from-[#1F1F21] to-[#0A0A0B] p-1 md:p-2 border border-white/10 shadow-[0_0_50px_rgba(255,0,60,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,0,60,0.25)]">
        
        {/* Video Screen Content */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
          
          {isPlaying ? (
            <>
              {/* Active Iframe without controls or YouTube branding */}
              <iframe
                ref={iframeRef}
                className="w-full h-full border-0 absolute inset-0 rounded-xl"
                src={activeEmbedUrl}
                title="Vídeo de Vendas Ultra Premium"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Shield on top/bottom edges to block YouTube title/logo links */}
              <div className="absolute top-0 left-0 right-0 h-14 pointer-events-none z-10 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
            </>
          ) : (
            /* Cover / Play with Audio Button Overlay */
            <div 
              onClick={handleStartVideo}
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center cursor-pointer p-4 select-none group/cover"
            >
              {/* Glowing CTA Button */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex flex-col items-center text-center gap-3.5 max-w-md px-4"
              >
                {/* Pulse ring play icon */}
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-20 w-20 md:h-24 md:w-24 rounded-full bg-amber-400/40 opacity-75" />
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.6)] text-black font-black">
                    <Volume2 className="w-8 h-8 md:w-10 md:h-10 text-zinc-950 fill-zinc-950/20 translate-x-0.5" />
                  </div>
                </div>

                {/* Subtitle phrase in yellow */}
                <p className="text-amber-400 text-xs sm:text-sm md:text-base font-extrabold font-display uppercase tracking-wide drop-shadow-[0_1px_10px_rgba(245,158,11,0.3)]">
                  Assista ao vídeo e aproveite a Black
                </p>
              </motion.div>
            </div>
          )}
          
        </div>

        {/* Ambient indicator footer of the video */}
        <div className="flex items-center justify-center sm:justify-between mt-3 px-3 text-xs text-gray-400">
          <div className="hidden sm:flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="font-mono text-zinc-500">Transmissão em HD @ 1080p</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-zinc-400 text-center sm:text-right">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Assista até o fim para liberar descontos extras</span>
          </div>
        </div>

      </div>
    </div>
  );
}
