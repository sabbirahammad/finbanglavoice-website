// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const decodeToken = (token) => {
    try {
      const payload = token.split('.')[1];
      let base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      base64 += '='.repeat((4 - base64.length % 4) % 4); // padding যোগ করা
      const decodedPayload = atob(base64);
      return JSON.parse(decodedPayload);
    } catch (err) {
      console.error('Failed to decode token:', err);
      return null;
    }
  };

  const isTokenExpired = (decoded) => {
    if (!decoded?.exp) return true;
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp < now;
  };

  const login = async (jwtToken, userInfo = null) => {
    try {
      const decoded = decodeToken(jwtToken);
      if (!decoded || isTokenExpired(decoded)) {
        logout();
        return Promise.reject('Token expired or invalid');
      }

      localStorage.setItem('token', jwtToken);

      const finalUser = userInfo || {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture || null,
      };

      localStorage.setItem('user', JSON.stringify(finalUser));
      setUser(finalUser);
      console.log('User set in context:', finalUser);

      return Promise.resolve();
    } catch (err) {
      console.error('Login error:', err);
      return Promise.reject(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token) {
      const decoded = decodeToken(token);

      if (!decoded || isTokenExpired(decoded)) {
        logout();
      } else {
        setUser(
          storedUser
            ? JSON.parse(storedUser)
            : {
                email: decoded.email,
                name: decoded.name,
                picture: decoded.picture || null,
              }
        );
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
      else setUser(null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);








