'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { curriculumData } from '@/lib/curriculum';

export default function ModulesPage() {
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
      {/* Header */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leadership Curriculum</h2>
          <p className="text-gray-600">10 modules with 100 comprehensive lessons</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {curriculumData.map((module) => (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm font-semibold text-primary-600">
                  Module {module.module_number}
                </div>
                <div className="text-xs text-gray-500">10 Lessons</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {module.title}
              </h3>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="text-primary-600 font-medium text-sm">
                Start Module →
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
