'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const mockNews = [
  {
    id: '1',
    title: 'The Future of Leadership in Indian Tech Industry',
    description: 'Exploring emerging trends in leadership development for Indian technology companies',
    url: '#',
    source: 'Economic Times',
    published_at: '2024-01-05',
  },
  {
    id: '2',
    title: 'Building High-Performance Teams in Hybrid Work Environments',
    description: 'Best practices for leading distributed teams across India and globally',
    url: '#',
    source: 'Harvard Business Review',
    published_at: '2024-01-04',
  },
  {
    id: '3',
    title: 'Ethical Leadership: Lessons from Indian Business Leaders',
    description: 'Case studies on ethical decision-making in complex business scenarios',
    url: '#',
    source: 'Business Standard',
    published_at: '2024-01-03',
  },
];

export default function NewsPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/sign-in');
      } else {
        setUser(user);
      }
    };
    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-bold text-primary-600">
            Learn Leadership
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">News & Insights</h2>
          <p className="text-gray-600">Stay updated with the latest in leadership and management</p>
        </div>

        <div className="space-y-6">
          {mockNews.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {article.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">{article.source}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.published_at).toLocaleDateString()}</span>
                </div>
                <a
                  href={article.url}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
