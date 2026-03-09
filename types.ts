
export interface PresentationSegment {
  id: string;
  title: string;
  content: string;
  bullets?: string[];
  icon: string;
  status: 'locked' | 'available' | 'completed';
  coordinates: { x: number; y: number };
}

export interface MissionState {
  dataIntegrity: number;
  aiReadiness: number;
  efficiency: number;
}
