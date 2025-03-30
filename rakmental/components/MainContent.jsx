import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainContent = () => {
  return (
    <main>
      <div className="hero">
        {/* Hero Text Section */}
        <div className="text-section">
          <h1>Unlock your mind to achieve success and develop your hidden potential!</h1>
          <p>
            My goal is to support you in achieving success in various areas, such as business, sports, and personal and professional life. Success depends to a large extent on the courage to overcome difficulties, both those that come from within and from without. In this area, I feel really well prepared. Don't hesitate, give yourself a chance to develop. Together, through coaching and mentoring, we will plan the best path for you.
          </p>
          <div className="buttons">
            <Link href="/offers">
              <button className="check-button">CHECK</button>
            </Link>
            <Link href="/contact">
              <button className="contact-button">CONTACT</button>
            </Link>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="image-section">
          <Image src="/path/to/image.jpg" alt="Muscular individual in snowy environment" layout="responsive" width={500} height={300} />
        </div>
      </div>

      {/* Additional Text and Appointment Button */}
      <div className="appointment-container">
        <p>
          Ready to take the next step in your journey? Book an appointment with me and let's discuss the best approach tailored for your needs.
        </p>
        <Link href="/contact">
          <button className="appointment-button">Make an Appointment</button>
        </Link>
      </div>

      {/* Coaching Plans Section */}
      <div className="coaching-plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>Details about the basic coaching plan.</p>
          <Link href="/contact">
            <button className="order-button">Order and Pay</button>
          </Link>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p>Details about the premium coaching plan.</p>
          <Link href="/contact">
            <button className="order-button">Order and Pay</button>
          </Link>
        </div>
        <div className="plan">
          <h2>Exclusive Plan</h2>
          <p>Details about the exclusive coaching plan.</p>
          <Link href="/contact">
            <button className="order-button">Order and Pay</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
