
export interface SegmentVisual {
  id: string;
  label: string;
  image: string;
  description: string;
  points?: string[];
}

export interface PresentationSegment {
  id: string;
  title: string;
  content: string;
  bullets?: string[];
  strapline?: string;
  summary?: string;
  visuals?: SegmentVisual[];
  icon: string;
  status: 'locked' | 'available' | 'completed';
  coordinates: { x: number; y: number };
}

export interface MissionState {
  dataIntegrity: number;
  aiReadiness: number;
  efficiency: number;
}
