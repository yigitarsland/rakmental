import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="hero bg-gray-100 dark:bg-gray-800 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to Our Coaching Services</h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Discover how we can help you achieve your goals.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/offer" className="btn bg-blue-500 text-white hover:bg-blue-600">Check Offers</Link>
          <Link href="/contact" className="btn bg-green-500 text-white hover:bg-green-600">Contact Us</Link>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Image src="/path-to-image.jpg" alt="Coaching session" width={800} height={400} className="rounded-lg shadow-md" />
      </div>
      <div className="mt-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">Learn more about our approach and how we tailor our services to meet your needs.</p>
      </div>
      <div className="mt-10 text-center">
        <Link href="/contact" className="btn bg-purple-500 text-white hover:bg-purple-600">Make an Appointment</Link>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[
          { title: "Basic Plan", description: "Weekly sessions, basic support", price: "$100/month" },
          { title: "Premium Plan", description: "Daily sessions, advanced support", price: "$200/month" },
          { title: "Elite Plan", description: "Personalized coaching, 24/7 support", price: "$300/month" },
        ].map((plan, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{plan.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{plan.description}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.price}</p>
            <Link href="/contact" className="btn bg-blue-500 text-white hover:bg-blue-600 w-full text-center">Order and Pay</Link>
          </div>
        ))}
      </div>
    </div>
  );
}