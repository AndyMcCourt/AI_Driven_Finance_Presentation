import { PresentationSegment } from './types';

const welcomeVisuals = [
  {
    id: 'ai-unite-welcome',
    label: 'Welcome',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Open AI Unite with a short welcome, team pulse and guest introduction.',
    points: [
      'Welcome everyone to AI Unite.',
      'Check the team pulse.',
      'Introduce Oliver Healey from the AI adoption team.',
      'Drop-in sessions start next Thursday.',
      'Set up the spotlight segments.'
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


const supportForumVisuals = [
  {
    id: 'open-support-forum-visual',
    label: 'Open Support Forum',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    description: 'Open the floor for questions, ideas, support needs and shared problem solving across AI Unite.',
    points: [
      'Invite open questions from the room.',
      'Surface support needs, blockers and ideas.',
      'Agree owners for follow-ups where useful.'
    ]
  }
];

const thankYouVisuals = [
  {
    id: 'thank-you-visual',
    label: 'Thank You',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1200',
    description: 'Close AI Unite with a simple thank you.',
    points: [
      'Thank you.'
    ]
  }
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'welcome-and-pulse',
    title: 'Welcome and pulse',
    strapline: 'A quick welcome and team pulse.',
    content: 'Welcome everyone to AI Unite, take a quick team pulse, introduce Oliver Healey and flag drop-in sessions starting next Thursday.',
    bullets: [
      'Welcome the team.',
      'Check the room pulse.',
      'Joined by Oliver Healey from the AI adoption team.',
      'Drop-in sessions added from next Thursday.',
      'Set up Bernie and Databricks AI.'
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
  },
  {
    id: 'open-support-forum',
    title: 'Open Support Forum',
    strapline: 'An open space for support, questions and shared problem solving.',
    content: 'Open the floor for the team to raise questions, support needs, blockers and ideas that would benefit from group input.',
    bullets: [
      'Invite questions and reflections from the room.',
      'Discuss support needs, blockers and opportunities for collaboration.',
      'Capture follow-ups, owners and next steps where useful.'
    ],
    visuals: supportForumVisuals,
    icon: '💬',
    status: 'locked',
    coordinates: { x: 45, y: 78 }
  },
  {
    id: 'thank-you',
    title: 'Thank You',
    strapline: 'Thank you.',
    content: 'Thank you.',
    bullets: [
      'Thank you.'
    ],
    visuals: thankYouVisuals,
    icon: '🙏',
    status: 'locked',
    coordinates: { x: 70, y: 72 }
  }
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20
};
