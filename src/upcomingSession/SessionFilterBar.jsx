// src/components/UpcomingSessions/SessionFilterBar.jsx
import React from 'react';

const SessionFilterBar = ({
  selectedMode,
  onModeChange,
  instructors,
  selectedInstructor,
  onInstructorChange,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-4 rounded-xl shadow-sm">
      {/* Left side: Mode buttons + Instructor */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Mode:</label>
          {['All', 'Live Zoom', 'Google Meet'].map((mode) => (
            <button
              key={mode}
              onClick={() => onModeChange(mode)}
              className={`text-sm px-3 py-1 rounded-full border transition ${
                selectedMode === mode
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Instructor:</label>
          <select
            value={selectedInstructor}
            onChange={(e) => onInstructorChange(e.target.value)}
            className="text-sm px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="All">All</option>
            {instructors.map((inst, idx) => (
              <option key={idx} value={inst}>
                {inst}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right side: Search Input */}
      <div className="w-full lg:w-64">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search sessions..."
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>
    </div>
  );
};

export default SessionFilterBar;

