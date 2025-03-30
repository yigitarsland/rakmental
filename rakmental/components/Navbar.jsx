import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About me', path: '/about' },
  { label: 'Offer', path: '/offer' },
  { label: 'Blog', path: '/blog' },
  { label: 'Opinions', path: '/opinions' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ onToggleDarkMode, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Header */}
        <div className="flex justify-between items-center h-16 pt-4 pb-2">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Brand Logo" width={100} height={100} />
            </Link>
            <h1 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">RAK MENTAL</h1>
          </div>
        </div>

        {/* Navbar Links - Desktop */}
        <div className="hidden md:flex justify-center space-x-12 mt-4">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu and Dark Mode Button - Mobile */}
        <div className="md:hidden flex items-center justify-between mt-4">
          {/* Dark Mode Button */}
          <button
            onClick={onToggleDarkMode}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 focus:outline-none"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={handleMenuToggle}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer Menu (Links displayed in mobile view) */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4 transition-transform transform duration-300 ease-in-out`}>
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
