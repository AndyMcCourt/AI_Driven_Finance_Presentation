import { PresentationSegment } from './types';

const welcomeVisuals = [
  {
    id: 'ai-unite-welcome',
    label: 'Welcome',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Open AI Unite with energy, context, a quick team pulse and a preview of the two spotlight segments.',
    points: [
      'Welcome everyone to AI Unite.',
      'Check the room and team pulse.',
      'Preview the Bernie spotlight with Seb Bacon.',
      'Preview the Databricks AI spotlight and expected takeaways.'
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
    strapline: 'Opening AI Unite, checking the room and previewing the agenda.',
    content: 'Welcome everyone to AI Unite, take a quick team pulse, and give the room a clear breakdown of the two spotlight segments that follow.',
    bullets: [
      'Welcome the team to AI Unite and frame the purpose of the session.',
      'Check the team pulse, energy in the room and any immediate priorities.',
      'Segment 2: Spotlight on Bernie with Seb Bacon — story, context, key takeaways and team questions.',
      'Segment 3: Spotlight on Databricks AI — practical use cases, workflow opportunities and next steps to investigate.'
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
