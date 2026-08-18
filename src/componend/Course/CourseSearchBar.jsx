import React from 'react';
import { FaSearch } from 'react-icons/fa';

const CourseSearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
      <input
        type="text"
        placeholder="Search courses by keyword (e.g. Finnish, A1, Admission, University)..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition shadow-inner"
      />
    </div>
  );
};

export default CourseSearchBar;
