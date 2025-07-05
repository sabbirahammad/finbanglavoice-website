import { useEffect, useState } from 'react';

// Optional: decode JWT
const decodeToken = (token) => {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (err) {
    console.error('Invalid token', err);
    return null;
  }
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded = decodeToken(token);

      // Optional expiry check (if exp exists)
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded?.exp && decoded.exp < currentTime) {
        console.warn('Token expired');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
      setUserInfo(decoded); // contains email, name, etc.
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return {
    isAuthenticated,
    user: userInfo,
    logout: () => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUserInfo(null);
    },
  };
};
