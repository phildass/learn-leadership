# Supabase Database Schema

This document describes the database schema for the Learn Leadership platform.

## Authentication

All authentication is handled exclusively through **Supabase Auth**. No custom authentication methods are used.

## Tables

### user_profiles

Extended user profile information beyond Supabase auth.users.

```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin', 'content_creator')),
  level TEXT NOT NULL DEFAULT 'beginner' CHECK (level IN ('beginner', 'next_level', 'practical')),
  subscription_tier TEXT NOT NULL DEFAULT 'free' CHECK (subscription_tier IN ('free', 'paid')),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  learning_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### modules

Curriculum modules (10 total).

```sql
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_number INTEGER NOT NULL UNIQUE CHECK (module_number BETWEEN 1 AND 10),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### lessons

Individual lessons within modules (100 total, 10 per module).

```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  lesson_number INTEGER NOT NULL CHECK (lesson_number BETWEEN 1 AND 10),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  word_count INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(module_id, lesson_number)
);
```

### quiz_questions

Questions for post-lesson quizzes.

```sql
CREATE TABLE quiz_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL CHECK (correct_answer BETWEEN 0 AND 4),
  order_num INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### user_progress

Track user progress through lessons.

```sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT FALSE,
  quiz_score INTEGER CHECK (quiz_score BETWEEN 0 AND 5),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);
```

### news_insights

News articles and industry insights.

```sql
CREATE TABLE news_insights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  source TEXT NOT NULL,
  published_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### job_listings

Leadership job opportunities.

```sql
CREATE TABLE job_listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('full-time', 'part-time', 'contract')),
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  posted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### support_tickets

User support requests.

```sql
CREATE TABLE support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Row Level Security (RLS)

Enable RLS on all tables and create appropriate policies.

## Indexes

```sql
CREATE INDEX idx_lessons_module_id ON lessons(module_id);
CREATE INDEX idx_quiz_questions_lesson_id ON quiz_questions(lesson_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX idx_support_tickets_user_id ON support_tickets(user_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(status);
```
