export type UserRole = 'user' | 'admin' | 'content_creator';

export type UserLevel = 'beginner' | 'next_level' | 'practical';

export type SubscriptionTier = 'free' | 'paid';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  level: UserLevel;
  subscription_tier: SubscriptionTier;
  onboarding_completed: boolean;
  learning_reason?: string;
  created_at: string;
  updated_at: string;
}

export interface Module {
  id: string;
  module_number: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  module_id: string;
  lesson_number: number;
  title: string;
  content: string;
  word_count: number;
  created_at: string;
  updated_at: string;
}

export interface QuizQuestion {
  id: string;
  lesson_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  order: number;
}

export interface Quiz {
  id: string;
  lesson_id: string;
  questions: QuizQuestion[];
  passing_score: number;
  created_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  quiz_score?: number;
  completed_at?: string;
  created_at: string;
}

export interface NewsInsight {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
  created_at: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  url: string;
  posted_at: string;
  created_at: string;
}

export interface SupportTicket {
  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  created_at: string;
  updated_at: string;
}
