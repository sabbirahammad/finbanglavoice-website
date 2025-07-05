import React from 'react';

const CourseFilterBar = ({ selected, onSelect }) => {
  const filters = ['All', 'Language', 'Environmental Science', 'Sustainability & Environment'];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap gap-3 mb-6 px-2 sm:px-0">
        {filters.map((filter) => {
          const filterKey = filter.toLowerCase();
          return (
            <button
              key={filter}
              onClick={() => onSelect(filterKey)}
              className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                selected === filterKey
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#1A1A1A] text-gray-300 hover:bg-gray-900'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFilterBar;


