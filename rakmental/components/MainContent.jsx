import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainContent = () => {
  return (
    <main>
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Unlock your mind to achieve success and develop your hidden potential!</h1>
          <p>
            My goal is to support you in achieving success in various areas, such as business, sports, and personal and professional life. Success depends to a large extent on the courage to overcome difficulties, both those that come from within and from without. In this area, I feel really well prepared. Don't hesitate, give yourself a chance to develop. Together, through coaching and mentoring, we will plan the best path for you.
          </p>
          <div className="buttons">
            <Link href="/check">
              <button className="check-button">CHECK</button>
            </Link>
            <Link href="/contact">
              <button className="contact-button">CONTACT</button>
            </Link>
          </div>
        </div>
        <div className="image-section">
          <Image src="/path/to/image.jpg" alt="Muscular individual in snowy environment" layout="responsive" width={500} height={300} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;