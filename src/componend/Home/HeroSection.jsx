import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import CountUp from 'react-countup';

// ✅ Image import (compressed WebP recommended)
import imaze1 from '../../assets/c.webp';

const heroData = {
  badge: '🔴 Live Sessions Every Week',
  title: 'Your Personal Guide to',
  highlight: 'Smarter Learning',
  taglines: [
    { text: 'Master concepts', color: 'text-yellow-300' },
    { text: 'Excel in exams', color: 'text-cyan-300' },
    { text: 'Build confidence', color: 'text-pink-300' },
    { text: 'Join the community', color: 'text-green-300' },
  ],
  primaryButton: { text: '📚 Browse Courses', link: '/courses' },
  secondaryButton: { text: '🎯Sessions', link: '/session' },
  stats: [
    { value: 5000, label: 'Students' },
    { value: 150, label: 'Courses' },
    { value: 300, label: 'Live Sessions' },
  ],
};

const HeroSection = () => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : document.documentElement.classList.contains('neon')
      ? 'neon'
      : 'light';
    setTheme(currentTheme);
    setIsMounted(true);

    // Check for mobile screen
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  if (!isMounted) return null;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${imaze1})` }}
    >
      {/* ✨ Particle Effects (disabled on mobile) */}
      {!isMobile && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 50 },
              color: { value: theme === 'neon' ? '#00e5ff' : '#ffffff' },
              shape: { type: 'circle' },
              opacity: { value: 0.5, random: true },
              size: { value: { min: 1, max: 4 } },
              move: { enable: true, speed: 1.5, random: true },
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
              },
              modes: {
                repulse: { distance: 100 },
                push: { quantity: 4 },
              },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* 🚀 Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-white/20 dark:bg-gray-800/20 neon:bg-black/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 neon:border-cyan-500/50 text-center transition hover:scale-105 hover:shadow-2xl mt-[-100px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block bg-white text-blue-700 dark:text-gray-200 neon:text-cyan-300 text-sm px-4 py-1 rounded-full mb-6 shadow-md">
          {heroData.badge}
        </div>

        <h1
          className={`text-4xl md:text-6xl font-extrabold mb-4 leading-tight ${
            theme === 'neon'
              ? 'animate-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500'
              : 'text-white'
          }`}
        >
          {heroData.title}{' '}
          <span className="underline decoration-yellow-400 underline-offset-4">
            {heroData.highlight}
          </span>{' '}
          🎓
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mb-8">
          <Typewriter
            words={heroData.taglines.map((tag) => tag.text)}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {heroData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 neon:text-cyan-300">
                <CountUp end={stat.value} duration={2} separator="," />
              </div>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to={heroData.primaryButton.link}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
          >
            {heroData.primaryButton.text}
          </Link>
          <Link
            to={heroData.secondaryButton.link}
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition"
          >
            {heroData.secondaryButton.text}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
