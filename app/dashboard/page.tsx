'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { curriculumData } from '@/lib/curriculum';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/sign-in');
      } else {
        setUser(user);
      }
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">Learn Leadership</h1>
          <div className="flex items-center gap-4">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Dashboard</h2>
          <p className="text-gray-600">Continue your leadership learning journey</p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/modules"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-primary-600 mb-2">My Modules</h3>
            <p className="text-gray-600">Access your leadership curriculum</p>
          </Link>
          <Link
            href="/dashboard/jobs"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-primary-600 mb-2">Job Opportunities</h3>
            <p className="text-gray-600">Explore leadership roles</p>
          </Link>
          <Link
            href="/dashboard/news"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-primary-600 mb-2">News & Insights</h3>
            <p className="text-gray-600">Stay updated with industry trends</p>
          </Link>
        </div>

        {/* Modules Overview */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Learning Path</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumData.map((module) => (
              <Link
                key={module.id}
                href={`/modules/${module.id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  Module {module.module_number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {module.title}
                </h4>
                <p className="text-sm text-gray-600">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to assist you with any questions.
          </p>
          <Link
            href="/dashboard/support"
            className="inline-block px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
          >
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
}
