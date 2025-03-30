import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Image src="/path/to/logo.png" alt="Rak Mental Coaching & Mentoring" width={100} height={100} />
        </div>
        <nav>
          <ul>
            <li><Link href="/about"><a>About me</a></Link></li>
            <li><Link href="/offer"><a>Offer</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/opinions"><a>Opinions</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;