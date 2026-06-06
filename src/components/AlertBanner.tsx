import { useState, useEffect } from 'react';
import { AlertCircle, Clock } from 'lucide-react';

export default function AlertBanner() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 20, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset countdown to preserve loop in visual state
          return { minutes: 20, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div id="vsl-alert-banner" className="bg-white border-b border-zinc-200 py-1 md:py-2.5 px-1.5 md:px-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-100 text-center shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2.5 text-[9px] sm:text-xs md:text-sm">
        
        {/* Left Side: Tag de Alerta */}
        <div className="flex items-center gap-1 font-semibold text-brand-green animate-pulse">
          <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
          <span className="uppercase tracking-wider font-display font-bold">⚠️ Método 100% Validado em 2026</span>
        </div>

        {/* Center: Copy message */}
        <div className="text-zinc-800 font-bold leading-tight">
          Descubra o Segredo para faturar no piloto automático sem estoque
        </div>

        {/* Right Side: Urgency Countdown */}
        <div className="flex items-center gap-1 bg-zinc-100 border border-zinc-200 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-brand-green text-center">
          <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="font-mono font-bold tracking-tight text-[9px] md:text-xs uppercase">
            A oferta expira em: <span className="bg-brand-green text-white px-1 py-0.5 rounded ml-1">{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
          </span>
        </div>
        
      </div>
    </div>
  );
}
