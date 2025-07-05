import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      login(token)
        .then(() => {
          console.log('Login success, navigating to home');
          navigate('/');
        })
        .catch((err) => {
          console.log('Login failed:', err);
          navigate('/login');
        });
    } else {
      navigate('/');
    }
  }, [navigate, login]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-700 text-lg">Redirecting...</p>
    </div>
  );
};

export default GoogleSuccess;

