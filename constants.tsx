import { PresentationSegment } from './types';

const thanksVisuals = [
  {
    id: 'thanks-shout-outs',
    label: 'Team Shout-outs',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    description: 'Open the weekly wrap by recognising the people, partnerships and everyday moments that made the week better.',
    points: [
      'Celebrate individual and team thank yous.',
      'Recognise helpful handovers, support and collaboration.',
      'Call out the small wins that build team momentum.'
    ]
  },
  {
    id: 'thanks-successes',
    label: 'This Week’s Successes',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    description: 'Capture the achievements worth sharing across Finance R&A before moving into the discussion topics.',
    points: [
      'Highlight delivered work, milestones and fixes.',
      'Share outcomes that helped stakeholders make progress.',
      'Make success visible across the wider group.'
    ]
  },
  {
    id: 'thanks-momentum',
    label: 'Momentum Board',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Set a positive tone for the 12th June wrap by turning appreciation into energy for next week.',
    points: [
      'What should we keep doing?',
      'Where did teamwork make the difference?',
      'Which successes should be repeated or scaled?'
    ]
  }
];

const ianVisuals = [
  {
    id: 'ian-priorities',
    label: 'Priorities',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    description: 'A focused space for the current themes, priorities and messages Ian wants the team to hear.',
    points: [
      'Key business and finance themes for the week.',
      'Where attention should be focused next.',
      'Signals, risks or opportunities to keep watching.'
    ]
  },
  {
    id: 'ian-decisions',
    label: 'Decisions & Direction',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    description: 'Make the implications practical by linking the message to what teams should do differently.',
    points: [
      'Clarify asks and next steps.',
      'Connect leadership focus to team delivery.',
      'Invite questions where direction needs discussion.'
    ]
  },
  {
    id: 'ian-watchouts',
    label: 'Watch-outs',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    description: 'Surface anything that needs care, pace or extra communication during the coming week.',
    points: [
      'Dependencies that need unblocking.',
      'Stakeholder moments that need attention.',
      'Messages to cascade consistently.'
    ]
  }
];

const dataOpsVisuals = [
  {
    id: 'data-ops-intro',
    label: 'Meet the Team',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
    description: 'Put the spotlight on the Data Ops Team and welcome special guest Shravan into the weekly wrap.',
    points: [
      'Who the Data Ops Team are.',
      'How the team supports Finance R&A.',
      'The work Shravan wants to showcase.'
    ]
  },
  {
    id: 'data-ops-impact',
    label: 'What They Enable',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description: 'Connect data operations to the reliability, pace and confidence of reporting and analytics.',
    points: [
      'Keeping data moving and trusted.',
      'Improving reporting resilience and repeatability.',
      'Helping teams spend more time on insight.'
    ]
  },
  {
    id: 'data-ops-ask',
    label: 'How to Work With Us',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200',
    description: 'End the spotlight with practical guidance on engaging Data Ops effectively.',
    points: [
      'When to involve Data Ops early.',
      'What context makes requests easier to action.',
      'Questions for Shravan and the team.'
    ]
  }
];

const zamWeddingVisuals = [
  {
    id: 'zam-congratulations',
    label: 'Congratulations Zam',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200',
    description: 'Pause the wrap to wish Zam all the very best for his wedding and celebrate the happy occasion.',
    points: [
      'Send congratulations from the whole Finance R&A team.',
      'Wish Zam and his partner a brilliant wedding day.',
      'Celebrate the start of an exciting new chapter.'
    ]
  },
  {
    id: 'zam-best-wishes',
    label: 'Best Wishes',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200',
    description: 'Give everyone a moment to share messages, advice and good wishes before Zam heads off to celebrate.',
    points: [
      'Invite quick messages from the team.',
      'Share any wedding wisdom or light-hearted advice.',
      'Make sure Zam leaves with a proper send-off.'
    ]
  },
  {
    id: 'zam-send-off',
    label: 'Team Send-off',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
    description: 'Close the moment with warmth, applause and a big team cheer for the celebrations ahead.',
    points: [
      'Raise a virtual toast.',
      'Capture a screenshot or team photo moment if useful.',
      'One final: all the best, Zam!'
    ]
  }
];

const quizVisuals = [
  {
    id: 'quiz-rules',
    label: 'Rules of Play',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1200',
    description: 'Close with an interactive quiz that gives the wrap a fun, memorable finish.',
    points: [
      'Split into players or teams.',
      'Keep answers quick and encourage discussion.',
      'Celebrate the winner and the best wrong answer.'
    ]
  },
  {
    id: 'quiz-rounds',
    label: 'Rounds',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    description: 'Use rounds that can flex between Finance R&A knowledge, M&S facts and Data Ops spotlight takeaways.',
    points: [
      'Round 1: weekly wrap recap.',
      'Round 2: spotlight questions from Data Ops and Zam’s send-off.',
      'Round 3: quick-fire bonus points.'
    ]
  },
  {
    id: 'quiz-wrap',
    label: 'Final Scores',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1200',
    description: 'Bring the session to a close with scores, thanks and a clear handoff into next week.',
    points: [
      'Reveal the leaderboard.',
      'Thank Shravan, Zam and everyone who contributed.',
      'Confirm any follow-ups from the wrap.'
    ]
  }
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'thanks-successes',
    title: 'Thank yous and successes',
    strapline: 'Starting the 12th June wrap with appreciation and momentum.',
    content: 'Celebrate the people, teamwork and outcomes that made the week a success.',
    bullets: [
      'Thank yous and shout-outs from across Finance R&A.',
      'Successes, milestones and moments worth sharing.',
      'Positive momentum to carry into next week.'
    ],
    summary: 'Recognition first: make great work visible.',
    visuals: thanksVisuals,
    icon: '👏',
    status: 'available',
    coordinates: { x: 25, y: 30 }
  },
  {
    id: 'ians-mind',
    title: "What’s on Ian’s mind",
    strapline: 'The leadership focus, watch-outs and key messages for the week.',
    content: 'A dedicated discussion slot for Ian’s current priorities and reflections.',
    bullets: [
      'Current priorities and themes.',
      'Decisions, asks and direction for the team.',
      'Watch-outs, dependencies and questions to surface.'
    ],
    summary: 'Turn leadership focus into clear team action.',
    visuals: ianVisuals,
    icon: '💭',
    status: 'locked',
    coordinates: { x: 50, y: 60 }
  },
  {
    id: 'data-ops-spotlight',
    title: 'Spotlight on... The Data Ops Team',
    strapline: 'With special guest Shravan.',
    content: 'A team spotlight to understand what Data Ops enables and how Finance R&A can work with them.',
    bullets: [
      'Meet the Data Ops Team with special guest Shravan.',
      'Understand the team’s role in reliable data, reporting and analytics.',
      'Discuss how to engage Data Ops well and where they can help.'
    ],
    summary: 'A practical spotlight on the team behind trusted data operations.',
    visuals: dataOpsVisuals,
    icon: '🔦',
    status: 'locked',
    coordinates: { x: 75, y: 30 }
  },
  {
    id: 'zam-wedding',
    title: 'A special mention',
    strapline: 'A team send-off before the big day.',
    content: 'A warm moment to wish Zam and his partner all the very best for their wedding.',
    bullets: [
      'Congratulate Zam from the Finance R&A team.',
      'Share best wishes, messages and any light-hearted wedding advice.',
      'Send Zam off with a proper team cheer.'
    ],
    summary: 'Congratulations and all the best, Zam!',
    visuals: zamWeddingVisuals,
    icon: '💍',
    status: 'locked',
    coordinates: { x: 70, y: 55 }
  },
  {
    id: 'quiz',
    title: 'A quiz',
    strapline: 'Finish with a fast, fun check-in on the week.',
    content: 'An interactive quiz to recap the wrap, reinforce key points and end the session with energy.',
    bullets: [
      'Explain the rules and teams.',
      'Run recap, Data Ops and quick-fire rounds.',
      'Share final scores, thank everyone and close the wrap.'
    ],
    summary: 'Weekly wrap complete — thanks everyone.',
    visuals: quizVisuals,
    icon: '❓',
    status: 'locked',
    coordinates: { x: 50, y: 15 }
  }
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20
};
