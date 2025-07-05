import React, { useState } from 'react';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../componend/Privatecoursepage/firebase'; // ✅ adjust path if needed

const actionCodeSettings = {
  url: 'http://localhost:3000/finishSignIn', // ✅ change if deployed
  handleCodeInApp: true,
};

const EmailLinkSignIn = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendLink = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      setMessage('✅ Sign-in link sent! Check your email inbox.');
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">📩 Passwordless Login</h2>
        <form onSubmit={handleSendLink} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Sign-In Link
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default EmailLinkSignIn;
