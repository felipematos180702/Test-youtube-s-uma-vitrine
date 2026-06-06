import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  PlayCircle, 
  Tv, 
  Flame, 
  TrendingUp, 
  Sparkles, 
  Cpu, 
  Zap, 
  DollarSign, 
  Film,
  ChevronLeft,
  ChevronRight,
  Award,
  BookOpen
} from 'lucide-react';

interface ModuleItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  badge?: string;
}

const modulesData: ModuleItem[] = [
  {
    number: "MÓDULO 1",
    title: "INTRODUÇÃO, AFILIADO, VITRINE E CONVERSÃO!",
    description: "Abra a caixa-preta da engrenagem lucrativa. Entenda o posicionamento exato, como se cadastrar e receber as maiores taxas de comissão do mercado, criando sua vitrine magnética desde o primeiro dia.",
    icon: Zap,
    badge: "Foco em Conversão"
  },
  {
    number: "MÓDULO 2",
    title: "FATURAMENTO, ONDE É POSSÍVEL CHEGAR!",
    description: "Simulações e projeções realistas de curto, médio e longo prazo. Estruture suas metas reais de faturamento e entenda a escala de vendas automáticas sem mistérios.",
    icon: DollarSign,
    badge: "Escala Real"
  },
  {
    number: "MÓDULO 3",
    title: "CONSTRUIR AUTORIDADE VENDE MUITO! ATÉ 10X MAIS.",
    description: "O segredo por trás do desejo de compra imediato dos seguidores. Aprenda técnicas para gerar credibilidade instantânea nas redes — mesmo que você decida começar 100% anônimo.",
    icon: Flame,
    badge: "Autoridade Magnética"
  },
  {
    number: "MÓDULO 4",
    title: "A MELHOR FERRAMENTA DE VENDAS !",
    description: "Configurando a tecnologia certa para gerenciar múltiplos leads em tempo real de forma automática. O motor por trás de todas as vitrines de alta comissão.",
    icon: Cpu,
    badge: "Automação Total"
  },
  {
    number: "MÓDULO 5",
    title: "YOUTUBE SHOPPING",
    description: "Domine a integração orgânica mais promissora do mercado moderno. Aprenda a linkar produtos diretamente em canais do YouTube usando o desejo do consumidor para lucrar.",
    icon: Tv,
    badge: "Nova Fronteira"
  },
  {
    number: "MÓDULO 6",
    title: "DO CADASTRO AO LUCRO, AS MELHORES PLATAFORMAS DE AFILIADO!",
    description: "Guia prático e cirúrgico de cadastro, aprovação rápida e triagem das melhores plataformas de comissão para reverter cada lead em saques acelerados.",
    icon: Award,
    badge: "Triagem Secreta"
  },
  {
    number: "MÓDULO 7",
    title: "MINHAS VENDAS EM UM MÊS FRACO! MOSTRANDO A REALIDADE.",
    description: "Uma análise sem rodeios dos bastidores operacionais em tempos de maré baixa. Domine a técnica de contingência para que até seus piores dias superem salários tradicionais.",
    icon: TrendingUp,
    badge: "Bastidores Reais"
  },
  {
    number: "MÓDULO 8",
    title: "POSTAGEM NA PRÁTICA!",
    description: "Demonstração direta, gravada passo a passo na tela do celular: como postar, editar títulos irresistíveis e acionar o gatilho correto de conversão imediata.",
    icon: Film,
    badge: "Mão na Massa"
  }
];

export default function CourseModules() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll manually on button click if desired
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  // We duplicate the module dataset to guarantee seamless loop animation
  const duplicatedModules = [...modulesData, ...modulesData];

  return (
    <section 
      id="cronograma-curso" 
      className="py-20 w-full overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Scrollbar-hide + CSS Marquee smooth animation injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marquee-infinite 35s linear infinite;
        }
        .paused-state {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="text-center mb-12 max-w-5xl mx-auto px-4">
        <span className="bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/30 text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
          <PlayCircle className="w-4 h-4 text-[#FF0000]" />
          Conteúdo Prático & Estruturado
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight leading-none">
          O Que Você Vai <span className="text-[#FF0000]">Dominar por Dentro</span> do Curso
        </h2>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Uma vitrine automática contínua de comissões, dividida em passos práticos. Passe o mouse ou segure o dedo em cima para pausar a leitura.
        </p>
      </div>

      {/* Grid Navigation container */}
      <div className="relative mt-10 w-full max-w-none group">
        
        {/* Navigation Arrows for manual correction */}
        <div className="absolute top-1/2 left-4 lg:left-8 -translate-y-1/2 z-20 pointer-events-auto opacity-40 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleScrollLeft}
            className="p-3.5 rounded-full bg-[#1e1e20]/90 hover:bg-[#FF0000] border border-white/10 hover:border-[#FF0000]/50 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label="Módulos Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 lg:right-8 -translate-y-1/2 z-20 pointer-events-auto opacity-40 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleScrollRight}
            className="p-3.5 rounded-full bg-[#1e1e20]/90 hover:bg-[#FF0000] border border-white/10 hover:border-[#FF0000]/50 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label="Próximo Módulo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Sliding Vitrine Viewport with absolute overflow wrapping */}
        <div 
          ref={containerRef}
          className="overflow-x-auto no-scrollbar py-4"
        >
          {/* Animated marquee tracks containing the double card modules list */}
          <div className={`animate-marquee-smooth ${isHovered ? 'paused-state' : ''} gap-6`}>
            {duplicatedModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={index}
                  className="w-[280px] md:w-[350px] shrink-0 rounded-3xl bg-[#09090B] border border-white/5 hover:border-[#FF0000]/30 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(255,0,0,0.06)] transition-all duration-500 p-6 flex flex-col justify-between group cursor-pointer mr-6"
                >
                  <div>
                    {/* Card Header with Module tag & Shiny Highlight Icon */}
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF0000] uppercase pt-1">
                        {module.number}
                      </span>
                      <div className="p-3.5 rounded-2xl bg-[#1E1E22] border border-white/5 shadow-inner text-[#FF0000] relative">
                        <div className="absolute inset-0 bg-[#FF0000]/10 filter blur-md rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity" />
                        <IconComponent className="w-5 h-5 relative z-10" />
                      </div>
                    </div>

                    {/* Badge Row */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[8px] md:text-[9px] font-black uppercase bg-[#FF0000]/10 text-[#FF0000] px-2.5 py-1 rounded-md border border-[#FF0000]/20 tracking-wider">
                        {module.badge}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">• Aula Disponível</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-black font-display text-white tracking-tight leading-snug group-hover:text-[#FF0000] transition-colors duration-300">
                      {module.title}
                    </h3>

                    {/* Copywriting Pitch */}
                    <p className="text-zinc-400 font-light text-xs mt-3 leading-relaxed whitespace-normal">
                      {module.description}
                    </p>
                  </div>

                  {/* Card Footer status info */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF0000] animate-pulse" />
                      Material Extra Incluso
                    </span>
                    <span className="text-zinc-600">MOD {(index % 8) + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scrolling Instruction hint for mobile conversion */}
        <div className="text-center mt-3 text-zinc-500 text-xs flex items-center justify-center gap-1">
          <BookOpen className="w-4 h-4 text-[#FF0000]/70" />
          <span>Vitrine infinita • Mantenha o mouse ou toque pressionado para pausar o cronograma</span>
        </div>
      </div>
    </section>
  );
}
