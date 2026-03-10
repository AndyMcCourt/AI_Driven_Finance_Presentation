import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import GameView from './components/GameView';

const RED_SQUARE_ANIMATION_MS = 1800;
const LANDING_EXIT_DELAY_MS = 120;
const LANDING_EXIT_MS = 420;
const TOTAL_LAUNCH_MS = RED_SQUARE_ANIMATION_MS + LANDING_EXIT_DELAY_MS + LANDING_EXIT_MS;
const MNS_LOGO_SRC = `${import.meta.env.BASE_URL}Assets/MnS%20Square%20Snip.JPG`;
const RNA_LOGO_SRC = `${import.meta.env.BASE_URL}Assets/RnA%20Logo.png`;

type Rect = { top: number; left: number; width: number; height: number };

const LandingPage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [isLaunching, setIsLaunching] = useState(false);
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
  const aiDrivenCellRef = useRef<HTMLDivElement | null>(null);
  const hasStartedRef = useRef(false);
  const launchTimeoutRef = useRef<number | null>(null);

  const startApp = () => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    onStart();
  };

  useEffect(() => {
    return () => {
      if (launchTimeoutRef.current) {
        window.clearTimeout(launchTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLaunching) return;

    const readTargetRect = () => {
      const rect = aiDrivenCellRef.current?.getBoundingClientRect();
      if (!rect) return;

      setTargetRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    };

    readTargetRect();
    window.addEventListener('resize', readTargetRect);

    return () => {
      window.removeEventListener('resize', readTargetRect);
    };
  }, [isLaunching]);

  const handleLaunch = () => {
    if (isLaunching) return;

    setIsLaunching(true);

    launchTimeoutRef.current = window.setTimeout(() => {
      startApp();
    }, TOTAL_LAUNCH_MS);
  };

  return (
    <div className="relative w-screen h-screen bg-[#01030a] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4 flex items-start justify-between pointer-events-none">
        <img src={MNS_LOGO_SRC} alt="MnS Square Snip" className="h-16 w-auto object-contain" />
        <img src={RNA_LOGO_SRC} alt="RnA Logo" className="h-16 w-auto object-contain mix-blend-multiply" />
      </div>

      {isLaunching && targetRect && (
        <motion.div
          initial={{ top: 0, left: 0, width: '100vw', height: '100vh', opacity: 0.85 }}
          animate={{
            top: [0, targetRect.top],
            left: [0, targetRect.left],
            width: ['100vw', targetRect.width],
            height: ['100vh', targetRect.height],
            opacity: [0.9, 1, 1, 0],
            scale: [1, 1, 1.08],
          }}
          transition={{
            duration: RED_SQUARE_ANIMATION_MS / 1000,
            times: [0, 0.45, 0.72, 1],
            ease: ['easeInOut', 'easeInOut', 'easeIn'],
          }}
          className="pointer-events-none fixed z-40 border-4 border-red-500 shadow-[0_0_28px_rgba(239,68,68,0.95),inset_0_0_24px_rgba(239,68,68,0.65)]"
        />
      )}

      <motion.div
        animate={
          isLaunching
            ? {
                opacity: [1, 1, 0],
                scale: [1, 1.01, 0.94],
                filter: ['brightness(1)', 'brightness(1.25) contrast(1.2)', 'brightness(0.3) blur(10px)'],
                clipPath: [
                  'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  'polygon(0 0, 100% 3%, 100% 97%, 0 100%)',
                  'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
                ],
              }
            : undefined
        }
        transition={{
          duration: LANDING_EXIT_MS / 1000,
          delay: (RED_SQUARE_ANIMATION_MS + LANDING_EXIT_DELAY_MS) / 1000,
          times: [0, 0.55, 1],
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-cyan-400/25 bg-slate-950/85 shadow-[0_0_90px_rgba(8,145,178,0.25)] p-8 md:p-10 text-cyan-50 mt-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-cyan-300/80">Welcome</p>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">AI Driven Finance</h1>
          </div>
          <div className="h-16 w-28 rounded-lg border border-cyan-200/40 bg-white text-[#112f38] flex items-center justify-center text-3xl font-black tracking-tight shadow-md">
            M&amp;S
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-cyan-500/30 mb-8 bg-[#0b1f29]">
          <div className="bg-[#007983] px-4 py-2.5 flex items-center gap-3">
            <div className="w-9 h-7 rounded-sm border border-cyan-100/60 flex items-center justify-center text-cyan-100">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="12" rx="1.5" />
                <path d="M8 20h8M12 16v4M7 8l3 3 2-2 2 2 3-3" />
              </svg>
            </div>
            <span className="text-xl font-medium">Digital Finance Transformation</span>
          </div>
          <div className="grid grid-cols-3 text-center text-[#12343f] text-sm relative">
            <div className="bg-[#bdd3da] py-2.5 border-r border-white/35">Fix the Foundations</div>
            <div className="bg-[#bdd3da] py-2.5 border-r border-white/35">NextGen Finance Systems</div>
            <div ref={aiDrivenCellRef} className="bg-[#c7dde3] py-2.5 font-medium relative">
              AI Driven Finance
            </div>
          </div>
        </div>

        <button
          onClick={handleLaunch}
          disabled={isLaunching}
          className="w-full sm:w-auto px-8 py-3 rounded-md bg-cyan-400 text-slate-950 font-bold tracking-wide hover:bg-cyan-300 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Launch
        </button>
      </motion.div>
    </div>
  );
};

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <LandingPage onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="w-screen h-screen bg-[#01030a] flex flex-col items-center justify-center overflow-hidden">
      <GameView />
    </div>
  );
}

export default App;
