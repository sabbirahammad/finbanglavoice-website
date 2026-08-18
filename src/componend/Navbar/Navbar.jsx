import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/FinBangla-Voice-Logo_3.webp';
import { useAuth } from '../../context/AuthContext';
import { API_BASE_URL } from '../../config/api';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/google/login`, {
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

  const userName = user?.name || user?.email;
  const userImage = user?.picture;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Live Sessions', path: '/session' },
    { name: 'Articles', path: '/articles' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  if (loading) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 p-1 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:border-blue-400/50 transition-all">
            <img src={logoImage} alt="FinBangla Voice Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent group-hover:to-cyan-300 transition">
              FinBangla<span className="text-blue-500 font-black">Voice</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400/90 -mt-1">
              Finland & Bangladesh Bridge
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600/20 border border-blue-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action / Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/358409369708?text=Hello%20FinBangla%20Voice%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Finnish%20courses%20and%20consultations."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/20 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            WhatsApp
          </a>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">
                {userImage && (
                  <img
                    src={userImage}
                    alt={userName}
                    className="w-6 h-6 rounded-full object-cover border border-blue-400"
                  />
                )}
                <span className="text-xs font-medium text-slate-200 max-w-[120px] truncate">
                  {userName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 active:scale-95"
            >
              <span>Sign In</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1120] border-b border-slate-800 px-5 py-5 space-y-3 animate-fadeInUp">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'text-white bg-blue-600/20 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="https://wa.me/358409369708?text=Hello%20FinBangla%20Voice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
            >
              <span>💬 Direct WhatsApp (+358 40 9369708)</span>
            </a>

            {user ? (
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  {userImage && (
                    <img
                      src={userImage}
                      alt={userName}
                      className="w-7 h-7 rounded-full object-cover border border-blue-400"
                    />
                  )}
                  <span className="text-xs text-slate-300">{userName}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-xs px-3 py-1.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleGoogleLogin();
                  setMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition text-center"
              >
                Sign In with Google
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;






