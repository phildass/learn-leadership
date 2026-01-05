'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { curriculumData, getLessonsForModule } from '@/lib/curriculum';

export default function ModulePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const params = useParams();
  const moduleId = params?.moduleId as string;

  const currentModule = curriculumData.find((m) => m.id === moduleId);
  const lessons = currentModule ? getLessonsForModule(currentModule.id) : [];

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

  if (!user || !currentModule) {
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
            <Link href="/modules" className="text-sm text-gray-600 hover:text-gray-900">
              All Modules
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
          <div className="text-sm text-primary-600 font-semibold mb-2">
            Module {currentModule.module_number}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentModule.title}</h2>
          <p className="text-gray-600">{currentModule.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Lessons</h3>
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/modules/${moduleId}/${lesson.id}`}
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-primary-600 font-semibold mb-1">
                      Lesson {lesson.lesson_number}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {lesson.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {lesson.word_count} words • ~{Math.ceil(lesson.word_count / 200)} min read
                    </p>
                  </div>
                  <div className="text-primary-600 text-sm font-medium">
                    Start →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
