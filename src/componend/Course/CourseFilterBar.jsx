import React from 'react';

const CourseFilterBar = ({ selected, onSelect }) => {
  const filters = [
    { label: 'All Programs', key: 'all' },
    { label: 'Finnish Language', key: 'language' },
    { label: 'Higher Education in Finland', key: 'education' },
    { label: 'Masterclasses & Workshops', key: 'masterclass' },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
        {filters.map((filter) => {
          const isSelected = selected.toLowerCase() === filter.key.toLowerCase();
          return (
            <button
              key={filter.key}
              onClick={() => onSelect(filter.key)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/80'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFilterBar;
