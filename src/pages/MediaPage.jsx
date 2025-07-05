import React, { useState, lazy, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Lazy load icons
const LazyFaFacebookF = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaFacebookF })));
const LazyFaTwitter = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaTwitter })));
const LazyFaInstagram = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaInstagram })));
const LazyFaLinkedinIn = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedinIn })));
const LazyFaYoutube = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaYoutube })));
const LazyFaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));

const socialLinks = [
  {
    name: 'Facebook',
    icon: <LazyFaFacebookF />,
    url: 'https://www.facebook.com/profile.php?id=61560033836918',
    color: 'bg-blue-600 hover:bg-blue-700',
    stats: { followers: '1.2M', posts: '5K' },
  },
  {
    name: 'Twitter',
    icon: <LazyFaTwitter />,
    url: 'https://www.instagram.com/finbanglavoice2024/',
    color: 'bg-sky-500 hover:bg-sky-600',
    stats: { followers: '850K', posts: '10K' },
  },
  {
    name: 'Instagram',
    icon: <LazyFaInstagram />,
    url: 'https://www.instagram.com/finbanglavoice2024/',
    color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700',
    stats: { followers: '2.5M', posts: '8K' },
  },
  {
    name: 'LinkedIn',
    icon: <LazyFaLinkedinIn />,
    url: 'https://linkedin.com',
    color: 'bg-blue-700 hover:bg-blue-800',
    stats: { followers: '500K', posts: '2K' },
  },
  {
    name: 'YouTube',
    icon: <LazyFaYoutube />,
    url: 'https://www.youtube.com/@FinBanglaVoice',
    color: 'bg-red-600 hover:bg-red-700',
    stats: { followers: '3M', posts: '1.5K' },
  },
  {
    name: 'GitHub',
    icon: <LazyFaGithub />,
    url: 'https://www.youtube.com/@FinBanglaVoice',
    color: 'bg-gray-800 hover:bg-gray-900',
    stats: { followers: '400K', posts: 'N/A' },
  },
];

const themes = {
  light: 'bg-gradient-to-br from-indigo-100 to-purple-100',
  dark: 'bg-gray-900',
  neon: 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900',
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
  click: { scale: 0.9, transition: { duration: 0.2, ease: 'easeInOut' } },
};

const SocialMediaLinks = () => {
  const [theme, setTheme] = useState('light');
  const [shareCounts, setShareCounts] = useState(socialLinks.map(() => 0));
  const audioRef = useRef(new Audio('https://cdn.pixabay.com/audio/2023/01/18/audio_6c4184b5c7.mp3'));

  const handleClick = (index) => {
    audioRef.current.play().catch(() => {});
    setShareCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark', 'neon');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-6 ${themes[theme]} animate-gradient-bg`}>
      <div className="w-full max-w-3xl bg-white/20 dark:bg-gray-800/20 neon:bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 neon:from-pink-500 neon:to-cyan-500 ${theme === 'neon' ? 'animate-glow' : ''}`}>
            Connect with Us
          </h2>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 neon:bg-black/50 text-gray-800 dark:text-gray-200 neon:text-cyan-300 border border-gray-300 dark:border-gray-600 neon:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Select theme"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="neon">Neon</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          <Suspense fallback={<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 dark:bg-gray-700 neon:bg-black/50 animate-pulse" />}>
            <AnimatePresence>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={iconVariants}
                  whileTap="click"
                  className="relative group"
                >
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    scale={1.1}
                    transitionSpeed={400}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleClick(index)}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-[0_4px_10px_rgba(0,0,0,0.3)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.5)] neon:shadow-[0_4px_10px_rgba(0,255,255,0.3)] transition-transform ${social.color}`}
                      aria-label={`Visit our ${social.name} page`}
                    >
                      {social.icon}
                    </a>
                  </Tilt>
                  <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 dark:bg-gray-600 neon:bg-black/70 text-white neon:text-cyan-300 text-xs rounded py-1 px-2 text-center">
                    {social.name}
                    <br />
                    {social.stats.followers} Followers
                    <br />
                    {social.stats.posts} Posts
                  </span>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-300 neon:text-cyan-400">
                    {/* {shareCounts[index]} Shares */}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

