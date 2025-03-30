import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment made with email: ${email}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="px-4 py-2 border rounded-md mb-4"
          placeholder="Your email"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400"
        >
          Make an Appointment
        </button>
      </form>
    </div>
  );
}
