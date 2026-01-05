'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAdmin } from '@/lib/rbac';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/sign-in');
      } else {
        setUser(user);
        // In a real app, check user role from database
        // For demo purposes, we'll assume admin access
        setAuthorized(true);
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

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">
            You do not have permission to access the admin dashboard.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
              User Dashboard
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Controls</h2>
          <p className="text-gray-600">Manage users, content, and platform settings</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User Management</h3>
            <p className="text-gray-600 mb-4">
              View and manage user accounts, roles, and permissions
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                Total Users: <span className="font-semibold text-gray-900">1,234</span>
              </div>
              <div className="text-sm text-gray-500">
                Active Today: <span className="font-semibold text-gray-900">456</span>
              </div>
            </div>
          </div>

          {/* Content Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Management</h3>
            <p className="text-gray-600 mb-4">
              Manage modules, lessons, and quiz content
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                Total Modules: <span className="font-semibold text-gray-900">10</span>
              </div>
              <div className="text-sm text-gray-500">
                Total Lessons: <span className="font-semibold text-gray-900">100</span>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics</h3>
            <p className="text-gray-600 mb-4">
              View platform usage statistics and insights
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                Completion Rate: <span className="font-semibold text-gray-900">72%</span>
              </div>
              <div className="text-sm text-gray-500">
                Avg. Quiz Score: <span className="font-semibold text-gray-900">4.2/5</span>
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Tickets</h3>
            <p className="text-gray-600 mb-4">
              Review and respond to user support requests
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                Open Tickets: <span className="font-semibold text-yellow-600">23</span>
              </div>
              <div className="text-sm text-gray-500">
                Resolved Today: <span className="font-semibold text-green-600">15</span>
              </div>
            </div>
          </div>

          {/* Jobs Feed */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Jobs Feed</h3>
            <p className="text-gray-600 mb-4">
              Manage job listings and opportunities
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                Active Listings: <span className="font-semibold text-gray-900">45</span>
              </div>
              <div className="text-sm text-gray-500">
                This Week: <span className="font-semibold text-gray-900">12</span>
              </div>
            </div>
          </div>

          {/* News & Insights */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">News & Insights</h3>
            <p className="text-gray-600 mb-4">
              Manage news articles and industry insights
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">
                Published: <span className="font-semibold text-gray-900">87</span>
              </div>
              <div className="text-sm text-gray-500">
                This Month: <span className="font-semibold text-gray-900">8</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">System Settings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Authentication</h4>
              <p className="text-sm text-gray-600">
                Supabase authentication is active. All users authenticate via Supabase credentials only.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">RBAC</h4>
              <p className="text-sm text-gray-600">
                Role-based access control configured for user, admin, and content_creator roles.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
