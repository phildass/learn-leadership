# Deployment Guide - Learn Leadership

## Prerequisites

1. **Supabase Project**
   - Create a new Supabase project at https://supabase.com
   - Note your project URL and anon key

2. **Domain Configuration**
   - Subdomain: `learn-leadership.iiskills.cloud`
   - DNS configured to point to deployment platform

3. **Deployment Platform**
   - Vercel (recommended) or custom server
   - Node.js 18+ support

## Step 1: Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the schema from `/docs/database-schema.md`
4. Verify all tables are created
5. Enable Row Level Security on all tables

## Step 2: Environment Variables

Set the following environment variables on your deployment platform:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://learn-leadership.iiskills.cloud
NEXT_PUBLIC_APP_NAME=Learn Leadership
NEXT_PUBLIC_ENABLE_PAID_FEATURES=true
```

## Step 3: Build and Deploy

### Option A: Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Configure custom domain in Vercel dashboard:
   - Add domain: `learn-leadership.iiskills.cloud`
   - Follow DNS configuration instructions

### Option B: Custom Server

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

3. Use a process manager (PM2):
```bash
npm install -g pm2
pm2 start npm --name "learn-leadership" -- start
pm2 save
pm2 startup
```

4. Configure Nginx reverse proxy:
```nginx
server {
    listen 80;
    server_name learn-leadership.iiskills.cloud;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. Enable SSL with Let's Encrypt:
```bash
certbot --nginx -d learn-leadership.iiskills.cloud
```

## Step 4: Post-Deployment Verification

1. **Authentication Test:**
   - Create a test account
   - Verify email/password sign-up works
   - Test sign-in flow
   - Verify session persistence

2. **Onboarding Test:**
   - Complete onboarding flow
   - Verify dropdown selections save
   - Check level and tier selection

3. **Curriculum Test:**
   - Browse modules
   - View lessons
   - Take quizzes
   - Verify pass/fail logic

4. **Admin Access:**
   - Create admin user in Supabase
   - Update role to 'admin' in user_profiles table
   - Access admin dashboard
   - Verify admin features

## Step 5: Initial Admin Setup

1. Create first admin user in Supabase SQL Editor:
```sql
-- First sign up normally through the UI
-- Then promote to admin:
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-admin@email.com';
```

2. Populate initial content (optional):
   - The app includes 100 lessons in `/lib/curriculum.ts`
   - These can be seeded to database if needed
   - Or used as-is from the code

## Step 6: Monitoring

1. **Supabase Dashboard:**
   - Monitor database usage
   - Check auth statistics
   - Review API logs

2. **Application Monitoring:**
   - Set up error tracking (Sentry, etc.)
   - Monitor server performance
   - Track user analytics

## Production Checklist

- [ ] Supabase project created and configured
- [ ] Database schema deployed
- [ ] Row Level Security enabled
- [ ] Environment variables set
- [ ] Application built successfully
- [ ] Domain configured: learn-leadership.iiskills.cloud
- [ ] SSL certificate installed
- [ ] Authentication tested
- [ ] Admin account created
- [ ] All features verified
- [ ] Error monitoring configured
- [ ] Backup strategy implemented

## Security Best Practices

1. **Never commit `.env` files**
2. **Use Supabase RLS policies**
3. **Keep dependencies updated**
4. **Monitor Supabase logs**
5. **Implement rate limiting** (via Supabase or application)
6. **Regular security audits**

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Supabase Connection Issues

- Verify URL and anon key are correct
- Check Supabase project is active
- Verify network/firewall settings

### Authentication Not Working

- Check Supabase Auth settings
- Verify email confirmations are disabled (or configured)
- Check redirect URLs in Supabase dashboard

## Support

For deployment issues, contact the iiskills.cloud infrastructure team.
