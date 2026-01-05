'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const mockJobs = [
  {
    id: '1',
    title: 'Senior Leadership Development Manager',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    type: 'full-time' as const,
    description: 'Lead leadership development initiatives across the organization',
    url: '#',
    posted_at: '2024-01-03',
  },
  {
    id: '2',
    title: 'Global Team Lead - Strategy',
    company: 'Infosys',
    location: 'Bangalore, India',
    type: 'full-time' as const,
    description: 'Strategic leadership role for global teams',
    url: '#',
    posted_at: '2024-01-02',
  },
  {
    id: '3',
    title: 'Director of Operations',
    company: 'Wipro',
    location: 'Hyderabad, India',
    type: 'full-time' as const,
    description: 'Oversee operational excellence and team performance',
    url: '#',
    posted_at: '2024-01-01',
  },
];

export default function JobsPage() {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leadership Job Opportunities</h2>
          <p className="text-gray-600">Explore leadership roles in Indian and global companies</p>
        </div>

        <div className="space-y-6">
          {mockJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span className="mx-2">•</span>
                  <span>Posted {new Date(job.posted_at).toLocaleDateString()}</span>
                </div>
                <a
                  href={job.url}
                  className="px-4 py-2 bg-primary-600 text-white text-sm rounded hover:bg-primary-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
