import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PresentationSegment } from '../types';

interface PresentationModalProps {
  segment: PresentationSegment;
  onClose: () => void;
}

const PresentationModal: React.FC<PresentationModalProps> = ({ segment, onClose }) => {
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

  const getSegmentImage = () => {
    if (segment.id === 'why') return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
    if (segment.id === 'benefits') return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
    if (segment.id === 'deliverables') return "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800";
    return "";
  };

  const showDualPane = (segment.id === 'why' || segment.id === 'benefits' || segment.id === 'deliverables');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-2 md:p-4 bg-slate-950/65 backdrop-blur-2xl font-mono"
    >
      <motion.div 
        initial={{ scale: 0, rotate: -5, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0, rotate: 5, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`bg-slate-900/70 border border-cyan-300/50 rounded-xl w-[95vw] h-[90vh] shadow-[0_0_120px_rgba(34,211,238,0.25)] flex flex-col overflow-hidden relative backdrop-blur-xl`}
      >
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />

        <div className="px-8 md:px-12 pt-6 md:pt-10 shrink-0">
          <div className="flex items-center gap-6 mb-4 border-b border-cyan-900/30 pb-6">
            <span className="text-5xl md:text-6xl drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">{segment.icon}</span>
            <div className="flex flex-col flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-cyan-100 tracking-tighter uppercase leading-none">
                {segment.title}
              </h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-cyan-800 font-bold tracking-[0.2em] uppercase text-[10px]">DECRYPTED STRATEGIC DATA // SECTOR: {segment.id.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col px-8 md:px-12 relative">
          <div className="flex-1 flex flex-col min-h-0">
            {showDualPane ? (
              <div className="flex-1 flex flex-col md:flex-row items-stretch gap-12 py-6">
                <div className="w-full md:w-[450px] shrink-0 flex flex-col items-center justify-center relative">
                    <div className="relative z-10 w-full">
                        <div className="aspect-video md:w-full rounded-lg border border-cyan-500/30 overflow-hidden shadow-2xl bg-slate-800">
                            <img 
                                src={getSegmentImage()} 
                                alt={segment.title} 
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none" />
                        </div>
                        <div className="mt-4 text-[10px] text-cyan-900 flex justify-between font-bold">
                          <span>IMG_REF: {segment.id.toUpperCase()}_01</span>
                          <span>STATUS: VERIFIED</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center relative">
                    <div className="relative z-10 bg-slate-950/35 p-8 md:p-10 rounded-xl border border-cyan-300/20 backdrop-blur-sm overflow-hidden">
                        <div className="text-cyan-200 text-4xl font-black mb-6 opacity-30 leading-none">DATA_STREAM</div>
                        <div className="text-slate-100 text-xl md:text-2xl leading-[1.4] whitespace-pre-wrap font-medium tracking-tight max-h-[45vh] overflow-y-auto custom-scrollbar-v pr-4">
                            <div className="mb-8 font-black text-cyan-400 uppercase tracking-tight text-2xl border-l-4 border-cyan-500 pl-6">
                              {segment.content}
                            </div>
                            {segment.bullets && (
                              <ul className="space-y-6 list-none">
                                {segment.bullets.map((bullet, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 items-start"
                                  >
                                    <span className="text-cyan-500 mt-1 shrink-0 text-xs">[0{idx + 1}]</span>
                                    <span className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed">{bullet}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            )}
                        </div>
                    </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar-v flex items-center justify-center">
                <div className="text-slate-200 text-3xl md:text-5xl leading-[1.2] whitespace-pre-wrap font-black italic text-center max-w-4xl uppercase tracking-tighter">
                  {segment.content || "Standby for incoming transmission..."}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-8 md:px-12 pb-8 md:pb-12 shrink-0">
            <button
                onClick={onClose}
                className={`w-full ${segment.id === 'thanks' ? 'bg-red-950/40 border-red-500/50 text-red-400 hover:bg-red-900/60' : 'bg-cyan-300/10 border-cyan-300/60 text-cyan-100 hover:bg-cyan-300/20'} font-black py-6 rounded-lg border transition-all active:scale-[0.98] flex items-center justify-center gap-6 group text-xl md:text-2xl uppercase tracking-widest`}
            >
                <span>{segment.id === 'thanks' ? 'Terminate Session' : 'Acknowledge & Continue'}</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-3xl"
                >→</motion.span>
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
