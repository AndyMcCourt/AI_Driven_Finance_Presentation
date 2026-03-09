import React, { useState } from 'react';
import { motion } from 'motion/react';
import GameView from './components/GameView';

const LAUNCH_ANIMATION_MS = 1400;

const LandingPage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    if (isLaunching) return;

    setIsLaunching(true);
    window.setTimeout(() => {
      onStart();
    }, LAUNCH_ANIMATION_MS);
  };

  return (
    <div className="w-screen h-screen bg-[#01030a] flex items-center justify-center px-6">
      <div className="w-full max-w-3xl rounded-2xl border border-cyan-400/25 bg-slate-950/85 shadow-[0_0_90px_rgba(8,145,178,0.25)] p-8 md:p-10 text-cyan-50">
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
            <div className="bg-[#c7dde3] py-2.5 font-medium relative">AI Driven Finance</div>

            {isLaunching && (
              <motion.div
                initial={{ y: -82, scale: 0.8, opacity: 1 }}
                animate={{ y: [0, 0], scale: [1, 1, 8], opacity: [1, 1, 0] }}
                transition={{ duration: LAUNCH_ANIMATION_MS / 1000, times: [0, 0.45, 1], ease: 'easeInOut' }}
                className="pointer-events-none absolute right-[1.1%] top-[10%] h-[80%] w-[31.8%] border-4 border-red-500 shadow-[0_0_24px_rgba(239,68,68,0.9)]"
              />
            )}
          </div>
        </div>

        <button
          onClick={handleLaunch}
          disabled={isLaunching}
          className="w-full sm:w-auto px-8 py-3 rounded-md bg-cyan-400 text-slate-950 font-bold tracking-wide hover:bg-cyan-300 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Launch
        </button>
      </div>
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
