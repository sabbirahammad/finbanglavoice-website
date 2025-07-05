import React from 'react';

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    try {
      const res = await fetch('https://finbangla-voice-backend-production.up.railway.app/auth/google/login', {
        credentials: 'include',
        method: 'GET',
      });
      const data = await res.json();
      if (data.auth_url) {
        window.location.href = data.auth_url;
      } else {
        alert('Auth URL not received');
      }
    } catch (err) {
      console.error('Google login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Login with Google</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;







