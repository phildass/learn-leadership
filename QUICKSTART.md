# Quick Start Guide - Learn Leadership

Get started with Learn Leadership in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Supabase account (free tier is fine)
- Git installed

## Step 1: Clone and Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/phildass/learn-leadership.git
cd learn-leadership

# Install dependencies
npm install
```

## Step 2: Supabase Setup (2 minutes)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for project to be ready
4. Go to Settings → API
5. Copy your project URL and anon key

## Step 3: Configure Environment (30 seconds)

```bash
# Create .env file
cp .env.example .env

# Edit .env and add your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Database Setup (1 minute)

1. Go to your Supabase project dashboard
2. Click on SQL Editor
3. Open `/docs/database-schema.md`
4. Copy and run each CREATE TABLE statement
5. Run the Row Level Security policies

Quick SQL to get started (minimal):

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User profiles table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  level TEXT NOT NULL DEFAULT 'beginner',
  subscription_tier TEXT NOT NULL DEFAULT 'free',
  onboarding_completed BOOLEAN DEFAULT FALSE,
  learning_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own profile
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);
```

## Step 5: Run the Application (30 seconds)

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## What You'll See

1. **Homepage**: Welcome page with sign up/sign in buttons
2. **Sign Up**: Create your account
3. **Onboarding**: Choose your learning path
4. **Dashboard**: Access modules, jobs, news, and support
5. **Modules**: Browse 10 leadership modules
6. **Lessons**: Read lessons and take quizzes

## Test the Features

### Create Your First User

1. Click "Get Started" or "Sign Up"
2. Enter email and password
3. Complete onboarding form
4. Access your dashboard

### Explore a Module

1. From dashboard, click "My Modules"
2. Select "Module 1: Foundations of Global-Indian Leadership"
3. Click on "Lesson 1: Introduction to Leadership Fundamentals"
4. Read the lesson
5. Click "Take Quiz"
6. Answer 5 questions (need 3 correct to pass)

### Try Admin Features

To become an admin:

1. Sign up normally
2. Go to Supabase SQL Editor
3. Run this query (replace with your email):

```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

4. Visit [http://localhost:3000/admin](http://localhost:3000/admin)

## Common Issues

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Supabase Connection Error

- Verify your URL and key in `.env`
- Check that `.env` is in the root directory
- Restart the dev server after changing `.env`

### Database Errors

- Make sure you created the tables in Supabase
- Check Row Level Security policies are enabled
- Verify you're connected to the correct Supabase project

## Next Steps

### For Developers

1. Read `/docs/architecture.md` for system overview
2. Check `/docs/api-documentation.md` for API details
3. Review `/docs/database-schema.md` for complete schema
4. Explore the code in `/app` directory

### For Deployment

1. Read `/docs/deployment.md` for production setup
2. Configure production Supabase project
3. Set up domain at `learn-leadership.iiskills.cloud`
4. Deploy to Vercel or custom server

### For Content Creators

1. Become an admin or content_creator
2. Access admin dashboard
3. Review curriculum in `/lib/curriculum.ts`
4. Add or modify content as needed

## Project Structure

```
learn-leadership/
├── app/              # Next.js pages
│   ├── auth/        # Authentication
│   ├── dashboard/   # User dashboard
│   ├── modules/     # Learning modules
│   └── admin/       # Admin panel
├── lib/             # Utilities
│   ├── curriculum.ts   # 100 lessons data
│   ├── supabase.ts    # Supabase client
│   └── rbac.ts        # Role-based access
├── types/           # TypeScript types
└── docs/            # Documentation
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Key Features Checklist

- ✅ Supabase-only authentication
- ✅ 10 modules with 100 AI-generated lessons
- ✅ Interactive quiz system (5 questions, 3/5 to pass)
- ✅ User onboarding flow
- ✅ Free and paid tiers
- ✅ News & insights feed
- ✅ Jobs board
- ✅ Support ticket system
- ✅ Admin dashboard
- ✅ RBAC (user, admin, content_creator)
- ✅ Responsive design
- ✅ TypeScript throughout
- ✅ Production-ready build

## Getting Help

- Check `/docs` directory for detailed documentation
- Review error messages in console
- Verify Supabase connection
- Check environment variables

## Production Deployment

When ready for production:

```bash
# Build the app
npm run build

# Test production build locally
npm start

# Deploy to Vercel (recommended)
vercel --prod

# Or deploy to custom server
# See /docs/deployment.md for details
```

## Congratulations!

You now have a fully functional leadership learning platform! 🎉

Explore the features, customize the content, and deploy to production when ready.

For detailed documentation, see:
- `/docs/architecture.md` - System architecture
- `/docs/database-schema.md` - Database design
- `/docs/api-documentation.md` - API reference
- `/docs/deployment.md` - Production deployment
