import { PresentationSegment } from './types';

const missionContextVisuals = [
  {
    id: 'context-adoption',
    label: 'AI Adoption Reality',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    description: 'AI is already present in daily finance workflows, often quietly in the background.',
    points: [
      'Everyone uses AI (whether you know it or not).',
      'AI is not coming; it is here.'
    ]
  },
  {
    id: 'context-complexity',
    label: 'Enterprise Complexity',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    description: 'Scaling AI in large organisations means balancing constraints while still delivering value quickly.',
    points: [
      'Governance, tooling, licences, cost, data readiness and business priorities all matter.',
      'Balance short-term wins with a long-term strategy while the target keeps moving.'
    ]
  },
  {
    id: 'context-roadmap',
    label: 'Roadmap in Motion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description: 'The technology-led roadmap is progressing with finance use cases now being prioritised.',
    points: [
      'Tech-led AI roadmap in motion.',
      'Finance use cases prioritised.'
    ]
  }
];

const missionObjectiveVisuals = [
  {
    id: 'objective-automation',
    label: 'Automate and Simplify',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'AI removes repetitive workload and simplifies end-to-end finance processes.',
    points: [
      'Automation of routine work.',
      'Simplification of end to end processes (agentic workflows).'
    ]
  },
  {
    id: 'objective-judgement',
    label: 'Strengthen Decision Quality',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    description: 'AI helps finance teams make stronger judgements and influence outcomes earlier.',
    points: [
      'Reinforce finance judgements.',
      'Influence decisions earlier and anticipate performance.'
    ]
  },
  {
    id: 'objective-risk',
    label: 'Risk and Policy Enablement',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    description: 'AI supports risk controls and smoother rollout of new policies.',
    points: [
      'Manage risk.',
      'Implement new policies.'
    ]
  }
];

const missionUpdateVisuals = [
  {
    id: 'update-use-cases',
    label: 'Use Case Pipeline',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200',
    description: 'Momentum is real with a wide funnel of identified opportunities.',
    points: ['75 finance use cases identified.']
  },
  {
    id: 'update-community',
    label: 'People and Community',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    description: 'Capability is growing through teams, champions and practical knowledge sharing.',
    points: [
      'AI team established, supported by AI Champions.',
      'Practical AI tools and tips shared in the Penny Bazaar.'
    ]
  },
  {
    id: 'update-trials',
    label: 'Live Trials',
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80&w=1200',
    description: 'Pilots are running across insight, communication and automation.',
    points: [
      'AI weekly trade note being trialled.',
      'Copilot in Power BI triallists.',
      'Xelix (Accounts Payable Automation) being trialled in TSE.'
    ]
  }
];

const fy27Visuals = [
  {
    id: 'fy27-scale',
    label: 'Scale What Works',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    description: 'FY27 focuses on scaling proven value across the full finance organisation.',
    points: [
      'Roll out Xelix in all Business Units.',
      'Deliver 5 finance AI use cases with the right tools.'
    ]
  },
  {
    id: 'fy27-insight',
    label: 'Upgrade Insight for Partners',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description: 'Improve speed and quality of business insight through embedded AI support.',
    points: [
      'Use smart narratives and/or Copilot in Power BI for better partner insight.',
      'Speed up R&A dev projects by launching Copilot Studio.'
    ]
  },
  {
    id: 'fy27-enable-teams',
    label: 'Enable Every Team',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    description: 'Equip finance teams with role-based agents while continuing long-term foundations.',
    points: [
      'Support role-based agents for documentation, presentations and policies.',
      'Continue building groundwork for the strategic roadmap.'
    ]
  }
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'why',
    title: 'Mission Context: What is AI Driven Finance?',
    strapline: 'AI is not coming, it is here!',
    content: 'Understanding the mission landscape before scaling execution.',
    bullets: [
      'Everyone uses AI (Whether you know it or not).',
      'AI in large organisations is hard and must account for governance, tooling, licences, cost, data readiness and business priorities.',
      'Balance short term wins versus long term AI strategy while trying to hit a moving target.',
      'Tech-led AI roadmap in motion.',
      'Finance use cases prioritised.'
    ],
    summary: 'Enables Finance to be a proactive Business Partner.',
    visuals: missionContextVisuals,
    icon: '🚀',
    status: 'available',
    coordinates: { x: 25, y: 30 }
  },
  {
    id: 'benefits',
    title: 'Mission Objective: Why do we need AI Driven Finance?',
    strapline: 'It does not replace us, it enables us to do our jobs better!',
    content: 'AI amplifies finance capability rather than replacing expertise.',
    bullets: [
      'Automation of routine work.',
      'Simplification of end to end processes (Agentic).',
      'Reinforce finance judgements.',
      'Manage risk.',
      'Implement new policies.',
      'Influence decisions earlier and anticipate performance.'
    ],
    summary: 'Enables Finance to be a proactive Business Partner.',
    visuals: missionObjectiveVisuals,
    icon: '⚡',
    status: 'locked',
    coordinates: { x: 50, y: 60 }
  },
  {
    id: 'deliverables',
    title: 'Mission Update',
    strapline: 'It does not replace us, it enables us to do our jobs better!',
    content: 'Strong momentum is visible across use case discovery, tooling and team enablement.',
    bullets: [
      '75 Finance use cases identified.',
      'AI team established, supported by AI Champions.',
      'AI weekly trade note being trialled.',
      'Copilot in Power BI triallists.',
      'Xelix (Accounts Payable Automation) being trialled in TSE.',
      'Practical AI tools and tips being shared in the Penny Bazaar.'
    ],
    summary: "Lot's of great work, but lot's more opportunity!",
    visuals: missionUpdateVisuals,
    icon: '📡',
    status: 'locked',
    coordinates: { x: 75, y: 30 }
  },
  {
    id: 'thanks',
    title: 'FY27 Mission Objectives',
    strapline: 'Enabling the wider finance teams to realise AI value.',
    content: 'FY27 converts pilots into scaled and sustainable finance outcomes.',
    bullets: [
      'Roll-out Xelix in all Business Units.',
      'Deliver 5 Finance AI use cases (supported by the right tools).',
      'Smart Narratives and/or Copilot in Power BI to support better insight for business partners.',
      'Support role based agents to enable finance efficiency (documentation, presentations, policies, etc).',
      'Speed up R&A dev projects by launching Copilot Studio.',
      'Continue to develop the groundwork for the strategic roadmap.'
    ],
    summary: 'Enabling teams to scale AI value with confidence.',
    visuals: fy27Visuals,
    icon: '🎯',
    status: 'locked',
    coordinates: { x: 50, y: 15 }
  }
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20,
};
