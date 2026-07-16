import { PresentationSegment } from './types';

const welcomeVisuals = [
  {
    id: 'ai-unite-welcome',
    label: 'Welcome',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Open AI Unite with a short welcome and clear agenda for the remaining session segments.',
    points: [
      'Spotlight from PwC: AI and the future of performance management.',
      'The Very Hungry Context: GitHub Copilot and AI Tokenomics.',
      'Pulse Poll, Open Support Forum and Close.'
    ]
  }
];

const pwcSpotlightVisuals = [
  {
    id: 'pwc-performance-management-visual',
    label: 'PwC Spotlight',
    image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&q=80&w=1200',
    description: 'Spotlight from PwC on AI and the future of performance management.',
    points: [
      'PwC perspective on AI in performance management.',
      'What may change in planning, insight and decision support.',
      'Implications for finance teams and ways of working.'
    ]
  }
];

const hungryContextVisuals = [
  {
    id: 'very-hungry-context-visual',
    label: 'The Very Hungry Context',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200',
    description: 'Spotlight from Pete Collinson and Alex Williams on GitHub Copilot and AI Tokenomics.',
    points: [
      'GitHub Copilot in practice.',
      'AI Tokenomics and the economics of context.',
      'Why context is hungry and how to feed it well.'
    ]
  }
];

const pulseVisuals = [
  {
    id: 'pulse-polls-visual',
    label: 'Pulse Polls',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
    description: 'Create space to go through the Pulse poll and discuss the signals coming back from the room.',
    points: [
      'Walk through the poll responses.',
      'Highlight themes, surprises and areas of alignment.',
      'Use the results to shape discussion for the rest of the session.'
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
    label: 'Close',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1200',
    description: 'Close AI Unite with a simple wrap-up.',
    points: [
      'Thank everyone for joining.',
      'Confirm follow-ups and next session details.'
    ]
  }
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    strapline: 'Agenda for the rest of the session.',
    content: 'Welcome everyone to AI Unite. Here is the agenda for the remaining segments:',
    bullets: [
      'Spotlight from PwC: AI and the future of performance management.',
      'The Very Hungry Context: GitHub Copilot and AI Tokenomics.',
      'Pulse Poll: review responses and discussion signals.',
      'Open Support Forum: questions, support needs and shared problem solving.',
      'Close: wrap-up, follow-ups and next steps.'
    ],
    visuals: welcomeVisuals,
    icon: '👋',
    status: 'available',
    coordinates: { x: 20, y: 30 }
  },
  {
    id: 'pwc-performance-management',
    title: 'Spotlight from PwC',
    strapline: 'AI on the future of performance management.',
    content: 'Realising Value in the Future of Finance',
    bullets: [
      'CEO Survey',
      'The role of Finance',
      'Changes in Economics'
    ],
    visuals: pwcSpotlightVisuals,
    icon: '📈',
    status: 'locked',
    coordinates: { x: 35, y: 44 }
  },
  {
    id: 'very-hungry-context',
    title: 'The Very Hungry Context',
    strapline: 'GitHub Copilot and AI Tokenomics.',
    content: 'GitHub Copilot and AI Tokenomics',
    bullets: [
      'Alex Williams & Pete Collinson',
      'Cost Observations from AI Token usage',
      'Developer observations from GitHub Copilot Usage'
    ],
    visuals: hungryContextVisuals,
    icon: '🍽️',
    status: 'locked',
    coordinates: { x: 55, y: 58 }
  },
  {
    id: 'pulse-poll',
    title: 'Pulse Poll',
    strapline: 'Go through the poll.',
    content: 'Review the Pulse poll results with the team and use them to guide the discussion.',
    bullets: [
      'Walk through the poll responses.',
      'Call out the strongest themes and any surprises.',
      'Capture discussion points to carry into the support forum.'
    ],
    visuals: pulseVisuals,
    icon: '📊',
    status: 'locked',
    coordinates: { x: 70, y: 42 }
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
    id: 'close',
    title: 'Close',
    strapline: 'Wrap up and next steps.',
    content: 'Close out the session with thanks, follow-ups and next steps.',
    bullets: [
      'Thank everyone for joining.',
      'Confirm follow-ups from the support forum.',
      'Share any next session details.'
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
