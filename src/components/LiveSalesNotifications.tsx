import { useState, useEffect } from 'react';
import { recentSales } from '../data';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Shuffle sales on load to get a randomized, non-repeating sequence of 50 buyers
const shuffledSales = [...recentSales].sort(() => Math.random() - 0.5);

export default function LiveSalesNotifications() {
  const [currentSale, setCurrentSale] = useState<typeof recentSales[0] | null>(null);
  const [saleIndex, setSaleIndex] = useState(0);

  useEffect(() => {
    // Initial delay before first toast display
    const initialDelay = setTimeout(() => {
      setCurrentSale(shuffledSales[0]);
    }, 4000);

    // Active cycle interval
    const interval = setInterval(() => {
      setCurrentSale(null); // Dismiss current item to animate out
      
      setTimeout(() => {
        setSaleIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % shuffledSales.length;
          setCurrentSale(shuffledSales[nextIndex]);
          return nextIndex;
        });
      }, 800); // Wait for transition fade out to complete

    }, 11000); // Show next notification every 11 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []); // Bound strictly on mount to prevent indices resetting!

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm pointer-events-none select-none hidden sm:block">
      <AnimatePresence>
        {currentSale && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="p-3.5 rounded-xl bg-zinc-950/95 border border-brand-green/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-3.5 pointer-events-auto"
          >
            {/* Success Coin Glow Icon */}
            <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg border border-brand-green/20 animate-pulse shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs text-white uppercase tracking-tight">{currentSale.name}</span>
                <span className="text-[10px] text-zinc-500">• {currentSale.location}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green ml-0.5" />
              </div>
              <p className="text-[11px] text-zinc-300 mt-0.5 leading-tight font-medium">
                Adquiriu o <span className="text-brand-green font-semibold">{currentSale.product}</span>
              </p>
              <span className="text-[9px] text-zinc-500 font-mono block mt-1 uppercase">
                Aprovado {currentSale.timeAgo}
              </span>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
