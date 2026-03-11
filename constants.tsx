import { PresentationSegment } from './types';

const missionContextVisuals = [
  {
    id: 'context-everyday',
    label: 'AI is Everywhere',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    description:
    'AI is part of daily life — and Copilot Chat is already in our toolset',
    points: [
      'AI is already in everyday use — general‑purpose AI is now genuinely powerful.',
      'Copilot Chat is available to everyone and can deliver quick productivity wins.',
      'Many people use AI‑enabled features without realising.'
    ]
  },
  {
    id: 'context-complexity',
    label: 'Enterprise Rollout is Complex',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    description:
      'Scaling AI across a large organisation requires careful planning of many factors.',
    points: [
      'Governance Guardrails access controls, and clear standards before wider deployment',
  	  'Needs effective licensing and cost tracking',
  	  'Data readiness required to produce trustworthy outputs - Garbage In Garbage Out',
      'Balance short-term wins with a long-term strategy while the target keeps moving.'
    ]
  },
  {
    id: 'context-roadmap',
    label: 'Roadmap in Motion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'A tech-led roadmap is underway to standardise AI Implementations',
    points: [
      'BCG Prioritisation - Focus on high‑value, practical wins',
      'Finance use cases are being prioritised.',
	  'Some capabilities moving from ad‑hoc experimentation to controlled rollout',
    ]
  }
];

const missionObjectiveVisuals = [
  {
    id: 'objective-automation',
    label: 'Automate and Simplify',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description:
      'AI removes repetitive workload and simplifies end-to-end finance processes.',
    points: [
      'Automation of routine work.',
      'Simplification of end-to-end processes (agentic workflows).'
    ]
  },
  {
    id: 'objective-judgement',
    label: 'Strengthen Decision Quality',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    description:
      'AI helps finance teams reinforce judgement and influence outcomes earlier.',
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
    points: ['Manage risk.', 'Implement new policies.']
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
    description:
      'Capability is growing through teams, champions and practical knowledge sharing.',
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
    description:
      'FY27 focuses on scaling proven value and productionising what’s already working.',
    points: [
      'Roll out Xelix in all Business Units.',
      'Template and roll out proven pilots (e.g., trade note) where they add value.',
      'Focus on delivering use cases with the tools at hand (properly exploring the tools).'
    ]
  },
  {
    id: 'fy27-insight',
    label: 'Upgrade Insight for Partners',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description:
      'Improve speed and quality of insight through Copilot + Power BI and faster delivery of reporting.',
    points: [
      'Use smart narratives and/or Copilot in Power BI for better partner insight.',
      'Use Databricks AI and/or Copilot Studio to speed up delivery of insight and reporting.'
    ]
  },
  {
    id: 'fy27-enable-teams',
    label: 'Enable Every Team',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    description:
      'Equip teams to leverage AI day-to-day through Copilot 365, role-based agents and training—while building foundations.',
    points: [
      'Roll out Copilot 365 where available and support creation of role-based agents (docs, decks, policies).',
      'Train AI Champions beyond kick-off sessions to support their teams.',
      'Continue groundwork: data readiness (e.g., EDW to Beam), S4 delivery, governance and licences.'
    ]
  }
];

const finalMissionVisuals = [
  {
    id: 'final-reflect',
    label: 'Mission Recap',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    description: 'Pause to reflect on progress before ending the presentation.',
    points: [
      'What’s working is ready to be scaled.',
      'Teams are being enabled to leverage AI as part of everyday finance delivery.'
    ]
  }
];

export const SEGMENTS: PresentationSegment[] = [
  {
    id: 'why',
    title: 'Mission Context: What is AI Driven Finance?',
    strapline: 'AI is already in everyday use — scaling it well is the challenge.',
    content: 'Understanding the mission landscape before scaling execution.',
    bullets: [
      'AI is already in everyday use (often quietly in the background).',
      'Enterprise-scale rollout is complex: governance, tooling, licences, cost, data readiness and business priorities all matter.',
      'Balance short-term wins with a long-term strategy while the target keeps moving.',
      'A roadmap is being built to overcome those complexities.',
      'Finance use cases are being prioritised.'
    ],
    // Per discussion: remove/avoid the repeated “proactive business partner” summary here. [1](https://mnscorp-my.sharepoint.com/personal/ian_coldrake_mnscorp_net/Documents/Recordings/ICAM%20Monthly%20Catch%20Up-20260310_133803-Meeting%20Recording.mp4)
    summary: '',
    visuals: missionContextVisuals,
    icon: '🚀',
    status: 'available',
    coordinates: { x: 25, y: 30 }
  },
  {
    id: 'benefits',
    title: 'Mission Objective: Why do we need AI Driven Finance?',
    strapline: 'AI amplifies finance capability rather than replacing expertise.',
    content: 'AI helps finance teams automate, simplify and strengthen decision-making.',
    bullets: [
      'Automation of routine work.',
      'Simplification of end-to-end processes (agentic workflows).',
      'Reinforce finance judgements.',
      'Influence decisions earlier and anticipate performance.',
      'Manage risk.',
      'Implement new policies.'
    ],
    summary: 'Enabling finance to be a more proactive business partner to the business.',
    visuals: missionObjectiveVisuals,
    icon: '⚡',
    status: 'locked',
    coordinates: { x: 50, y: 60 }
  },
  {
    id: 'deliverables',
    title: 'Mission Update',
    strapline: "Great start — lots more to do.",
    content:
      'Strong momentum is visible across use case discovery, tooling and team enablement.',
    bullets: [
      '75 finance use cases identified.',
      'AI team established, supported by AI Champions.',
      'AI weekly trade note being trialled.',
      'Copilot in Power BI triallists.',
      'Xelix (Accounts Payable Automation) being trialled in TSE.',
      'Practical AI tools and tips shared in the Penny Bazaar.'
    ],
    summary: "Lots of great work — lots of opportunity.",
    visuals: missionUpdateVisuals,
    icon: '📡',
    status: 'locked',
    coordinates: { x: 75, y: 30 }
  },
  {
    id: 'thanks',
    title: 'FY27 Mission Objectives',
    strapline: 'Enabling the wider finance teams to leverage AI in their jobs.',
    content: 'FY27 converts pilots into scaled and sustainable finance outcomes.',
    bullets: [
      'Roll out Xelix in all Business Units.',
      'Template and roll out proven pilots (e.g., the trade note) where they add value.',
      'Focus on delivering use cases with the tools at hand (properly exploring the tools).',
      'Use smart narratives and/or Copilot in Power BI to improve insight for business partners.',
      'Use Databricks AI and/or Copilot Studio to speed up delivery of insight and reporting.',
      'Support role-based agents via Copilot 365 (documentation, presentations, policies).',
      'Train AI Champions beyond kick-off sessions to support their teams.',
      'Continue groundwork: data readiness (e.g., EDW to Beam), S4 delivery, governance and licences.'
    ],
    summary: 'Enabling teams to scale AI value with confidence.',
    visuals: fy27Visuals,
    icon: '🎯',
    status: 'locked',
    coordinates: { x: 50, y: 15 }
  },
  {
    id: 'final',
    title: 'Final Activation: End Presentation',
    strapline: 'Mission sequence complete. Ready to close out.',
    content: 'This final node formally ends the presentation flow.',
    bullets: ['Review complete mission outcomes.', 'Confirm readiness to close the presentation.'],
    summary: 'Presentation complete.',
    visuals: finalMissionVisuals,
    icon: '✅',
    status: 'locked',
    coordinates: { x: 50, y: 15 }
  }
];

export const MISSION_CONFIG = {
  INITIAL_INTEGRITY: 85,
  INITIAL_READINESS: 40,
  INITIAL_EFFICIENCY: 20
};
