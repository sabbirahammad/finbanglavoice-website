import React from 'react';

const CourseSearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search courses by title or subject..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 hover:text-white"
      />
    </div>
  );
};

export default CourseSearchBar;
