import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  impact: string;     
  engine: string;     
  workflowImage: string; 
  deployedCount: number; 
  icon: LucideIcon;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
}

export interface CaseStudy {
  id: string;
  company: string;
  location: string;
  industry: string;
  serviceUsed: string;
  logo: string;
  teaser: string;
  executiveSummary: string;
  breakingPoint: {
    description: string;
    metrics: string[];
  };
  approach: {
    description: string;
    phases: { title: string; items: string[] }[];
  };
  techStack: string[];
  results: {
    metrics: { label: string; before: string; after: string; change: string }[];
    impactStatement: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  takeaways: string[];
  impactStats: { label: string; value: string }[]; // For the listing card
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  }

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}
