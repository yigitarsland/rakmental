import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <header>
          {/* Pass the dark mode state and toggle function to Navbar */}
          <Navbar onToggleDarkMode={() => setDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
        </header>
        
        <main>{children}</main>
        
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
