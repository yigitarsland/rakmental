import Link from 'next/link';

export default function Offer() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Our Offers
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Choose the best plan for your mental coaching journey.
      </p>

      {/* Coaching Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Plan 1</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Description of Plan 1.</p>
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400">
            Order and Pay
          </Link>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Plan 2</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Description of Plan 2.</p>
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400">
            Order and Pay
          </Link>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Plan 3</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Description of Plan 3.</p>
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400">
            Order and Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
