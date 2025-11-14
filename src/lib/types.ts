export type PlanType = 'free' | 'pro';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'marketing' | 'vendas' | 'ambos';
  level: 'iniciante' | 'intermediario' | 'avancado';
  duration: string;
  modules: number;
  plan: PlanType;
  thumbnail: string;
  instructor: string;
  rating: number;
  students: number;
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  category: 'marketing' | 'vendas' | 'ambos';
  pages: number;
  plan: PlanType;
  cover: string;
  author: string;
  downloads: number;
  rating: number;
}

export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  category: 'marketing' | 'vendas' | 'ambos';
  duration: string;
  plan: PlanType;
  thumbnail: string;
  videoUrl: string;
  aiGenerated: boolean;
  views: number;
  rating: number;
  topics: string[];
}
