import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media and Email Input Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://www.youtube.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.482 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.482-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
              </svg>
            </Link>
            <Link href="https://www.facebook.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.059 2.316.254 3.125.542.935.327 1.729.75 2.519 1.54.79.79 1.213 1.584 1.54 2.519.288.809.483 1.759.542 3.125.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.059 1.366-.254 2.316-.542 3.125-.327.935-.75 1.729-1.54 2.519-.79.79-1.584 1.213-2.519 1.54-.809.288-1.759.483-3.125.542-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.059-2.316-.254-3.125-.542-.935-.327-1.729-.75-2.519-1.54-.79-.79-1.213-1.584-1.54-2.519-.288-.809-.483-1.759-.542-3.125-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.059-1.366.254-2.316.542-3.125.327-.935.75-1.729 1.54-2.519.79-.79 1.584-1.213 2.519-1.54.773-.299 1.651-.497 2.976-.556 1.28-.058 1.688-.072 4.849-.072z"/>
              </svg>
            </Link>
          </div>
          {/* Email Input Section */}
          <div className="flex items-center space-x-4">
            <input type="email" placeholder="Enter your email" className="p-2 rounded border border-gray-300 dark:border-gray-600" />
            <button className="btn bg-blue-500 text-white hover:bg-blue-600">Subscribe</button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-300">
          {/* Phone Section */}
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 22h-16c-1.103 0-2-.897-2-2v-16c0-1.103.897-2 2-2h3.757c.465 0 .914.184 1.245.511l2.998 3h8c1.103 0 2 .897 2 2v11c0 1.103-.897 2-2 2zm-12.351-1h11.351v-11h-5v-3h-6v14z"/>
            </svg>
            <span>+1-123-456-7890</span>
          </div>
          {/* Email Section */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm-1.706 9.708c-.168.149-.399.15-.567.002l-2.499-2.001-2.501 2.001c-.168.148-.399.147-.567-.002-.168-.149-.169-.389-.001-.537l2.502-2.003-2.502-2.003c-.168-.149-.167-.388.001-.537.168-.149.399-.15.567-.002l2.501 2.001 2.499-2.001c.168-.148.399-.147.567.002.168.149.169.388.001.537l-2.502 2.003 2.502 2.003c.168.149.167.388-.001.537z"/>
            </svg>
            <span>info@example.com</span>
          </div>
        </div>

        {/* Privacy Policy and Copyright */}
        <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
          <p>Privacy Policy | Copyright © 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
