import { ShieldAlert, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-white/5 py-12 px-6 mt-16 text-zinc-500 font-light relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand name & legal */}
        <div className="text-center md:text-left">
          <span className="font-display font-black text-white text-[13px] md:text-sm tracking-wide uppercase block">
            YouTube é só uma vitrine, <span className="text-brand-green">visualização não dá dinheiro</span>™
          </span>
          <p className="text-xs text-zinc-600 mt-2">
            © {new Date().getFullYear()} "YouTube é só uma vitrine, visualização não dá dinheiro". Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-zinc-600 mt-1">
            CNPJ: 45.182.203/0001-90 • Belo Horizonte, Minas Gerais.
          </p>
        </div>

        {/* Center: Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
          <a href="#termos" className="hover:text-white transition duration-200">Termos de Uso</a>
          <span className="text-zinc-800">•</span>
          <a href="#politicas" className="hover:text-white transition duration-200">Políticas de Privacidade</a>
          <span className="text-zinc-800">•</span>
          <a href="#suporte" className="hover:text-white transition duration-200">Contato / Suporte</a>
        </div>

        {/* Right: Scroll to top element button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-zinc-900 border border-white/5 hover:border-brand-red/30 text-zinc-400 hover:text-white rounded-xl transition duration-200"
          aria-label="Voltar para o topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>

      {/* Mandatory Network/Ref Disclaimer */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-zinc-950 text-[10px] text-zinc-700 leading-relaxed text-center">
        <div className="flex items-center justify-center gap-1.5 mb-2 text-zinc-600">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span className="uppercase font-semibold tracking-wider text-[9px]">Aviso Legal Anti-Spam e Práticas</span>
        </div>
        <p className="max-w-4xl mx-auto">
          Este site e o produto oferecido não são afiliados, patrocinados, endossados ou associados de forma alguma com o Google LLC, Meta Platforms Inc., Instagram, YouTube, TikTok ou Facebook. Quaisquer depoimentos de faturamento ou resultados informados são estimativas e resultados individuais que dependem da aplicação direta e correta do método, não representando ganho fácil ou promessa de retorno automatizado sem esforço.
        </p>
      </div>
    </footer>
  );
}
