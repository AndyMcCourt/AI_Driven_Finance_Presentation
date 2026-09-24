import { PresentationSegment } from './types';

const engagementPollVisuals = [
  {
    id: 'engagement-poll-visual',
    label: 'Engagement Poll',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
    description: 'A pulse check on AI Champions engagement.',
  },
];

const hostingRotaVisuals = [
  {
    id: 'hosting-rota-visual',
    label: 'New Hosting Rota',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    description: 'Democratising AI Unite.',
  },
];

const bscSpotlightVisuals = [
  {
    id: 'bsc-ai-champions-visual',
    label: 'BSC AI Champions',
    image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&q=80&w=1200',
    description: 'Spotlight on BSC AI Champions.',
  },
];

const centralAiTeamVisuals = [
  {
    id: 'central-ai-team-visual',
    label: 'Central AI Team',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Central AI Team with guest speaker Xav Osei.',
  },
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'engagement-poll',
    title: 'Engagement Poll',
    strapline: 'A pulse check on AI Champions engagement.',
    content: 'A pulse check on AI Champions engagement.',
    bullets: [],
    visuals: engagementPollVisuals,
    icon: '📊',
    status: 'available',
    coordinates: { x: 20, y: 30 },
  },
  {
    id: 'new-hosting-rota',
    title: 'New Hosting Rota',
    strapline: 'Democratising AI Unite.',
    content: 'Democratising AI Unite.',
    bullets: [],
    visuals: hostingRotaVisuals,
    icon: '🗓️',
    status: 'locked',
    coordinates: { x: 35, y: 44 },
  },
  {
    id: 'bsc-ai-champions',
    title: 'Spotlight on BSC AI Champions',
    content: 'Spotlight on BSC AI Champions.',
    bullets: [],
    visuals: bscSpotlightVisuals,
    icon: '🌟',
    status: 'locked',
    coordinates: { x: 55, y: 58 },
  },
  {
    id: 'central-ai-team',
    title: 'Central AI Team',
    strapline: 'Guest speaker Xav Osei.',
    content: 'Central AI Team with guest speaker Xav Osei.',
    bullets: [],
    visuals: centralAiTeamVisuals,
    icon: '🎤',
    status: 'locked',
    coordinates: { x: 70, y: 42 },
  },
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20,
};
