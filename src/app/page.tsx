import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                YouTube Analytics Platform
              </h1>
              <p className="text-xl mb-8">
                Transform your YouTube strategy with comprehensive analytics, competitive benchmarking, and AI-powered insights.
              </p>
              <div className="flex space-x-4">
                <Link href="/dashboard" className="btn-primary bg-white text-blue-700 hover:bg-gray-100">
                  Get Started
                </Link>
                <Link href="/education" className="btn-secondary bg-transparent border border-white hover:bg-white/10">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                {/* Placeholder for dashboard screenshot */}
                <div className="bg-gray-800 p-8 text-center h-80 flex items-center justify-center">
                  <span className="text-2xl">Analytics Dashboard Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Channel Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive metrics including subscriber count, view velocity, engagement rates, and growth tracking.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Video Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed performance metrics, SEO optimization, engagement analysis, and content quality assessment.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Benchmarking System</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare against similar channels with competitive analysis, performance ranking, and actionable insights.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/dashboard" className="btn-primary">
              Explore All Features
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your YouTube strategy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who are using our platform to grow their channels and optimize their content.
          </p>
          <Link href="/auth/register" className="btn-primary bg-white text-blue-700 hover:bg-gray-100">
            Sign Up Now
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
