import { useState, MouseEvent, FormEvent } from 'react';
import AlertBanner from './components/AlertBanner';
import VslPlayer from './components/VslPlayer';
import PillarsSection from './components/PillarsSection';
import CourseModules from './components/CourseModules';
import SpecialBonuses from './components/SpecialBonuses';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import FaqSection from './components/FaqSection';
import LiveSalesNotifications from './components/LiveSalesNotifications';
import Footer from './components/Footer';

import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CircleDollarSign, 
  ChevronRight, 
  Flame, 
  Gift, 
  Sparkles,
  MessageCircle,
  X,
  XCircle,
  HelpCircle,
  TrendingUp,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [checkoutStep, setCheckoutStep] = useState<'closed' | 'payment_form' | 'success'>('closed');
  const [selectedPayment, setSelectedPayment] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [supportOpen, setSupportOpen] = useState(false);
  
  // Checkout Fake state
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');

  const initiatePurchase = (e: MouseEvent) => {
    e.preventDefault();
    window.location.href = "https://pay.kiwify.com.br/IuLXoda";
  };

  const handleFakePurchaseSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };


  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-brand-red selection:text-white relative">
      
      {/* ⚠️ Top Announcement Alert */}
      <AlertBanner />

      {/* Floating Interactive Live Transact Notification */}
      <LiveSalesNotifications />

      {/* Hero Header Area */}
      <header className="pt-10 pb-6 px-4 text-center max-w-5xl mx-auto">
        {/* Urgent Warning Tag line */}
        <div className="inline-flex items-center gap-1.5 bg-brand-red/15 border border-brand-red/30 px-4 py-2 rounded-full mb-6">
          <Flame className="w-4 h-4 text-brand-red animate-pulse" />
          <span className="text-[11px] md:text-xs font-display font-extrabold uppercase tracking-widest text-[#FF3E6C]">
            ⚠️ Oferta Especial de Lançamento Expirando Hoje
          </span>
        </div>

        {/* Big Crimson Display Headline (Copy Base) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.1] max-w-4xl mx-auto text-white">
          Visualização <span className="text-brand-red underline decoration-brand-red/30 underline-offset-4">Não Traz Dinheiro</span>: Transforme Suas Redes em Vendas Automáticas
        </h1>

        {/* Subtitle Supporting Info */}
        <p className="text-zinc-400 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Esqueça as migalhas de views do Instagram ou YouTube. Descubra como vender como afiliado, <strong className="text-zinc-200">sem estoque e sem custos iniciais</strong>, transformando seu conteúdo em uma vitrine magnética para atrair compradores qualificados.
        </p>
      </header>

      {/* Centralized VSL Video Player Module */}
      <VslPlayer />

      {/* CTA Button Module 1 (Below Video) */}
      <div className="flex flex-col items-center justify-center px-4 max-w-2xl mx-auto text-center gap-3">
        <motion.button
          onClick={initiatePurchase}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-brand-green to-emerald-500 hover:from-emerald-400 hover:to-brand-green text-black font-extrabold font-display text-base md:text-xl py-5 px-6 rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.55)] transition duration-300 uppercase tracking-wide flex items-center justify-center gap-3 group relative overflow-hidden"
        >
          {/* Flame element */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          QUERO TRANSFORMAR MINHAS REDES SOCIAIS EM UMA VITRINE LUCRATIVA
          <ChevronRight className="w-6 h-6 shrink-0 group-hover:translate-x-1.5 transition-transform" />
        </motion.button>
        
        {/* Secure Checkout Labels */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-xs text-zinc-500 mt-2">
          <span className="flex items-center gap-1 font-mono">
            <Lock className="w-3 px-0 h-3 text-brand-green" /> Acesso Imediato & Seguro
          </span>
          <span className="text-zinc-700">•</span>
          <span className="flex items-center gap-1 font-mono">
            <ShieldCheck className="w-3 h-3 text-brand-green" /> 7 Dias de Garantia Blindada
          </span>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="mx-auto max-w-5xl mt-12 mb-16 bg-zinc-950/60 border-y border-white/5 py-4 px-3 flex flex-wrap justify-around items-center gap-4">
        <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=150&h=30&q=80" alt="Hotmart Approved Setup" className="h-6 opacity-30 grayscale hover:opacity-100 transition duration-300" />
        <span className="text-zinc-800 text-lg hidden md:inline">|</span>
        <div className="flex items-center gap-2 text-zinc-400">
          <CircleDollarSign className="w-5 h-5 text-brand-green" />
          <span className="text-xs font-mono tracking-wider font-semibold">CHECKOUT INTEGRADO DE ALTA VELOCIDADE</span>
        </div>
        <span className="text-zinc-800 text-lg hidden md:inline">|</span>
        <img src="https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=150&h=30&q=80" alt="Norton Secure Seal" className="h-6 opacity-30 grayscale hover:opacity-100 transition duration-300" />
      </div>

      {/* The 5 Pillars Bento Section */}
      <PillarsSection />

      {/* 📘 Course Modules Autoplay Carousel (Section A) */}
      <CourseModules />

      {/* 🎁 Exclusive Bonuses Showcase (Section B) */}
      <SpecialBonuses />

      {/* Real Testimonials and Proof screenshots Carousel */}
      <TestimonialsCarousel />

      {/* Dynamic Trust and Pricing Block for High Conversion */}
      <section className="py-12 px-4 max-w-3xl mx-auto scroll-mt-24">
        
        {/* Core Pricing Plan Box */}
        <div id="pricing-block" className="rounded-3xl bg-zinc-950 border border-brand-red/30 p-8 md:p-12 text-center relative shadow-[0_0_60px_rgba(255,0,60,0.1)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red border border-brand-red text-white text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
            🔐 Acesso Seguro Garantido
          </div>

          <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 block mb-3">
            PACOTE COMPLETO VITRINE AUTOMÁTICA
          </span>
          
          <h3 className="text-3xl font-black font-display text-white">
            Transforme Suas Redes em Máquina de Vendas
          </h3>

          <div className="mt-8 flex flex-col items-center justify-center gap-1">
            <span className="text-zinc-500 text-sm line-through">De R$ 997,00 por apenas</span>
            <div className="flex items-baseline gap-1.5 text-brand-green">
              <span className="text-lg md:text-xl font-bold">12x de</span>
              <span className="text-5xl md:text-6xl font-black font-display tracking-tight">R$ 64,85</span>
            </div>
            <span className="text-zinc-400 font-bold block mt-2 text-sm md:text-base">ou R$ 627,00 à vista no PIX</span>
          </div>

          {/* Core inclusions lines */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left border-y border-white/5 py-6">
            <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
              <Check className="w-4 h-4 text-brand-green shrink-0 bg-brand-green/10 rounded-full p-0.5" />
              <span>Grupo de suporte</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
              <Check className="w-4 h-4 text-brand-green shrink-0 bg-brand-green/10 rounded-full p-0.5" />
              <span>Aulas de tráfego pago</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
              <Check className="w-4 h-4 text-brand-green shrink-0 bg-brand-green/10 rounded-full p-0.5" />
              <span>Estratégias de tráfego</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
              <Check className="w-4 h-4 text-brand-green shrink-0 bg-brand-green/10 rounded-full p-0.5" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>

          {/* Direct CTA action */}
          <div className="mt-8">
            <motion.button
              onClick={initiatePurchase}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-brand-green to-emerald-500 hover:from-emerald-400 hover:to-brand-green text-black py-5 px-6 rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.55)] font-black text-base md:text-lg tracking-wide uppercase font-display select-none cursor-pointer flex items-center justify-center gap-2"
            >
              <Flame className="w-5 h-5 shrink-0 fill-black/20 animate-pulse" />
              QUERO ADQUIRIR O MÉTODO COM DESCONTO AGORA
            </motion.button>
          </div>

          <div className="mt-4 text-zinc-500 text-[10px] md:text-xs">
            ⚠️ Atenção: Seus dados estão absolutamente seguros. Ambiente de pagamento processado de forma criptografada.
          </div>

        </div>
      </section>

      {/* Urgency Announcement banner before FAQ */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-black border-y border-white/5 py-12 px-6 text-center max-w-4xl mx-auto rounded-3xl mt-12 mb-6">
        <h3 className="text-xl md:text-2xl font-black font-display text-white">⚠️ ATENÇÃO: AS VAGAS ESTÃO SE ESGOTANDO</h3>
        <p className="text-zinc-400 text-xs md:text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
          As vagas para esta turma com acesso ao preço promocional de lançamento de apenas <strong>R$ 627,00</strong> estão se esgotando rapidamente. Garanta sua vaga com o desconto vitalício agora ou pague o valor cheio de R$ 997,00 amanhã.
        </p>
      </section>

      {/* Accordion FAQ questions */}
      <FaqSection />

      {/* 📞 Floating Live interactive support widget */}
      <div className="fixed bottom-4 right-4 z-50">
        {!supportOpen ? (
          <motion.button
            onClick={() => setSupportOpen(true)}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-brand-green text-zinc-950 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-brand-green/35 hover:shadow-xl transition-all"
            aria-label="Contatar Suporte no Chat"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-80 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-4 text-left"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-green rounded-full animate-pulse" />
                <span className="font-extrabold text-xs uppercase tracking-tight text-white font-display">FAQ Exclusivo do Suporte</span>
              </div>
              <button 
                onClick={() => setSupportOpen(false)}
                className="text-zinc-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-[11px] text-zinc-400 mb-3 font-light leading-relaxed">
              Olá! Nossos assistentes estão focados em garantir sua vitrine magnética. Escolha uma das dúvidas rápidas:
            </p>

            <div className="space-y-2">
              <button 
                onClick={() => {
                  setCheckoutStep('payment_form');
                  setSupportOpen(false);
                }}
                className="w-full text-left text-[11px] p-2 bg-zinc-900 border border-white/5 rounded-lg text-zinc-200 hover:border-brand-green/45 hover:text-brand-green transition duration-200 block"
              >
                👉 Qual o preço final com desconto? (R$ 627,00)
              </button>
              
              <button 
                onClick={() => {
                  setCheckoutStep('payment_form');
                  setSupportOpen(false);
                }}
                className="w-full text-left text-[11px] p-2 bg-zinc-900 border border-white/5 rounded-lg text-zinc-200 hover:border-brand-green/45 hover:text-brand-green transition duration-200 block"
              >
                👉 Consigo pagar via PIX ou Cartão? (Sim)
              </button>

              <button 
                onClick={() => {
                  setCheckoutStep('payment_form');
                  setSupportOpen(false);
                }}
                className="w-full text-left text-[11px] p-2 bg-zinc-900 border border-white/5 rounded-lg text-zinc-200 hover:border-brand-green/45 hover:text-brand-green transition duration-200 block"
              >
                👉 Como recebo o acesso? (Email imediato)
              </button>
            </div>

            {/* Direct Whatsapp Simulated CTA */}
            <div className="mt-3.5 pt-3 border-t border-white/5">
              <a 
                href="https://wa.me/5531999999999?text=Quero%20garantir%20minha%20vaga%20no%20preço%20promocional%20da%20vitrine%20comissionada"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-green text-zinc-950 rounded-xl py-2 px-3 hover:bg-emerald-400 block text-center font-bold text-xs font-display flex items-center justify-center gap-1.5 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Suporte Humano
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* 🛒 Complete Interactive Checkout Form Modal (High Fidelity simulation for testing) */}
      <AnimatePresence>
        {checkoutStep !== 'closed' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
          >
            {checkoutStep === 'payment_form' ? (
              
              /* Payment step */
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="w-full max-w-lg rounded-2xl bg-zinc-950 border border-zinc-800 p-6 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setCheckoutStep('closed')}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase mb-3 font-display">
                  <Lock className="w-4 h-4" />
                  <span>Ambiente 100% Criptografado</span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">Formulário de Inscrição Oficial</h3>
                <p className="text-zinc-500 text-xs mt-1">Preencha os dados fictícios abaixo para simular e validar o fluxo de compra.</p>

                {/* Simulated Product Details */}
                <div className="bg-zinc-900 border border-white/5 p-3 rounded-xl mt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-extrabold text-white block">Acesso "YouTube é Só Uma Vitrine, Visualização Não Dá Dinheiro" 🚀</span>
                    <span className="text-zinc-500">1 Ano de mentoria e bônus inclusos</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-brand-green block">R$ 627,00</span>
                    <span className="text-zinc-500 text-[10px]">OU 12x de R$ 64,85</span>
                  </div>
                </div>

                <form onSubmit={handleFakePurchaseSubmit} className="mt-5 space-y-4">
                  {/* Personal details inputs */}
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name-input" className="block text-[11px] text-zinc-400 font-semibold mb-1 uppercase tracking-wider">Nome Completo</label>
                      <input 
                        id="name-input"
                        type="text" 
                        required
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        placeholder="Ex: Mateus Ribeiro"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-green transition duration-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email-input" className="block text-[11px] text-zinc-400 font-semibold mb-1 uppercase tracking-wider">E-mail (Receber acesso)</label>
                        <input 
                          id="email-input"
                          type="email" 
                          required
                          value={buyerEmail}
                          onChange={(e) => setBuyerEmail(e.target.value)}
                          placeholder="Ex: mateus@email.com"
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-green transition duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone-input" className="block text-[11px] text-zinc-400 font-semibold mb-1 uppercase tracking-wider">WhatsApp com DDD</label>
                        <input 
                          id="phone-input"
                          type="tel" 
                          required
                          value={buyerPhone}
                          onChange={(e) => setBuyerPhone(e.target.value)}
                          placeholder="Ex: (11) 98765-4321"
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-green transition duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods tabs selector */}
                  <div className="space-y-2">
                    <span className="block text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Forma de Pagamento</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPayment('pix')}
                        className={`p-2.5 rounded-xl border text-[11px] font-bold uppercase transition duration-200 flex flex-col items-center justify-center gap-1 ${
                          selectedPayment === 'pix'
                            ? 'bg-brand-green/10 border-brand-green text-brand-green'
                            : 'bg-zinc-900 border-white/5 text-zinc-400'
                        }`}
                      >
                        <CircleDollarSign className="w-4 h-4" />
                        Pix Instante
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedPayment('card')}
                        className={`p-2.5 rounded-xl border text-[11px] font-bold uppercase transition duration-200 flex flex-col items-center justify-center gap-1 ${
                          selectedPayment === 'card'
                            ? 'bg-brand-green/10 border-brand-green text-brand-green'
                            : 'bg-zinc-900 border-white/5 text-zinc-400'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        Cartão
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedPayment('boleto')}
                        className={`p-2.5 rounded-xl border text-[11px] font-bold uppercase transition duration-200 flex flex-col items-center justify-center gap-1 ${
                          selectedPayment === 'boleto'
                            ? 'bg-brand-green/10 border-brand-green text-brand-green'
                            : 'bg-zinc-900 border-white/5 text-zinc-400'
                        }`}
                      >
                        <Lock className="w-4 h-4" />
                        Boleto
                      </button>
                    </div>
                  </div>

                  {/* Form button submit */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm py-4 rounded-xl shadow-lg transition duration-250 uppercase font-display select-none block text-center"
                    >
                      ✓ Simular E Efetivar Inscrição
                    </button>
                  </div>
                </form>

              </motion.div>

            ) : (

              /* Success congrats popup */
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="w-full max-w-md rounded-2xl bg-[#09150E] border-2 border-brand-green p-8 text-center shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-green/40">
                  <Check className="w-8 h-8 font-black" />
                </div>

                <span className="text-[10px] bg-brand-green/25 text-brand-green border border-brand-green/45 px-3 py-1 font-bold rounded-full uppercase tracking-wider font-mono inline-block mb-3">
                  Transação Aprovada com Sucesso
                </span>

                <h3 className="text-2xl font-black font-display text-white">Parabéns pelo Próximo Passo! 👑</h3>
                
                <p className="text-zinc-300 text-xs mt-3 leading-relaxed font-light">
                  Sua inscrição simulada de teste ocorreu perfeitamente. O acesso à vitrine automática com todos os bônus e tutoriais foi despachado para: 
                  <strong className="text-white block mt-1 font-mono break-all">{buyerEmail || 'seu-email@exemplo.com'}</strong>
                </p>

                <div className="mt-8 border-t border-brand-green/15 pt-5 space-y-2">
                  <p className="text-[10px] text-zinc-500 font-light">
                    Isso conclui a simulação interativa de altíssima fidelidade da nossa Landing Page VSL.
                  </p>
                  <button
                    onClick={() => setCheckoutStep('closed')}
                    className="w-full bg-zinc-900 hover:bg-zinc-850 text-white border border-white/10 hover:border-brand-green rounded-xl py-3 text-xs font-bold transition mt-2"
                  >
                    Voltar Para a Página de Vendas
                  </button>
                </div>
              </motion.div>

            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate compliant Footers */}
      <Footer />
    </div>
  );
}
