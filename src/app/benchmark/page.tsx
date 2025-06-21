import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function Benchmark() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Benchmarking</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Compare YouTube channels and videos to industry standards and competitors.
          </p>
        </div>

        {/* Quick Create */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Benchmark</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Compare YouTube channels or videos against each other or against industry standards.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/benchmark/create" className="btn-primary text-center md:w-auto">
              Create Channel Benchmark
            </Link>
            <Link href="/benchmark/create" className="btn-secondary text-center md:w-auto">
              Create Video Benchmark
            </Link>
          </div>
        </div>

        {/* Recent Benchmarks */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Benchmarks</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-500 dark:text-gray-400">
                You haven't created any benchmarks yet.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Benchmark */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sample Benchmark Analysis</h2>
          <div className="card">
            <h3 className="font-bold text-xl mb-4">Tech Channel Comparison</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Channel
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Subscribers
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Videos
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Avg. Views
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Engagement
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      Tech Channel A
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      1.2M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      45M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      250
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      180K
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-300">
                        8.7%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      Tech Channel B
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      950K
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      38M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      320
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      120K
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                        6.2%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      Tech Channel C
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      2.5M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      98M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      180
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      540K
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-300">
                        9.1%
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center">
              <button className="btn-primary">View Full Benchmark</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
