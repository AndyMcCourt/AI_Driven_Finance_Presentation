
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEGMENTS, MISSION_CONFIG } from '../constants';
import { PresentationSegment, MissionState } from '../types';
import PresentationModal from './PresentationModal';

const GameView: React.FC = () => {
  const [segments, setSegments] = useState<PresentationSegment[]>(SEGMENTS);
  const [missionState, setMissionState] = useState<MissionState>({
    dataIntegrity: MISSION_CONFIG.INITIAL_INTEGRITY,
    aiReadiness: MISSION_CONFIG.INITIAL_READINESS,
    efficiency: MISSION_CONFIG.INITIAL_EFFICIENCY,
  });
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>(["SYSTEM INITIALIZED", "WAITING FOR COMMAND..."]);
  const [isMissionComplete, setIsMissionComplete] = useState(false);
  const [hoveredSegmentId, setHoveredSegmentId] = useState<string | null>(null);
  const [isDraggingOverCenter, setIsDraggingOverCenter] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [message, ...prev].slice(0, 10));
  };

  const handleDrag = (event: any, info: any) => {
    const x = info.point.x;
    const y = info.point.y;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    setIsDraggingOverCenter(distance < 300);
  };

  const handleDragEnd = (event: any, info: any, segment: PresentationSegment) => {
    setIsDraggingOverCenter(false);
    // Check if dropped in the center area
    // The center area is roughly between 30% and 70% of the screen width/height
    const x = info.point.x;
    const y = info.point.y;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

    if (distance < 300) {
      if (segment.status === 'locked') {
        addLog(`ACCESS DENIED: ${segment.title} IS LOCKED`);
      } else {
        setActiveSegmentId(segment.id);
        addLog(`DATA STREAM ACTIVATED: ${segment.title}`);
      }
    }
  };

  const closeSegment = () => {
    const currentId = activeSegmentId;
    setActiveSegmentId(null);
    
    if (currentId) {
      setSegments(prev => {
        const index = prev.findIndex(s => s.id === currentId);
        const next = [...prev];
        next[index].status = 'completed';
        
        // Unlock next segment
        if (index + 1 < next.length) {
          next[index + 1].status = 'available';
          addLog(`NEW SECTOR UNLOCKED: ${next[index + 1].title}`);
        } else if (currentId === 'thanks') {
          setIsMissionComplete(true);
        }
        return next;
      });

      // Update mission stats based on segment
      setMissionState(prev => ({
        dataIntegrity: Math.min(100, prev.dataIntegrity + 5),
        aiReadiness: Math.min(100, prev.aiReadiness + 20),
        efficiency: Math.min(100, prev.efficiency + 15),
      }));
    }
  };

  const activeSegment = segments.find(s => s.id === activeSegmentId);

  return (
    <div className="w-full h-full bg-slate-950 text-cyan-400 font-mono relative overflow-hidden flex flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, (Math.random() * 100) + "%"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
          />
        ))}
      </div>
      
      {/* Header */}
      <header className="h-20 border-b border-cyan-900/50 bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-8 z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-cyan-500 rounded-sm animate-pulse flex items-center justify-center">
            <span className="text-slate-950 font-black">AI</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase">Finance Mission Control</h1>
            <p className="text-[10px] text-cyan-700 font-bold">M&S DIGITAL TRANSFORMATION // SECTOR: MANCHESTER</p>
          </div>
        </div>
        
        <div className="flex gap-8">
          <StatBox label="DATA INTEGRITY" value={missionState.dataIntegrity} color="cyan" />
          <StatBox label="AI READINESS" value={missionState.aiReadiness} color="emerald" />
          <StatBox label="EFFICIENCY" value={missionState.efficiency} color="violet" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative flex">
        {/* Left Sidebar - Logs */}
        <aside className="w-64 border-r border-cyan-900/30 bg-slate-900/40 p-4 flex flex-col gap-4">
          <h2 className="text-xs font-black text-cyan-700 border-b border-cyan-900/30 pb-2">MISSION LOGS</h2>
          <div className="flex-1 overflow-hidden flex flex-col gap-2">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1 - (i * 0.1), x: 0 }}
                className="text-[10px] leading-tight"
              >
                <span className="text-cyan-800">[{new Date().toLocaleTimeString()}]</span> {log}
              </motion.div>
            ))}
          </div>
        </aside>

        {/* Central Activation Zone */}
        <section className="flex-1 relative overflow-hidden flex items-center justify-center">
          {/* Central Holographic Ring */}
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360, scale: isDraggingOverCenter ? 1.1 : 1 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 border-4 border-dashed rounded-full transition-colors duration-300 ${isDraggingOverCenter ? 'border-cyan-400' : 'border-cyan-500/30'}`}
            />
            <motion.div 
              animate={{ rotate: -360, scale: isDraggingOverCenter ? 1.05 : 1 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-8 border-2 rounded-full transition-colors duration-300 ${isDraggingOverCenter ? 'border-cyan-400/60' : 'border-cyan-500/20'}`}
            />
            <motion.div 
              animate={{ rotate: 180, scale: isDraggingOverCenter ? 1.2 : 1 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-16 border border-dotted rounded-full transition-colors duration-300 ${isDraggingOverCenter ? 'border-cyan-300/40' : 'border-cyan-500/10'}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <div className={`text-xs font-black uppercase tracking-[0.6em] mb-3 transition-colors ${isDraggingOverCenter ? 'text-cyan-400' : 'text-cyan-800'}`}>
                {isDraggingOverCenter ? 'Release to Sync' : 'Activation Zone'}
              </div>
              <div className={`w-24 h-1.5 mb-6 transition-colors ${isDraggingOverCenter ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'bg-cyan-500/30'}`} />
              <div className={`text-[10px] max-w-[180px] uppercase leading-relaxed font-bold transition-colors ${isDraggingOverCenter ? 'text-cyan-300' : 'text-cyan-900/60'}`}>
                {isDraggingOverCenter ? 'Ready for data stream' : 'Drag data nodes here to enlarge and synchronize'}
              </div>
            </div>
            
            {/* Visual feedback when dragging over */}
            <AnimatePresence>
              {isDraggingOverCenter && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[80px]"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Floating Data Nodes (The Draggable Previews) */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-10">
            <div className="text-xs font-black text-cyan-800 uppercase tracking-widest mb-4 text-right border-b border-cyan-900/30 pb-2">Strategic Data Nodes</div>
            {segments.map((s, i) => (
              <motion.div
                key={s.id}
                drag
                dragSnapToOrigin
                onDrag={handleDrag}
                onDragEnd={(e, info) => handleDragEnd(e, info, s)}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                whileDrag={{ scale: 1.15, zIndex: 100 }}
                className={`relative w-64 h-40 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all duration-500 overflow-hidden group
                  ${s.status === 'completed' ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]' : 
                    s.status === 'available' ? 'bg-slate-900 border-cyan-500/60 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 
                    'bg-slate-950 border-slate-800 opacity-20 cursor-not-allowed'}`}
              >
                {/* Preview Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{s.icon}</span>
                    <div className={`w-3 h-3 rounded-full shadow-lg ${s.status === 'completed' ? 'bg-emerald-500 shadow-emerald-500/50' : s.status === 'available' ? 'bg-cyan-500 animate-pulse shadow-cyan-500/50' : 'bg-slate-700'}`} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider truncate mb-2">{s.title}</div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/30">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: s.status === 'completed' ? '100%' : '0%' }}
                        className={`h-full ${s.status === 'completed' ? 'bg-emerald-500' : 'bg-cyan-500/20'} transition-all duration-1000`} 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                   <motion.div 
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1 bg-cyan-500/10"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Right Sidebar - Details */}
        <aside className="w-80 border-l border-cyan-900/30 bg-slate-900/40 p-6 flex flex-col gap-6">
          <div className="p-4 border border-cyan-900/50 rounded-lg bg-slate-950/50">
            <h3 className="text-xs font-black mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
              CURRENT OBJECTIVE
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Analyze all strategic sectors to synchronize the AI-Driven Finance roadmap for FY27.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
             <h3 className="text-xs font-black text-cyan-700">SECTOR STATUS</h3>
             {segments.map(s => (
               <div key={s.id} className="flex items-center justify-between text-[10px]">
                 <span className="uppercase">{s.title}</span>
                 <span className={`font-bold ${s.status === 'completed' ? 'text-emerald-500' : s.status === 'available' ? 'text-cyan-500' : 'text-slate-700'}`}>
                   {s.status.toUpperCase()}
                 </span>
               </div>
             ))}
          </div>

          <div className="h-32 border-t border-cyan-900/30 pt-4">
             <div className="text-[8px] text-cyan-900 mb-2">ENCRYPTION LEVEL: AES-256-GCM</div>
             <div className="flex gap-1">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i} className="flex-1 h-4 bg-cyan-900/20 rounded-sm overflow-hidden">
                    <motion.div 
                      animate={{ height: ['20%', '80%', '40%', '90%', '30%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="w-full bg-cyan-500/30"
                    />
                  </div>
                ))}
             </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="h-10 border-t border-cyan-900/50 bg-slate-900/80 flex items-center justify-between px-8 text-[10px] font-bold text-cyan-800">
        <div>SECURE TERMINAL // ID: MCR-FIN-2026</div>
        <div className="flex gap-4">
          <span>LAT: 53.4808° N</span>
          <span>LON: 2.2426° W</span>
          <span className="text-cyan-600">CONNECTED</span>
        </div>
      </footer>

      <AnimatePresence>
        {activeSegment && (
          <PresentationModal
            segment={activeSegment}
            onClose={closeSegment}
          />
        )}
      </AnimatePresence>

      {isMissionComplete && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-2xl"
          >
            <h2 className="text-6xl font-black text-cyan-400 mb-6 tracking-tighter uppercase">Mission Accomplished</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              The AI-Driven Finance roadmap has been successfully synchronized for the Manchester Sector. 
              Finance is now ready to lead the M&S Digital Transformation.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-2xl rounded-xl transition-all shadow-[0_0_50px_rgba(6,182,212,0.4)]"
            >
              REBOOT SYSTEM
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const StatBox = ({ label, value, color }: { label: string, value: number, color: 'cyan' | 'emerald' | 'violet' }) => {
  const colors = {
    cyan: 'text-cyan-400 bg-cyan-500',
    emerald: 'text-emerald-400 bg-emerald-500',
    violet: 'text-violet-400 bg-violet-500'
  };

  return (
    <div className="w-40">
      <div className="flex justify-between text-[8px] font-black mb-1">
        <span className="text-slate-500">{label}</span>
        <span className={colors[color].split(' ')[0]}>{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className={`h-full ${colors[color].split(' ')[1]}`}
        />
      </div>
    </div>
  );
};

export default GameView;
