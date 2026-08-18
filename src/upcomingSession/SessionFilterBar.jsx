import React from 'react';
import { FaSearch, FaVideo } from 'react-icons/fa';

const SessionFilterBar = ({
  selectedMode,
  onModeChange,
  searchTerm,
  onSearchChange
}) => {
  const modes = ['All', 'Live Zoom', 'Interactive Webinar'];

  return (
    <div className="mb-8 p-4 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Mode Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
          Filter:
        </span>
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => onModeChange(mode)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedMode.toLowerCase() === mode.toLowerCase()
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-500'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/80'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search live sessions..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500 transition"
        />
      </div>
    </div>
  );
};

export default SessionFilterBar;
