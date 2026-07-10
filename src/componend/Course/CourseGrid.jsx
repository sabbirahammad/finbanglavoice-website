import React from 'react';
import CourseCard from './CourseCard';
import CourseSearchBar from './CourseSearchBar';

const CourseGrid = ({ courses, searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="mb-6">
        <CourseSearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">
          No courses found.
        </p>
      )}
    </>
  );
};

export default CourseGrid;

