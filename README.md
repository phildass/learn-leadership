# Learn Leadership

**Become the Leader You Are**

A comprehensive leadership development platform designed for the Indian and global workplace, built as an iiskills.cloud subdomain (learn-leadership.iiskills.cloud).

## 🎯 Overview

Learn Leadership is a feature-rich Next.js application providing structured leadership education through:
- **10 Comprehensive Modules** covering global-Indian leadership principles
- **100 AI-Generated Lessons** (10 per module) with rich content
- **Interactive Quizzes** with pass/fail mechanics (3/5 to pass)
- **Multi-tier Learning Paths** (Beginner, Next Level, Practical/Labs)
- **Free & Paid User Flows** with subscription management
- **Dynamic Features**: News monitor, jobs feed, support workflow
- **Admin Dashboard** for content and user management

## 🔐 Authentication

**Supabase-Only Authentication** - All user and admin authentication uses Supabase credentials exclusively. No legacy, custom, or alternative auth methods are permitted.

### Authentication Features:
- Sign up / Sign in with email and password
- Supabase Auth integration
- Role-Based Access Control (RBAC): `user`, `admin`, `content_creator`
- Protected routes and middleware
- Session management

## 📚 Curriculum Structure

### 10 Modules, 100 Lessons

Each module contains 10 lessons (max 400 words, 5 paragraphs per lesson):

1. **Foundations of Global-Indian Leadership** - Leadership principles in Indian/global context
2. **Personality & Self-Awareness** - Understanding your leadership style
3. **Ethics & Values in Leadership** - Ethical foundations
4. **Team Building & Collaboration** - High-performing teams
5. **Strategic Vision & Planning** - Strategic initiatives
6. **Communication Mastery** - Cross-cultural communication
7. **Change Management & Innovation** - Leading transformation
8. **Decision Making & Problem Solving** - Critical thinking
9. **Emotional Intelligence & Resilience** - Emotional competence
10. **Leadership in Practice** - Case studies and application

### Lesson Features:
- AI-generated content tailored for Indian/global workplace scenarios
- Post-chapter quizzes (5 questions per lesson)
- 3/5 correct answers required to pass and continue
- Progress tracking
- Word count tracking (~400 words per lesson)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phildass/learn-leadership.git
cd learn-leadership
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://learn-leadership.iiskills.cloud
```

4. Set up Supabase database:

Run the SQL schema from `/docs/database-schema.md` in your Supabase SQL editor to create all necessary tables.

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📖 Features

### User Features

**Onboarding Flow:**
- Why do you want to learn about leadership? (dropdown)
- Level selection: Beginner / Next Level/Test / Practical/Labs/Case
- Free vs Paid tier selection

**Learning Experience:**
- Browse 10 modules
- Access 100 comprehensive lessons
- Take post-lesson quizzes
- Track progress through curriculum
- Continue only after passing quizzes

**Dynamic Content:**
- **News & Insights Monitor** - Latest leadership industry news
- **Jobs Feed** - Indian/global leadership role opportunities
- **Support Workflow** - Submit and track support tickets

### Admin Features

**Admin Dashboard:**
- User management and analytics
- Content management (modules, lessons, quizzes)
- Support ticket management
- Jobs and news content management
- Platform analytics and reporting
- RBAC management

### Role-Based Access Control (RBAC)

Three roles supported:
- **user** - Standard learner access
- **admin** - Full platform management
- **content_creator** - Content management permissions

## 🏗️ Technology Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Supabase Auth
- **Database:** Supabase (PostgreSQL)
- **State Management:** React Hooks
- **Deployment:** Vercel / Custom (iiskills.cloud subdomain)

## 📂 Project Structure

```
learn-leadership/
├── app/                      # Next.js app directory
│   ├── auth/                # Authentication pages
│   │   ├── sign-in/        # Sign in page
│   │   └── sign-up/        # Sign up page
│   ├── dashboard/          # User dashboard
│   │   ├── jobs/           # Jobs feed
│   │   ├── news/           # News & insights
│   │   └── support/        # Support tickets
│   ├── modules/            # Learning modules
│   │   └── [moduleId]/     # Module detail
│   │       └── [lessonId]/ # Lesson viewer with quiz
│   ├── onboarding/         # User onboarding
│   ├── admin/              # Admin dashboard
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── auth/              # Auth components
│   └── ui/                # UI components
├── lib/                   # Utilities and config
│   ├── supabase.ts       # Supabase client
│   ├── rbac.ts           # RBAC utilities
│   └── curriculum.ts     # Curriculum data
├── types/                # TypeScript types
│   └── index.ts         # Type definitions
├── docs/                # Documentation
│   └── database-schema.md # Database schema
├── public/              # Static assets
└── package.json        # Dependencies
```

## 🗄️ Database Schema

See `/docs/database-schema.md` for complete database schema including:
- Tables structure
- Row Level Security policies
- Indexes
- Initial data setup

Key tables:
- `user_profiles` - Extended user information
- `modules` - 10 curriculum modules
- `lessons` - 100 lessons
- `quiz_questions` - Quiz questions
- `user_progress` - Progress tracking
- `news_insights` - News articles
- `job_listings` - Job opportunities
- `support_tickets` - Support requests

## 🎓 AI-Generated Content

All curriculum content is AI-generated specifically for:
- Indian workplace scenarios
- Global business leadership
- Modern leadership development
- Cross-cultural management
- Ethical decision-making
- Strategic thinking

Content adheres to:
- Maximum 5 paragraphs per lesson
- Maximum 400 words per lesson
- Professional, actionable insights
- Real-world applicability

## 🔒 Security

- Supabase Auth for all authentication
- Row Level Security (RLS) on all database tables
- RBAC for admin and content creator permissions
- Environment variable protection
- Secure session management

## 📱 Responsive Design

Fully responsive design works on:
- Desktop browsers
- Tablets
- Mobile devices

## 🚢 Deployment

Deploy to iiskills.cloud subdomain:

1. Build the application:
```bash
npm run build
```

2. Set environment variables on hosting platform

3. Configure domain: `learn-leadership.iiskills.cloud`

4. Deploy and verify Supabase connection

## 📄 License

Copyright © 2024 iiskills.cloud

## 🤝 Contributing

This is a production application for iiskills.cloud. Internal contributions only.

## 📞 Support

For support, contact the iiskills.cloud team or use the in-app support feature.

---

**Built with ❤️ for leadership development in India and globally**
