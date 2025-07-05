import React, { useState } from 'react';

const EmailAccessForm = ({ onAccessGranted }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) return alert('Please enter a valid email.');

    // Save to localStorage or backend if needed
    localStorage.setItem('accessEmail', email);
    setSubmitted(true);
    onAccessGranted(email); // pass email to parent
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📧 Enter Your Email to Access the Course</h2>
        {submitted ? (
          <p className="text-green-600 font-medium">✅ Access Granted! Loading your course...</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
            >
              Get Access
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailAccessForm;
