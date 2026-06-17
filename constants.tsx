import { PresentationSegment } from './types';

const welcomeVisuals = [
  {
    id: 'ai-unite-welcome',
    label: 'Welcome',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Open AI Unite with energy, context and a quick team pulse.',
    points: [
      'Welcome everyone to AI Unite.',
      'Check the room and team pulse.',
      'Set the tone for the spotlight sessions.'
    ]
  }
];

const bernieVisuals = [
  {
    id: 'bernie-spotlight-visual',
    label: 'Bernie Spotlight',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    description: 'Frame the Bernie spotlight with Seb Bacon and the key takeaways for the room.',
    points: [
      'Introduce Bernie and Seb Bacon.',
      'Share context and points of interest.',
      'Capture questions and reactions.'
    ]
  }
];

const databricksAiVisuals = [
  {
    id: 'databricks-ai-visual',
    label: 'Databricks AI',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description: 'Explore Databricks AI opportunities, use cases and next steps for AI Unite.',
    points: [
      'Introduce the Databricks AI topic.',
      'Discuss practical use cases.',
      'Agree areas to investigate next.'
    ]
  }
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'welcome-and-pulse',
    title: 'Welcome and pulse',
    strapline: 'Opening AI Unite and checking the room.',
    content: 'Welcome everyone to AI Unite and take a quick team pulse before moving into the spotlights.',
    bullets: [
      'Welcome the team to AI Unite.',
      'Check the team pulse and energy in the room.',
      'Set the tone for the spotlight sessions.'
    ],
    visuals: welcomeVisuals,
    icon: '👋',
    status: 'available',
    coordinates: { x: 25, y: 30 }
  },
  {
    id: 'bernie-spotlight',
    title: 'Spotlight on... Bernie (Seb Bacon)',
    strapline: 'A focused team spotlight with Seb Bacon.',
    content: 'Put the spotlight on Bernie with Seb Bacon and give the team space to understand the story, context and takeaways.',
    bullets: [
      'Introduce Bernie and Seb Bacon.',
      'Share the key context and points of interest.',
      'Capture questions, reactions and follow-ups.'
    ],
    visuals: bernieVisuals,
    icon: '🔦',
    status: 'locked',
    coordinates: { x: 50, y: 60 }
  },
  {
    id: 'databricks-ai-spotlight',
    title: 'Spotlight on... Databricks AI',
    strapline: 'A practical look at Databricks AI.',
    content: 'Explore Databricks AI and what it could mean for AI Unite workflows, data products and analytics.',
    bullets: [
      'Introduce the Databricks AI topic.',
      'Discuss potential use cases for AI Unite.',
      'Agree any next steps or areas to investigate.'
    ],
    visuals: databricksAiVisuals,
    icon: '🤖',
    status: 'locked',
    coordinates: { x: 75, y: 30 }
  }
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20
};
