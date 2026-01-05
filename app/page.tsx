import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Leadership
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            Become the Leader You Are
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive leadership development program covering global-Indian leadership,
            personality development, ethics, team building, strategic vision, and communication
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/auth/sign-up"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/auth/sign-in"
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What You&apos;ll Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-600 mb-3">
              10 Comprehensive Modules
            </h3>
            <p className="text-gray-600">
              100 lessons covering essential leadership topics tailored for Indian and global workplace scenarios
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-600 mb-3">
              Interactive Learning
            </h3>
            <p className="text-gray-600">
              Post-chapter quizzes and practical exercises to reinforce your learning
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-600 mb-3">
              Career Resources
            </h3>
            <p className="text-gray-600">
              Access to leadership job opportunities and industry insights
            </p>
          </div>
        </div>
      </div>

      {/* Curriculum Overview */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Leadership Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Foundation Modules</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Global-Indian Leadership Principles</li>
              <li>• Personality & Self-Awareness</li>
              <li>• Ethics & Values in Leadership</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Advanced Modules</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Team Building & Collaboration</li>
              <li>• Strategic Vision & Planning</li>
              <li>• Communication Mastery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Learn Leadership - iiskills.cloud</p>
          <p className="mt-2 text-gray-400">
            Powered by Supabase Authentication
          </p>
        </div>
      </footer>
    </div>
  );
}
