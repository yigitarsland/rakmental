import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="cookie-icon">
          <Image src="/path/to/icon.png" alt="Cookie Icon" width={20} height={20} />
        </div>
        <div className="about-me-text">
          <span>About me</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;