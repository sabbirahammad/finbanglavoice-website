import React from 'react';

const badgeColors = {
  'Best Seller': 'bg-green-100 text-green-800',
  'New': 'bg-yellow-100 text-yellow-800',
  'Free': 'bg-blue-100 text-blue-800',
};

const CourseBadge = ({ label }) => {
  return (
    <span
      className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
        badgeColors[label] || 'bg-gray-200 text-gray-700'
      }`}
    >
      {label}
    </span>
  );
};

export default CourseBadge;
