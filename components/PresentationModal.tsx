import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { PresentationSegment, SegmentVisual } from '../types';

interface PresentationModalProps {
  segment: PresentationSegment;
  onClose: () => void;
}

const fallbackVisual = (segment: PresentationSegment): SegmentVisual => ({
  id: `${segment.id}-fallback`,
  label: segment.title,
  image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
  description: segment.content,
  points: segment.bullets,
});

const PresentationModal: React.FC<PresentationModalProps> = ({ segment, onClose }) => {
  const visualItems = useMemo(() => (segment.visuals?.length ? segment.visuals : [fallbackVisual(segment)]), [segment]);
  const [activeVisualId, setActiveVisualId] = useState(visualItems[0].id);

  useEffect(() => {
    setActiveVisualId(visualItems[0].id);
  }, [segment.id, visualItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [onClose]);

  const activeVisual = visualItems.find((item) => item.id === activeVisualId) ?? visualItems[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-2 md:p-4 bg-slate-950/65 backdrop-blur-2xl font-mono"
    >
      <motion.div
        initial={{ scale: 0, rotate: -4, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0, rotate: 4, opacity: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 190 }}
        className="bg-slate-900/70 border border-cyan-300/50 rounded-xl w-[95vw] h-[95dvh] max-h-[95dvh] shadow-[0_0_120px_rgba(34,211,238,0.25)] flex flex-col overflow-hidden relative backdrop-blur-xl"
      >
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />

        <div className="px-8 md:px-12 pt-4 md:pt-5 shrink-0 border-b border-cyan-900/30 pb-3">
          <div className="flex items-start gap-4">
            <span className="text-5xl md:text-6xl drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">{segment.icon}</span>
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-black text-cyan-100 tracking-tight leading-tight uppercase">{segment.title}</h2>
              {segment.strapline && <p className="text-cyan-300 mt-2 text-sm md:text-lg font-semibold">{segment.strapline}</p>}
              <p className="text-cyan-800 font-bold tracking-[0.2em] uppercase text-[10px] mt-2">Interactive Briefing // click a panel to reveal content</p>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 px-8 md:px-12 py-3 md:py-4 flex flex-col gap-2 md:gap-3 overflow-hidden">
          <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden pr-1 custom-scrollbar-v">
            <div className="grid h-full grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4 auto-rows-fr">
            {visualItems.map((visual) => {
              const isActive = visual.id === activeVisual.id;
              const points = visual.points || segment.bullets || [];
              const visiblePoints = points;

              return (
                <button
                  key={`section-${visual.id}`}
                  onClick={() => setActiveVisualId(visual.id)}
                  className={`w-full text-left rounded-xl border overflow-hidden transition-all h-full flex flex-col ${isActive ? 'border-cyan-200/80 bg-slate-900/80 opacity-100 shadow-[0_0_30px_rgba(34,211,238,0.25)]' : 'border-cyan-900/50 bg-slate-950/30 opacity-80 hover:opacity-100'}`}
                >
                  <div className="relative h-44 md:h-48 border-b border-cyan-800/40">
                    <img src={visual.image} alt={visual.label} className={`absolute inset-0 w-full h-full object-cover transition-opacity ${isActive ? 'opacity-80' : 'opacity-65'}`} />
                    <div className="absolute inset-0 bg-slate-950/65" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className={`text-cyan-100 text-xl md:text-2xl font-black uppercase tracking-wide transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`}>{visual.label}</h3>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex-1 overflow-hidden">
                    <p className={`text-slate-100 text-base md:text-lg leading-relaxed mb-4 transition-opacity ${isActive ? 'opacity-100' : 'opacity-55'}`}>{visual.description}</p>

                    {visiblePoints.length > 0 && (
                      <ul className="space-y-3 md:space-y-4">
                        {visiblePoints.map((point, idx) => (
                          <motion.li
                            key={`${visual.id}-${idx}`}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-4"
                          >
                            <span className={`text-cyan-400 mt-1 transition-opacity ${isActive ? 'opacity-100' : 'opacity-50'}`}>◈</span>
                            <span className={`text-slate-300 text-base md:text-lg leading-relaxed transition-opacity ${isActive ? 'opacity-100' : 'opacity-55'}`}>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </button>
              );
            })}
            </div>
          </div>
        </div>

        <div className="px-8 md:px-12 pb-5 md:pb-6 shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-cyan-300/10 border-cyan-300/60 text-cyan-100 hover:bg-cyan-300/20 font-black py-5 rounded-lg border transition-all active:scale-[0.98] flex items-center justify-center gap-4 text-lg md:text-xl uppercase tracking-widest"
          >
            <span>Acknowledge & Continue</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-3xl">
              →
            </motion.span>
          </button>
        </div>

        <style>{`
          .custom-scrollbar-v::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar-v::-webkit-scrollbar-track {
            background: rgba(34, 211, 238, 0.05);
          }
          .custom-scrollbar-v::-webkit-scrollbar-thumb {
            background: #0891b2;
            border-radius: 2px;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

export default PresentationModal;
