# API Documentation - Learn Leadership

## Overview

The Learn Leadership platform uses Supabase for backend services. This document describes the data models and API patterns used throughout the application.

## Authentication API

### Supabase Auth

All authentication is handled through Supabase Auth SDK.

**Sign Up**
```typescript
const { data, error } = await supabase.auth.signUp({
  email: string,
  password: string,
  options: {
    emailRedirectTo: string
  }
});
```

**Sign In**
```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: string,
  password: string
});
```

**Sign Out**
```typescript
const { error } = await supabase.auth.signOut();
```

**Get Current User**
```typescript
const { data: { user } } = await supabase.auth.getUser();
```

## Data Models

### User Profile

```typescript
interface UserProfile {
  id: string;              // UUID, references auth.users
  email: string;
  role: 'user' | 'admin' | 'content_creator';
  level: 'beginner' | 'next_level' | 'practical';
  subscription_tier: 'free' | 'paid';
  onboarding_completed: boolean;
  learning_reason?: string;
  created_at: string;
  updated_at: string;
}
```

### Module

```typescript
interface Module {
  id: string;              // UUID
  module_number: number;   // 1-10
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
```

### Lesson

```typescript
interface Lesson {
  id: string;              // UUID
  module_id: string;       // References module.id
  lesson_number: number;   // 1-10
  title: string;
  content: string;         // Markdown or plain text
  word_count: number;
  created_at: string;
  updated_at: string;
}
```

### Quiz & Questions

```typescript
interface QuizQuestion {
  id: string;
  lesson_id: string;
  question: string;
  options: string[];       // Array of 4 options
  correct_answer: number;  // Index 0-3
  order: number;
}

interface Quiz {
  id: string;
  lesson_id: string;
  questions: QuizQuestion[];
  passing_score: number;   // Default: 3
  created_at: string;
}
```

### User Progress

```typescript
interface UserProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  quiz_score?: number;     // 0-5
  completed_at?: string;
  created_at: string;
}
```

### News Insight

```typescript
interface NewsInsight {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
  created_at: string;
}
```

### Job Listing

```typescript
interface JobListing {
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
```

### Support Ticket

```typescript
interface SupportTicket {
  id: string;
  user_id: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  created_at: string;
  updated_at: string;
}
```

## Database Queries

### Fetch Modules

```typescript
const { data: modules, error } = await supabase
  .from('modules')
  .select('*')
  .order('module_number', { ascending: true });
```

### Fetch Lessons for Module

```typescript
const { data: lessons, error } = await supabase
  .from('lessons')
  .select('*')
  .eq('module_id', moduleId)
  .order('lesson_number', { ascending: true });
```

### Save User Progress

```typescript
const { data, error } = await supabase
  .from('user_progress')
  .upsert({
    user_id: userId,
    lesson_id: lessonId,
    completed: true,
    quiz_score: score,
    completed_at: new Date().toISOString()
  });
```

### Get User Progress

```typescript
const { data: progress, error } = await supabase
  .from('user_progress')
  .select('*, lessons(*)')
  .eq('user_id', userId)
  .eq('completed', true);
```

### Create Support Ticket

```typescript
const { data, error } = await supabase
  .from('support_tickets')
  .insert({
    user_id: userId,
    subject: subject,
    message: message,
    priority: priority,
    status: 'open'
  });
```

## RBAC (Role-Based Access Control)

### Check User Role

```typescript
import { hasRole, isAdmin, canManageContent } from '@/lib/rbac';

// Check if user has specific role
if (hasRole(userRole, ['admin', 'content_creator'])) {
  // Allow access
}

// Check if user is admin
if (isAdmin(userRole)) {
  // Allow admin access
}

// Check if user can manage content
if (canManageContent(userRole)) {
  // Allow content management
}
```

### Row Level Security Policies

All tables use RLS to ensure:
- Users can only access their own data
- Admins have full access
- Content creators can manage curriculum
- Public content is readable by all authenticated users

## Client-Side Data Fetching

The application uses client-side fetching with Supabase. For production, consider:

1. Implementing server-side API routes for sensitive operations
2. Adding caching strategies
3. Implementing optimistic updates
4. Adding error boundaries

## Error Handling

All Supabase operations should handle errors:

```typescript
try {
  const { data, error } = await supabase
    .from('table')
    .select('*');
  
  if (error) throw error;
  
  // Handle data
} catch (error: any) {
  console.error('Error:', error.message);
  // Show user-friendly error message
}
```

## Rate Limiting

Consider implementing rate limiting for:
- Authentication attempts
- Support ticket creation
- Quiz submissions
- API requests

This can be done via Supabase Edge Functions or application-level middleware.

## Environment Variables

Required environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://learn-leadership.iiskills.cloud
```

## Future Enhancements

Consider adding:
- Real-time progress updates with Supabase Realtime
- File upload for profile pictures
- Certificate generation upon course completion
- Email notifications via Supabase Edge Functions
- Analytics tracking
- Social sharing features
