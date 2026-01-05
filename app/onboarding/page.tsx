'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { UserLevel, SubscriptionTier } from '@/types';

const learningReasons = [
  'Advance my career',
  'Improve team management skills',
  'Develop strategic thinking',
  'Enhance communication abilities',
  'Build leadership confidence',
  'Prepare for management role',
  'Personal growth and development',
  'Other',
];

export default function OnboardingPage() {
  const [reason, setReason] = useState('');
  const [level, setLevel] = useState<UserLevel>('beginner');
  const [tier, setTier] = useState<SubscriptionTier>('free');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/sign-in');
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      // In a real app, this would save to Supabase
      // For now, we'll just redirect to dashboard
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to Learn Leadership
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Let&apos;s personalize your learning journey
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Why do you want to learn about leadership? *
              </label>
              <select
                id="reason"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option value="">Select a reason</option>
                {learningReasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select your level *
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="level"
                    value="beginner"
                    checked={level === 'beginner'}
                    onChange={(e) => setLevel(e.target.value as UserLevel)}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    <strong>Beginner</strong> - New to leadership concepts
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="level"
                    value="next_level"
                    checked={level === 'next_level'}
                    onChange={(e) => setLevel(e.target.value as UserLevel)}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    <strong>Next Level / Test</strong> - Some leadership experience
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="level"
                    value="practical"
                    checked={level === 'practical'}
                    onChange={(e) => setLevel(e.target.value as UserLevel)}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    <strong>Practical / Labs / Case</strong> - Advanced application
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose your plan
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tier"
                    value="free"
                    checked={tier === 'free'}
                    onChange={(e) => setTier(e.target.value as SubscriptionTier)}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    <strong>Free</strong> - Access to basic modules
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tier"
                    value="paid"
                    checked={tier === 'paid'}
                    onChange={(e) => setTier(e.target.value as SubscriptionTier)}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    <strong>Paid</strong> - Full access to all modules and features
                  </span>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
              >
                {loading ? 'Setting up...' : 'Complete Setup'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
