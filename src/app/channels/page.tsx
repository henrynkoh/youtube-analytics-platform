import MainLayout from '@/components/MainLayout';

export default function Channels() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Channel Analysis</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Analyze YouTube channels to get comprehensive insights and performance metrics.
          </p>
        </div>

        {/* Channel Search Form */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Analyze a YouTube Channel</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="channelUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Channel URL or ID
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="channelUrl"
                  placeholder="e.g., https://youtube.com/@newsfeed_official"
                  className="input flex-grow"
                />
                <button type="submit" className="btn-primary ml-2">
                  Analyze
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Enter a YouTube channel URL (e.g., https://youtube.com/@newsfeed_official) or channel ID
              </p>
            </div>
          </form>
        </div>

        {/* Recently Analyzed Channels */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recently Analyzed Channels</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-500 dark:text-gray-400">
                You haven't analyzed any channels yet. Use the form above to analyze a channel.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Channel Analysis */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sample Channel Analysis</h2>
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h3 className="font-bold text-xl">YouTube Analytics Demo</h3>
                <p className="text-gray-600 dark:text-gray-400">1.2M subscribers • 150 videos</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Subscribers</h4>
                <p className="text-2xl font-bold">1,234,567</p>
                <p className="text-green-600 text-sm">+2.5% last 28 days</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Total Views</h4>
                <p className="text-2xl font-bold">45,678,901</p>
                <p className="text-green-600 text-sm">+4.2% last 28 days</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Engagement Rate</h4>
                <p className="text-2xl font-bold">8.7%</p>
                <p className="text-red-600 text-sm">-0.5% last 28 days</p>
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
