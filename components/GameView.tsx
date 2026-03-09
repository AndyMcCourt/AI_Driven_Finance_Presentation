import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEGMENTS, MISSION_CONFIG } from '../constants';
import { PresentationSegment, MissionState } from '../types';
import PresentationModal from './PresentationModal';

const ACTIVATION_RADIUS = 300;
const NEXT_NODE_ORBIT_RADIUS_X = 560;
const NEXT_NODE_ORBIT_RADIUS_Y = 280;
const SWARM_RADIUS_X = 760;
const SWARM_RADIUS_Y = 460;

const PSEUDO_NODE_LABELS = [
  'Context Mesh',
  'Variance Beacon',
  'Ledger Twin',
  'Policy Thread',
  'Signal Drift',
  'Insight Pulse',
  'Trust Vector',
  'Forecast Echo',
  'Control Loop',
  'Margin Stream',
  'Audit Orbit',
  'Ops Hologram',
];

const GameView: React.FC = () => {
  const [segments, setSegments] = useState<PresentationSegment[]>(SEGMENTS);
  const [missionState, setMissionState] = useState<MissionState>({
    dataIntegrity: MISSION_CONFIG.INITIAL_INTEGRITY,
    aiReadiness: MISSION_CONFIG.INITIAL_READINESS,
    efficiency: MISSION_CONFIG.INITIAL_EFFICIENCY,
  });
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null);
  const [isMissionComplete, setIsMissionComplete] = useState(false);
  const [isDraggingOverCenter, setIsDraggingOverCenter] = useState(false);

  const nextAvailableSegment = segments.find((segment) => segment.status === 'available') ?? null;
  const nextAvailableIndex = segments.findIndex((segment) => segment.status === 'available');

  const nextNodePosition = useMemo(() => {
    if (nextAvailableIndex < 0) return null;

    const startsOnRight = nextAvailableIndex % 2 === 0;
    const side = startsOnRight ? 1 : -1;
    const cycle = Math.floor(nextAvailableIndex / 2);
    const horizontalBias = [0.96, 0.88, 0.93, 0.84, 0.91, 0.87];
    const verticalBias = [-0.46, -0.24, 0.12, 0.35, -0.31, 0.22, 0.44];

    return {
      x: side * NEXT_NODE_ORBIT_RADIUS_X * horizontalBias[cycle % horizontalBias.length],
      y: NEXT_NODE_ORBIT_RADIUS_Y * verticalBias[(cycle + (startsOnRight ? 0 : 2)) % verticalBias.length],
    };
  }, [nextAvailableIndex]);

  const swarmNodes = useMemo(
    () =>
      [
        ...PSEUDO_NODE_LABELS.map((label, index) => ({ id: `pseudo-${index}`, label, isReal: false })),
        ...segments
          .filter((segment) => segment.id !== nextAvailableSegment?.id)
          .map((segment) => ({ id: segment.id, label: segment.title, isReal: true, status: segment.status })),
      ].map((node, index, allNodes) => {
        const totalNodes = allNodes.length;
        const angle = (index / totalNodes) * Math.PI * 2;
        const xSpread = SWARM_RADIUS_X - (index % 5) * 58;
        const ySpread = SWARM_RADIUS_Y - (index % 4) * 52;
        const randomDirectionAngle = ((index * 47) % 360) * (Math.PI / 180);
        const randomDriftMagnitude = 38 + ((index * 19) % 5) * 12;

        return {
          ...node,
          xOffset: Math.cos(angle) * xSpread + Math.sin(index * 1.8) * 44,
          yOffset: Math.sin(angle) * ySpread + Math.cos(index * 1.4) * 38,
          driftX: Math.cos(randomDirectionAngle) * randomDriftMagnitude,
          driftY: Math.sin(randomDirectionAngle) * randomDriftMagnitude,
          duration: 9 + (index % 5) * 1.5,
        };
      }),
    [nextAvailableSegment?.id, segments],
  );

  const getDistanceFromCenter = (x: number, y: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    return Math.hypot(x - centerX, y - centerY);
  };

  const handleDrag = (_event: unknown, info: any) => {
    const distance = getDistanceFromCenter(info.point.x, info.point.y);
    setIsDraggingOverCenter(distance < ACTIVATION_RADIUS);
  };

  const handleDragEnd = (_event: unknown, info: any, segment: PresentationSegment) => {
    setIsDraggingOverCenter(false);
    const distance = getDistanceFromCenter(info.point.x, info.point.y);

    if (distance < ACTIVATION_RADIUS && segment.status !== 'locked') {
      setActiveSegmentId(segment.id);
    }
  };

  const closeSegment = () => {
    const currentId = activeSegmentId;
    setActiveSegmentId(null);

    if (!currentId) return;

    setSegments((prev) => {
      const index = prev.findIndex((s) => s.id === currentId);
      const next = [...prev];
      next[index].status = 'completed';

      if (index + 1 < next.length) {
        next[index + 1].status = 'available';
      } else if (currentId === 'thanks') {
        setIsMissionComplete(true);
      }

      return next;
    });

    setMissionState((prev) => ({
      dataIntegrity: Math.min(100, prev.dataIntegrity + 5),
      aiReadiness: Math.min(100, prev.aiReadiness + 20),
      efficiency: Math.min(100, prev.efficiency + 15),
    }));
  };

  const activeSegment = segments.find((s) => s.id === activeSegmentId);

  return (
    <div className="w-full h-full bg-[#020617] text-cyan-200 font-mono relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(34,211,238,0.16), transparent 60%)' }} />
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 }}
            animate={{ y: [null, `${Math.random() * 100}%`], opacity: [0.05, 0.3, 0.05] }}
            transition={{ duration: 14 + Math.random() * 12, repeat: Infinity, ease: 'linear' }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
        ))}
      </div>

      <header className="h-16 border-b border-cyan-400/20 bg-slate-900/35 backdrop-blur-xl flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-cyan-400/20 border border-cyan-300/50 flex items-center justify-center shadow-[0_0_18px_rgba(34,211,238,0.4)]">
            <span className="text-cyan-200 font-black tracking-tight">AI</span>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight uppercase">Finance Operations Console</h1>
            <p className="text-[10px] text-cyan-400/70 font-bold tracking-wider">M&amp;S DIGITAL TRANSFORMATION</p>
          </div>
        </div>

        <div className="flex gap-6 scale-90 origin-right">
          <StatBox label="DATA INTEGRITY" value={missionState.dataIntegrity} color="cyan" />
          <StatBox label="AI READINESS" value={missionState.aiReadiness} color="emerald" />
          <StatBox label="EFFICIENCY" value={missionState.efficiency} color="violet" />
        </div>
      </header>

      <main className="flex-1 relative flex">
        

        <section className="relative flex-1 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M88,50 C74,50 63,50 50,50" stroke="rgba(34,211,238,0.5)" strokeWidth="0.4" fill="none" strokeDasharray="2 2" />
            <path d="M88,38 C73,45 62,49 50,50" stroke="rgba(125,211,252,0.4)" strokeWidth="0.3" fill="none" />
            <path d="M88,62 C73,55 62,51 50,50" stroke="rgba(125,211,252,0.4)" strokeWidth="0.3" fill="none" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="w-[460px] h-[460px] rounded-full border border-cyan-300/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[360px] h-[360px] rounded-full border border-cyan-300/30"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: isDraggingOverCenter ? 1.06 : 1, opacity: isDraggingOverCenter ? 1 : 0.75 }}
              className="w-[520px] h-[520px] rounded-full border-2 border-cyan-200/55 bg-cyan-400/10 backdrop-blur-sm shadow-[0_0_140px_rgba(34,211,238,0.24)] relative"
            >
              <motion.div
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.96, 1, 0.96] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-4 rounded-full border border-cyan-100/50"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
                className="absolute inset-10 rounded-full border border-dashed border-cyan-100/40"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-8">
                <div className={`text-[11px] font-black uppercase tracking-[0.4em] mb-3 px-3 py-1 rounded-full border transition-colors ${isDraggingOverCenter ? 'text-cyan-50 bg-cyan-200/20 border-cyan-100/70' : 'text-cyan-100 bg-cyan-500/10 border-cyan-200/35'}`}>
                  {isDraggingOverCenter ? 'Release to Sync' : 'Activation Zone'}
                </div>
                <div className={`w-32 h-[3px] mb-6 rounded-full transition-all ${isDraggingOverCenter ? 'bg-cyan-100 shadow-[0_0_20px_rgba(125,211,252,0.95)]' : 'bg-cyan-100/55'}`} />
                <div className={`text-[10px] max-w-[240px] uppercase leading-relaxed font-bold tracking-[0.22em] transition-colors ${isDraggingOverCenter ? 'text-cyan-50' : 'text-cyan-100/80'}`}>
                  Drop node inside this circle to launch the synchronized briefing overlay.
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {isDraggingOverCenter && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.25 }}
                  className="absolute inset-0 bg-cyan-300/20 rounded-full blur-[110px]"
                />
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 pointer-events-none z-[5]">
            {swarmNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ x: node.xOffset, y: node.yOffset }}
                animate={{
                  x: [node.xOffset - node.driftX, node.xOffset + node.driftX, node.xOffset - node.driftX],
                  y: [node.yOffset - node.driftY, node.yOffset + node.driftY, node.yOffset - node.driftY],
                  opacity: [0.22, 0.45, 0.22],
                }}
                transition={{ duration: node.duration, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2"
              >
                <div className="relative w-64 h-36 rounded-xl border border-cyan-200/30 overflow-hidden backdrop-blur-md bg-slate-900/55 shadow-[0_0_30px_rgba(34,211,238,0.2)] px-4 py-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-3xl drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]">{node.isReal ? '◈' : '◇'}</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-200/80 shadow-[0_0_12px_rgba(165,243,252,0.7)]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.15em] truncate mb-2 text-cyan-100/75">{node.label}</div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-cyan-300/25">
                      <div className="h-full bg-cyan-300/35" style={{ width: node.isReal && node.status === 'completed' ? '100%' : '34%' }} />
                    </div>
                    {node.isReal && (
                      <div className="mt-1 text-[8px] uppercase tracking-[0.18em] text-cyan-200/55">{node.status === 'completed' ? 'Synced' : 'Queued'}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {nextAvailableSegment && nextNodePosition && (
            <div
              className="absolute flex flex-col gap-6 z-20 pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${nextNodePosition.x}px), calc(-50% + ${nextNodePosition.y}px))`,
              }}
            >
              <div className="text-[10px] font-black text-cyan-200/80 uppercase tracking-[0.25em] text-center border-b border-cyan-300/40 pb-2">Next Activation Node</div>
              <motion.div
                key={nextAvailableSegment.id}
                drag
                dragSnapToOrigin
                onDrag={handleDrag}
                onDragEnd={(e, info) => handleDragEnd(e, info, nextAvailableSegment)}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                whileDrag={{ scale: 1.12, zIndex: 100 }}
                initial={{ scale: 0.7, x: -nextNodePosition.x, y: -nextNodePosition.y }}
                animate={{ scale: [1, 1.04, 1], x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut', scale: { duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 } }}
                className="relative w-64 h-36 rounded-xl border border-cyan-200/70 cursor-grab active:cursor-grabbing overflow-hidden group backdrop-blur-md bg-slate-900/80 shadow-[0_0_40px_rgba(34,211,238,0.38)] pointer-events-auto"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl border border-cyan-200/40"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.1, 0.45] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">{nextAvailableSegment.icon}</span>
                    <div className="w-3 h-3 rounded-full bg-cyan-200 animate-pulse shadow-[0_0_16px_rgba(165,243,252,0.9)]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.15em] truncate mb-2 text-cyan-100">{nextAvailableSegment.title}</div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-cyan-300/35">
                      <motion.div initial={{ width: 0 }} animate={{ width: '34%' }} className="h-full bg-cyan-300/60" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/20 via-transparent to-cyan-300/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div animate={{ y: ['-100%', '180%'] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }} className="absolute inset-x-0 h-[2px] bg-cyan-300/25" />
              </motion.div>
            </div>
          )}
        </section>

        <aside className="w-72 border-l border-cyan-400/15 bg-slate-900/20 backdrop-blur-md p-5 flex flex-col gap-5">
          <div className="p-3 border border-cyan-400/20 rounded-lg bg-slate-950/40">
            <h3 className="text-xs font-black mb-4 flex items-center gap-2 text-cyan-200/90">
              <span className="w-2 h-2 bg-cyan-300 rounded-full animate-ping" />
              CURRENT OBJECTIVE
            </h3>
            <p className="text-[13px] text-cyan-50/80 leading-relaxed">Analyze all strategic sectors to synchronize the AI-Driven Finance roadmap for FY27.</p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-xs font-black text-cyan-300/70 tracking-widest">SECTOR STATUS</h3>
            {segments.map((s) => (
              <div key={s.id} className="flex items-center justify-between text-[10px] border-b border-cyan-400/10 pb-2">
                <span className="uppercase text-cyan-100/85">{s.title}</span>
                <span className={`font-bold ${s.status === 'completed' ? 'text-emerald-300' : s.status === 'available' ? 'text-cyan-300' : 'text-slate-500'}`}>
                  {s.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          <div className="h-32 border-t border-cyan-400/20 pt-4">
            <div className="text-[8px] text-cyan-300/60 mb-2 tracking-[0.25em]">ENCRYPTION LEVEL: AES-256-GCM</div>
            <div className="flex gap-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex-1 h-4 bg-cyan-300/10 rounded-sm overflow-hidden">
                  <motion.div animate={{ height: ['20%', '80%', '40%', '90%', '30%'] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} className="w-full bg-cyan-200/45" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer className="h-9 border-t border-cyan-400/20 bg-slate-900/35 backdrop-blur-xl flex items-center justify-between px-6 text-[10px] font-bold text-cyan-300/60">
        <div>SEAMLESS INTERFACE // ID: MCR-FIN-2026</div>
        <div className="flex gap-4">
          <span>LAT: 53.4808° N</span>
          <span>LON: 2.2426° W</span>
          <span className="text-cyan-200">CONNECTED</span>
        </div>
      </footer>

      <AnimatePresence>
        {activeSegment && <PresentationModal segment={activeSegment} onClose={closeSegment} />}
      </AnimatePresence>

      {isMissionComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-2xl flex flex-col items-center justify-center p-12 text-center">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-w-2xl rounded-2xl border border-cyan-300/35 bg-cyan-300/5 p-10 shadow-[0_0_120px_rgba(34,211,238,0.2)]">
            <h2 className="text-6xl font-black text-cyan-100 mb-6 tracking-tight uppercase">Mission Accomplished</h2>
            <p className="text-xl text-cyan-50/85 mb-12 leading-relaxed">The AI-Driven Finance roadmap has been successfully synchronized for this sector.</p>
            <button onClick={() => window.location.reload()} className="px-12 py-6 bg-cyan-300/20 hover:bg-cyan-300/35 text-cyan-100 font-black text-2xl rounded-xl transition-all border border-cyan-200/50 shadow-[0_0_50px_rgba(125,211,252,0.3)]">
              REBOOT SYSTEM
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const StatBox = ({ label, value, color }: { label: string; value: number; color: 'cyan' | 'emerald' | 'violet' }) => {
  const colors = {
    cyan: 'text-cyan-200 bg-cyan-300',
    emerald: 'text-emerald-200 bg-emerald-300',
    violet: 'text-violet-200 bg-violet-300',
  };

  return (
    <div className="w-40">
      <div className="flex justify-between text-[8px] font-black mb-1 tracking-wider">
        <span className="text-cyan-100/55">{label}</span>
        <span className={colors[color].split(' ')[0]}>{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-800/90 rounded-full overflow-hidden border border-cyan-300/20">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} className={`h-full ${colors[color].split(' ')[1]}`} />
      </div>
    </div>
  );
};

export default GameView;
