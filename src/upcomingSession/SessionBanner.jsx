import React from 'react';
import { FaVideo, FaBroadcastTower, FaCalendarCheck } from 'react-icons/fa';

const SessionBanner = () => {
  return (
    <section className="relative w-full rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-blue-500/30 overflow-hidden shadow-2xl p-8 sm:p-12 mb-10">
      {/* Background Lighting */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <FaBroadcastTower className="text-xs" />
          <span>Real-Time Interactive Zoom Events</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Upcoming <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">Live Masterclasses</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Participate in live interactive Zoom workshops on Finnish language pronunciation, admission application walkthroughs, and Q&A sessions with <strong>Dr. SM Shafiqul Alam</strong>.
        </p>
      </div>
    </section>
  );
};

export default SessionBanner;
