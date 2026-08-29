export interface Project {
  index: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  focus: string[];
  visual: Visual;
  layout: 'editorial' | 'split' | 'full';
}

export interface Visual {
  tone: string;
  tone2: string;
  motif: 'grid' | 'type' | 'orbit';
  label: string;
}

export interface Service {
  index: string;
  name: string;
  items: string[];
  note: string;
}
