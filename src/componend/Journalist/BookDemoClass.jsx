// src/components/Course/BookDemoClass.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CalendarDays, Star } from 'lucide-react';

const BookDemoClass = () => {
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3000/courses`);
  //       // Only fetch courses where isFree is true
  //       const freeCourses = res.data.filter(course => course.isFree);
  //       setCourses(freeCourses.slice(0, 3)); // Limit to first 3 free courses
  //       setLoading(false);
  //     } catch (err) {
  //       console.error('Failed to fetch courses:', err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  // if (loading) return <div className="text-center py-10">Loading demo classes...</div>;

  const allCourses = [

    {
      "id": "2",
      "title": "Physics for Beginners",
      "subject": "Science",
      "level": "Class 8-10",
      "description": "Understand the laws of motion, energy, and more."
    },
    {
      "id": "3",
      "title": "English Writing Skills",
      "subject": "English",
      "level": "Class 6-9",
      "description": "Learn to write essays, letters, and improve grammar."
    },
    {
      "id": "4",
      "title": "Bangla Grammar Boost",
      "subject": "Bangla",
      "level": "Class 6-8",
      "description": "Master Bangla grammar through rules and fun practice.",
      "isFree": true
    },
    {
      "id": "6089",
      "title": "dsa",
      "subject": "dfa",
      "level": "fdas",
      "description": "fasdfa",
      "rating": "afsd",
      "enrolled": "dfasd",
      "badge": "fdsa",
      "startDate": "0003-03-04",
      "isFree": true
    },
    {
      "id": "5d4b",
      "title": "Finlend language",
      "subject": "language",
      "level": "All",
      "description": "hi,this course very good",
      "rating": "6",
      "enrolled": "",
      "badge": "free",
      "startDate": "2023-03-04",
      "isFree": true
    }
  ]

  const courses = allCourses.filter(course => course.isFree).slice(0, 3);

  if (!courses.length) {
    return <div className="text-center py-10 text-gray-500">No free demo classes available.</div>;
  }

  return (
    <section className="px-4 sm:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-8">
        🎓 Free Demo Classes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition hover:shadow-lg"
          >
            <div>
              {/* Title and badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.subject} • {course.level}</p>
                </div>
                {course.badge && (
                  <span className="mt-2 sm:mt-0 bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                    🎖 {course.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  👥 <span>{course.enrolled}+ Enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>Starts on {course.startDate}</span>
                </div>
              </div>
            </div>

            {/* Call-to-action */}
            <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 rounded-xl transition duration-200">
              📚 Book Free Demo Class
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookDemoClass;


