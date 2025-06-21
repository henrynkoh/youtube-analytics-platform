import MainLayout from '@/components/MainLayout';

export default function Videos() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Video Analysis</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Analyze YouTube videos to get comprehensive insights and performance metrics.
          </p>
        </div>

        {/* Video Search Form */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Analyze a YouTube Video</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Video URL or ID
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="videoUrl"
                  placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="input flex-grow"
                />
                <button type="submit" className="btn-primary ml-2">
                  Analyze
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Enter a YouTube video URL or video ID
              </p>
            </div>
          </form>
        </div>

        {/* Recently Analyzed Videos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recently Analyzed Videos</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-500 dark:text-gray-400">
                You haven't analyzed any videos yet. Use the form above to analyze a video.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Video Analysis */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sample Video Analysis</h2>
          <div className="card">
            <div className="flex flex-col md:flex-row mb-6">
              <div className="md:w-1/3 mr-0 md:mr-6 mb-4 md:mb-0">
                <div className="aspect-video bg-gray-300 rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="font-bold text-xl mb-2">Sample YouTube Video Title</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Published on June 21, 2025 • 10:15</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500">Views</h4>
                    <p className="text-lg font-bold">1,234,567</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500">Likes</h4>
                    <p className="text-lg font-bold">45,678</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500">Comments</h4>
                    <p className="text-lg font-bold">2,345</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500">Like Ratio</h4>
                    <p className="text-lg font-bold">3.7%</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    SEO Score: A+
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    Engagement: High
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    Quality: Excellent
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="btn-primary">View Full Analysis</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
