// src/components/UpcomingSessions/SessionBanner.jsx
import React from 'react';
import { PlayCircle } from 'lucide-react';

const SessionBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#e0f2fe] via-white to-[#ede9fe] rounded-2xl overflow-hidden shadow-md mb-10">
      {/* Background Circle Graphics (optional) */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-16 text-center">
        <div className="inline-flex items-center gap-2 text-blue-700 text-sm font-medium bg-blue-100 px-4 py-1 rounded-full mb-4 animate-fadeInUp">
          <PlayCircle className="w-4 h-4" /> Live & Interactive
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight animate-fadeInUp">
          Live Sessions
        </h1>

        <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto animate-fadeInUp delay-100">
          Join expert-led, real-time sessions designed to level up your learning. Stay prepared, stay ahead.
        </p>
      </div>
    </section>
  );
};

export default SessionBanner;
