import { useState } from 'react';
import { Eye, ShieldCheck, Image as ImageIcon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Structured list of testimonial print slots for the user to insert easily.
// The list includes the two pre-generated real high-converting images, plus multiple empty slots.
interface PrintSlot {
  id: string;
  title: string;
  src?: string; // Optional: can be replaced by user with their own screenshot paths
  placeholderLabel: string;
}

export default function TestimonialsCarousel() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<PrintSlot | null>(null);

  // 5-card high-conversion bento structure: loaded with real high-converting student proofs.
  const printSlots: PrintSlot[] = [
    {
      id: "slot1",
      title: "DEPOIMENTO DE ALUNO",
      placeholderLabel: "Arraste e solte o Print do Painel de Faturamento aqui",
      src: "https://lh3.googleusercontent.com/d/1xRxMHoNoOujE8StR9mzCpQPJi52d2geG"
    },
    {
      id: "slot2",
      title: "DEPOIMENTO DE ALUNO",
      placeholderLabel: "Arraste e solte o Print de Notificações Pop-up aqui",
      src: "https://lh3.googleusercontent.com/d/1aUTbOaORVbcW5IudJNvM5LJRB91lkdAU"
    },
    {
      id: "slot3",
      title: "DEPOIMENTO DE ALUNO",
      placeholderLabel: "Arraste e solte o Print 3 do celular aqui",
      src: "https://lh3.googleusercontent.com/d/18vRRanDpLbHYFi-qY__kTdnsMsfPsWQn"
    },
    {
      id: "slot4",
      title: "Minha comissão em apenas 6 dias de operação",
      placeholderLabel: "Arraste e solte o Print 4 do celular aqui",
      src: "https://lh3.googleusercontent.com/d/1nnYE4lTAiTf2BV4eGm0Ma4U5O6H0dMaX"
    },
    {
      id: "slot5",
      title: "Meus pagamentos da Amazon",
      placeholderLabel: "Arraste e solte o Print 5 do celular aqui",
      src: "https://lh3.googleusercontent.com/d/1wCIF_ljcvgjTVRNV4xw4TGCISih8XNwk"
    }
  ];

  const openLightbox = (slot: PrintSlot) => {
    if (slot.src) {
      setLightboxImg(slot.src);
      setSelectedSlot(slot);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="provas-sociais" className="py-20 w-full bg-white text-zinc-950 scroll-mt-24 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title block */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1.5 rounded-full inline-block mb-3">
            Prova Inquestionável
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-zinc-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Resultados Reais de <span className="text-brand-green font-bold">Quem Aplica o Método</span>
          </h2>
          <p className="text-zinc-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Veja abaixo as capturas de tela das comissões caindo no celular no piloto automático. Clique em qualquer card para ver os detalhes ampliados.
          </p>
        </div>

        {/* Grid of clean visual mockup frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {printSlots.map((slot, index) => {
            const hasImage = !!slot.src;
            return (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-4 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-brand-green/30 shadow-sm hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header label with small green bullet */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-[11px] font-sans font-bold text-zinc-600 uppercase tracking-tight">
                      {slot.title}
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </div>

                  {/* Smartphone simulation container slot */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl bg-zinc-100 border border-zinc-200 overflow-hidden flex flex-col items-center justify-center select-none shadow-inner">
                    {hasImage ? (
                      <>
                        {/* Real Image Render */}
                        <img
                          src={slot.src}
                          alt={slot.title}
                          className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Click overlay tool triggers */}
                        <div
                          onClick={() => openLightbox(slot)}
                          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 cursor-pointer z-10"
                        >
                          <div className="bg-brand-green text-zinc-950 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-lg">
                            <Eye className="w-4 h-4" />
                            Ampliar Print
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Elegant Dotted Interactive Placeholder Slot */
                      <div className="p-6 text-center flex flex-col items-center justify-center h-full w-full border-2 border-dashed border-zinc-300 rounded-2xl bg-white hover:bg-zinc-50 transition-colors duration-300">
                        <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 text-zinc-400 mb-4 group-hover:text-brand-green group-hover:border-brand-green/35 transition-all">
                          <ImageIcon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold text-zinc-700 block mb-1">Espaço Reservado</span>
                        <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[160px] mx-auto">
                          {slot.placeholderLabel}
                        </p>
                        <span className="text-[9px] text-[#22C55E]/40 mt-4 tracking-wider uppercase font-mono group-hover:text-brand-green/70 transition-colors">
                          Pronto para Upload
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status info bar */}
                <div className="mt-4 pt-3.5 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-500 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    Print Real Validado
                  </span>
                  <span>ID: {slot.id.toUpperCase()}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal block */}
      <AnimatePresence>
        {lightboxOpen && lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setLightboxOpen(false);
              setSelectedSlot(null);
            }}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-lg max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Resultado ampliado"
                className="rounded-2xl border border-white/10 max-h-[80vh] w-auto mx-auto shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => {
                  setLightboxOpen(false);
                  setSelectedSlot(null);
                }}
                className="absolute -top-12 right-0 bg-zinc-900 border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-red hover:border-brand-red transition duration-200"
              >
                Fechar [X]
              </button>
              <div className="text-center text-zinc-400 text-xs mt-3 flex items-center justify-center gap-1 bg-zinc-950 py-1.5 px-3 rounded-lg border border-white/5">
                <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                <span>
                  {selectedSlot?.id === "slot4" || selectedSlot?.id === "slot5"
                    ? "Meu resultado pessoal no mercado"
                    : "Resultado Real de Aluno Integrado ao Método"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
