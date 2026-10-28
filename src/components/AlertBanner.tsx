import { AlertCircle } from 'lucide-react';

export default function AlertBanner() {
  return (
    <div id="vsl-alert-banner" className="bg-white border-b border-zinc-200 py-1.5 md:py-2.5 px-2 md:px-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-100 text-center shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs md:text-sm">
        
        {/* Left Side: Tag de Alerta */}
        <div className="flex items-center gap-1 font-semibold text-brand-green animate-pulse">
          <AlertCircle className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
          <span className="uppercase tracking-wider font-display font-bold">⚠️ Método 100% Validado em 2026</span>
        </div>

        <span className="hidden sm:inline-block text-zinc-300">•</span>

        {/* Center: Copy message - Oculto no mobile, visível a partir de sm */}
        <div className="hidden sm:block text-zinc-800 font-bold leading-tight text-[11px] md:text-sm">
          Descubra o Segredo para faturar no piloto automático sem estoque
        </div>
        
      </div>
    </div>
  );
}
