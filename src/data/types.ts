export interface FormationStep {
  number: number;
  title: string;
  description: string;
  timeline: string;
  url?: string;
  urlLabel?: string;
  cost?: string;
  documents?: string[];
}

export interface EntityType {
  name: string;
  slug: string;
  description: string;
  minCapital?: string;
  liability: string;
  steps: FormationStep[];
  totalTimeline: string;
  totalCost: string;
  requirements: string[];
  sources: { label: string; url: string }[];
}

export interface Country {
  name: string;
  slug: string;
  flag: string;
  region: string;
  currency: string;
  language: string;
  easeOfBusinessRank: number;
  corporateTaxRate: string;
  summary: string;
  entityTypes: EntityType[];
  keyBenefits: string[];
  lastUpdated: string;
}
