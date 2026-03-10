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
        className="bg-slate-900/70 border border-cyan-300/50 rounded-xl w-[95vw] h-[90vh] shadow-[0_0_120px_rgba(34,211,238,0.25)] flex flex-col overflow-hidden relative backdrop-blur-xl"
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
              <p className="text-cyan-800 font-bold tracking-[0.2em] uppercase text-[10px] mt-2">Interactive Briefing // click image tiles to reveal content</p>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 px-8 md:px-12 py-4 flex flex-col gap-4 overflow-hidden">
          <div className="shrink-0 flex gap-3 overflow-x-auto pb-1">
            {visualItems.map((visual) => {
              const isActive = visual.id === activeVisual.id;
              return (
                <button
                  key={visual.id}
                  onClick={() => setActiveVisualId(visual.id)}
                  className={`relative min-w-[170px] md:min-w-[220px] h-[88px] text-left rounded-xl border transition-all overflow-hidden ${isActive ? 'border-cyan-200 bg-cyan-500/15 shadow-[0_0_25px_rgba(34,211,238,0.32)]' : 'border-cyan-900/60 bg-slate-950/45 hover:border-cyan-400/60'}`}
                >
                  <div className="h-full overflow-hidden">
                    <img src={visual.image} alt={visual.label} className={`w-full h-full object-cover transition-transform ${isActive ? 'scale-105 opacity-95' : 'opacity-65 hover:scale-105'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent" />
                    <div className="absolute bottom-2 left-3 text-cyan-100 font-black text-sm tracking-wide uppercase">{visual.label}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-4 custom-scrollbar-v">
            {visualItems.map((visual) => {
              const isActive = visual.id === activeVisual.id;
              const points = visual.points || segment.bullets || [];

              return (
                <button
                  key={`section-${visual.id}`}
                  onClick={() => setActiveVisualId(visual.id)}
                  className={`w-full text-left rounded-xl border overflow-hidden transition-all ${isActive ? 'border-cyan-200/80 bg-slate-900/80 opacity-100 shadow-[0_0_30px_rgba(34,211,238,0.25)]' : 'border-cyan-900/50 bg-slate-950/30 opacity-55 hover:opacity-80'}`}
                >
                  <div className="relative h-32 md:h-36 border-b border-cyan-800/40">
                    <img src={visual.image} alt={visual.label} className="absolute inset-0 w-full h-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-slate-950/65" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-cyan-100 text-xl md:text-2xl font-black uppercase tracking-wide">{visual.label}</h3>
                      <p className="text-cyan-300 text-sm md:text-base mt-1">{visual.description}</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="text-cyan-200 text-sm uppercase tracking-[0.2em] mb-4">Mission Data</div>
                    <p className="text-slate-100 text-lg md:text-xl leading-relaxed mb-5">{segment.content}</p>

                    {points.length > 0 && (
                      <ul className="space-y-4">
                        {points.map((point, idx) => (
                          <motion.li
                            key={`${visual.id}-${idx}`}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-4"
                          >
                            <span className="text-cyan-400 mt-1">◈</span>
                            <span className="text-slate-300 text-base md:text-lg">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {segment.summary && (
                      <div className="mt-8 border-l-4 border-cyan-500 bg-cyan-500/10 p-4">
                        <div className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-1">Summary</div>
                        <p className="text-cyan-50 text-lg font-semibold">{segment.summary}</p>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
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
