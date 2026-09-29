export type AccuracyGrade = 'AUTHENTIC' | 'SELECTIVE' | 'CAUTION';

export interface CostumePart {
  id: string;
  number: number;
  partName: string;
  title: string;
  subtitle: string;
  description: string;
  material: string;
  technique: string;
  matchRate: number;
  image?: string;
  imageAlt?: string;
}

export interface HistoricalRecord {
  id: string;
  title: string;
  originalTitle: string;
  mediaType: string;
  year: number;
  era: string;
  eraCategory: string;
  region: string;
  guild: string;
  socialStatus: string;
  category: string;
  accuracyScore: number;
  accuracyGrade: AccuracyGrade;
  coverImage: string;
  alt: string;
  organization: string;
  judgmentSummary: string;
  sources: string[];
  parts: CostumePart[];
  creatorTips: string;
  palette: { hex: string; name: string }[];
  tags: string[];
  anachronismRate?: number;
  shortVerdict?: string;
  reviewComment?: string;
}

export interface MatrixItem {
  id: string;
  category: string;
  subCategory: string;
  workANote: string;
  workBNote: string;
  workAHighlight: string;
  workBHighlight: string;
  badge: string;
  verdict: string;
}

export interface ComparisonReport {
  id: string;
  folioRef: string;
  title: string;
  createdDate: string;
  workAId: string;
  workBId: string;
  matchRate: number;
  diffRate: string;
  anachronismB: string;
  generalBrief: string;
  matrixItems: MatrixItem[];
  conclusion: string;
  committee: string;
  reliabilityScore: string;
  pointsCount: number;
}

export interface ProjectBoard {
  id: string;
  title: string;
  subtitle: string;
  status: 'writing' | 'verified' | 'draft';
  statusLabel: string;
  updatedAt: string;
  specimenCode?: string;
  specimenTitle?: string;
  deviation?: string;
  curatorMemo?: string;
  tags: string[];
  images: string[];
  era?: string;
  purpose?: string;
}

export interface LexiconWord {
  id: string;
  term: string;
  romanTerm: string;
  count: number;
  definition: string;
  era: string;
  category: string;
  frequency: number;
}
