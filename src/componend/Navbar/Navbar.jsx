import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/FinBangla-Voice-Logo_3.webp';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await fetch(
        'https://finbangla-voice-backend-production.up.railway.app/auth/google/login',
        {
          credentials: 'include',
          method: 'GET',
        }
      );
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

  const userName = user?.name || user?.email;
  const userImage = user?.picture;

  if (loading) return null;

  return (
    <header className="bg-[#1A1A1A] backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={image} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold text-indigo-600">FinBanglaVoice</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-gray-300 font-medium">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/media" className="hover:text-indigo-400">Media</Link>
          <Link to="/courses" className="hover:text-indigo-400">Courses</Link>
          <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
          <Link to="/session" className="hover:text-indigo-400">Session</Link>
          <Link to="/articles" className="hover:text-indigo-400">Article</Link>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                {userImage && (
                  <img
                    src={userImage}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                )}
                <span className="text-sm text-gray-300">{userName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 shadow-md">
          <nav className="flex flex-col gap-4 text-gray-300 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/media" onClick={() => setMenuOpen(false)}>Media</Link>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/articles" className="hover:text-indigo-400">Article</Link>

            {user ? (
              <>
                <div className="flex items-center gap-2">
                  {userImage && (
                    <img
                      src={userImage}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                  )}
                  <span className="text-sm text-gray-600">{userName}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 text-white text-center py-2 rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleGoogleLogin();
                  setMenuOpen(false);
                }}
                className="bg-indigo-600 text-white text-center py-2 rounded-full"
              >
                Login
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;









