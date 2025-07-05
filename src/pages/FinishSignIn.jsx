import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // custom context

const FinishSignIn = () => {
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth(); // custom login method that stores JWT

  useEffect(() => {
    const completeSignIn = async () => {
      const email = localStorage.getItem('emailForSignIn');
      const tokenFromUrl = searchParams.get('token'); // or get whole URL

      if (!email || !tokenFromUrl) {
        setMessage('❌ Invalid or missing sign-in info.');
        return;
      }

      try {
        const res = await axios.post('http://localhost:8080/auth/email-link/verify', {
          email,
          link: window.location.href, // or tokenFromUrl if only token is passed
        });

        const { token, user } = res.data;
        login(token); // ⬅️ store token in localStorage and set user
        localStorage.removeItem('emailForSignIn');

        setMessage(`✅ Welcome back, ${user.name || user.email}!`);
        setTimeout(() => navigate('/course/private'), 2000);
      } catch (err) {
        console.error(err);
        setMessage(`❌ Error signing in: ${err.response?.data?.error || err.message}`);
      }
    };

    completeSignIn();
  }, [searchParams, navigate, login]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">🔄 Finishing Sign-In</h2>
        <p className="text-sm text-gray-700">{message || 'Please wait...'}</p>
      </div>
    </div>
  );
};

export default FinishSignIn;

