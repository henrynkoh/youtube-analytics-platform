import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome to your YouTube Analytics Dashboard. Get insights about your channels and videos.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/channels">
              <div className="card cursor-pointer hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold">Analyze Channel</h3>
                <p className="text-gray-600 dark:text-gray-400">Analyze a YouTube channel's performance</p>
              </div>
            </Link>
            
            <Link href="/videos">
              <div className="card cursor-pointer hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold">Analyze Video</h3>
                <p className="text-gray-600 dark:text-gray-400">Analyze a YouTube video's performance</p>
              </div>
            </Link>
            
            <Link href="/benchmark/create">
              <div className="card cursor-pointer hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="font-bold">Create Benchmark</h3>
                <p className="text-gray-600 dark:text-gray-400">Compare channels and videos</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Analyses */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Recent Analyses</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-500 dark:text-gray-400">
                You haven't performed any analyses yet. Get started by analyzing a channel or video.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Statistics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="card bg-blue-50 dark:bg-blue-900">
              <h3 className="font-bold text-blue-700 dark:text-blue-300">Total Channels</h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            
            <div className="card bg-green-50 dark:bg-green-900">
              <h3 className="font-bold text-green-700 dark:text-green-300">Total Videos</h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            
            <div className="card bg-purple-50 dark:bg-purple-900">
              <h3 className="font-bold text-purple-700 dark:text-purple-300">Benchmarks</h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            
            <div className="card bg-orange-50 dark:bg-orange-900">
              <h3 className="font-bold text-orange-700 dark:text-orange-300">Saved Reports</h3>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold mb-2">Learn the Basics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                New to YouTube Analytics? Check out our tutorials to learn how to get the most out of our platform.
              </p>
              <Link href="/education/tutorials" className="btn-primary inline-block">
                View Tutorials
              </Link>
            </div>
            
            <div className="card">
              <h3 className="font-bold mb-2">Explore Case Studies</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                See how other content creators have used our platform to grow their channels.
              </p>
              <Link href="/education/case-studies" className="btn-primary inline-block">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
