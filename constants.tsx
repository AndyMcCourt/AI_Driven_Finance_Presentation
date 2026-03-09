import { PresentationSegment } from './types';

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'why',
    title: "Strategic Foundation",
    content: "AI is not coming. It’s here—and Finance is ready to lead.",
    bullets: [
      "We’ve already started: Our Half‑Year Finance Conference set the direction.",
      "Enterprise ≠ personal AI: Scaling AI safely requires strong governance and high-quality data.",
      "Part of the M&S roadmap: Core pillar of Digital Finance Transformation."
    ],
    icon: '🚀',
    status: 'available',
    coordinates: { x: 25, y: 30 }
  },
  {
    id: 'benefits',
    title: "Operational Efficiency",
    content: "Less grind. More insight. Stronger control.",
    bullets: [
      "Automate the back‑office: Tools like Xelix reducing errors and repetitive tasks.",
      "Accelerate reporting & insight: Smart narratives and AI-generated commentary.",
      "Build trust & control: Governed, auditable, and explainable AI outputs."
    ],
    icon: '⚡',
    status: 'locked',
    coordinates: { x: 50, y: 60 }
  },
  {
    id: 'deliverables',
    title: "FY27 Roadmap",
    content: "Clear deliverables you’ll notice this year.",
    bullets: [
      "Xelix full roll‑out: Moving from pilot to full deployment.",
      "Knowledge‑based agents: Role‑specific assistants for guidance and actions.",
      "Faster R&A delivery: Using Copilot Studio and reusable AI build patterns."
    ],
    icon: '📅',
    status: 'locked',
    coordinates: { x: 75, y: 30 }
  },
  {
    id: 'thanks',
    title: "Mission Complete",
    content: "Session Complete! Thank you for participating in today's AI Champions session.",
    icon: '🏁',
    status: 'locked',
    coordinates: { x: 50, y: 15 }
  }
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20,
};
