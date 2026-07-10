import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import CourseGrid from './CourseGrid';
import JournalistFooter from '../../pages/JournalistFooter';
import { API_BASE_URL } from '../../config/api';

import image from '../../assets/t.webp';

const allCourses = [
  {
    id: "2",
    title: "Finnish Language Course",
    subject: "Language",
    level: "Beginner",
    description: "Learn the basics of the Finnish language, including pronunciation, and everyday conversation.",
    price: { amount: 49, currency: "EUR", display: "€49" },
    lessons: 24,
    durationHours: 12,
    rating: 4.5,
    enrolled: 1200,
    badge: "Top Rated",
    startDate: "2025-07-15",
    image: image,
  },
  {
    id: "3",
    title: "Climate Change",
    subject: "Environmental Science",
    level: "Beginner",
    description: "A comprehensive introduction to the science of climate change, its impacts, and actions to address the crisis.",
    price: { amount: 79, currency: "EUR", display: "€79" },
    lessons: 18,
    durationHours: 10,
    rating: 4.8,
    enrolled: 850,
    badge: "Best Seller",
    startDate: "2025-08-01",
    image: image,
  },
  {
    id: "4",
    title: "Sustainability Course",
    subject: "Sustainability & Environment",
    level: "Intermediate",
    description: "Explore the core principles of sustainability, addressing environmental, social, and economic dimensions.",
    price: { amount: 69, currency: "EUR", display: "€69" },
    lessons: 20,
    durationHours: 11,
    rating: 4.2,
    enrolled: 600,
    badge: "New",
    startDate: "2025-07-20",
    image: image,
  },
];

const CoursesPage = () => {
  const location = useLocation();
  const stateCourse = location.state?.selectedCourse;

  const [courses, setCourses] = useState(allCourses);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [courseError, setCourseError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : document.documentElement.classList.contains('neon')
      ? 'neon'
      : 'light';
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (stateCourse) {
      setSelectedCourse(stateCourse);
    }
  }, [stateCourse]);

  useEffect(() => {
    const loadCourses = async () => {
      setLoadingCourses(true);
      setCourseError('');

      try {
        const response = await fetch(`${API_BASE_URL}/api/courses`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Failed to load courses');
        }

        const courseList = Array.isArray(data) ? data : data?.courses || [];
        const mappedCourses = courseList.map((course) => ({
          id: String(course.id),
          title: course.course_name || 'Untitled Course',
          subject: course.course_details?.session_mode || 'Course',
          level: course.course_details?.duration || 'Available',
          description: course.course_details?.session_overview || 'Course details coming soon.',
          price: {
            amount: course.course_details?.total_fee || course.course_details?.rate || '',
            currency: 'EUR',
            display:
              course.course_details?.total_fee ||
              course.course_details?.rate ||
              'Contact for fee',
          },
          lessons: course.course_details?.material || '',
          durationHours: course.course_details?.duration || '',
          rating: 0,
          enrolled: 0,
          badge: course.course_details?.session_mode || '',
          startDate: course.course_details?.schedule || '',
          image: course.instructor?.photo_url || image,
          enrollment: course.enrollment,
          contact: course.contact,
          rawCourse: course,
        }));

        setCourses(mappedCourses.length ? mappedCourses : allCourses);
      } catch (error) {
        console.error('Failed to load courses:', error);
        setCourseError('Could not load backend courses. Showing default courses.');
        setCourses(allCourses);
      } finally {
        setLoadingCourses(false);
      }
    };

    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSubject =
      selectedSubject === 'all' || course.subject.toLowerCase() === selectedSubject;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className={`pt-24 px-4 min-h-screen ${theme === 'light' ? 'bg-[#1A1A1A]' : theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-700' : 'bg-gradient-to-b from-blue-900 to-purple-900 animate-gradient-bg'}`}>
      <section className="relative max-w-7xl mx-auto py-12 px-4 md:px-8 rounded-xl bg-white/10 dark:bg-gray-800/10 neon:bg-black/10 backdrop-blur-lg border border-transparent neon:border-cyan-500/30 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className={`text-3xl md:text-5xl font-extrabold mb-4 ${theme === 'neon' ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 animate-glow' : 'text-gray-200 dark:text-gray-200'}`}>
              Discover Your Next Learning Adventure
            </h1>
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 neon:text-white/90 mb-6">
              <Typewriter
                words={['Learn New Skills', 'Master Your Passion', 'Achieve Your Goals']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Only show selected course if available */}
      {selectedCourse && (
          <div className="bg-[#1A1A1A] rounded-2xl shadow-lg p-6 mb-8 border border-gray-800">
    <h2 className="text-2xl font-bold text-blue-500 mb-4">Selected Course</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white/5">
        <img
          src={selectedCourse.image || image}
          alt={selectedCourse.title}
          className="h-full w-full object-cover object-center"
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== image) {
              event.currentTarget.src = image;
            }
          }}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{selectedCourse.title}</h3>
        <p className="text-gray-300 mb-2">{selectedCourse.description}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Subject:</strong> {selectedCourse.subject}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Level:</strong> {selectedCourse.level}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Lessons:</strong> {selectedCourse.lessons}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Duration:</strong> {selectedCourse.durationHours} hrs</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Rating:</strong> {selectedCourse.rating} ⭐</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Start Date:</strong> {selectedCourse.startDate}</p>
        <p className="text-sm text-blue-400 font-bold mt-2">{selectedCourse.price?.display}</p>

        {/* ✅ Enroll Now Button */}
        <a
          href={
            selectedCourse.enrollment?.url ||
            `https://wa.me/+358409369708?text=Hi,%20I%20want%20to%20enroll%20in%20the%20"${encodeURIComponent(selectedCourse.title)}"%20course.`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
            📱 WhatsApp
          </button>
        </a>
      </div>
    </div>
  </div>
      )}

      {/* Show full course list only if no selected course */}
      {!selectedCourse && (
        <>
          {loadingCourses && (
            <p className="mb-4 text-center text-sm text-gray-300">Loading courses...</p>
          )}
          {courseError && (
            <p className="mb-4 rounded-lg bg-yellow-100 px-4 py-3 text-sm text-yellow-800">
              {courseError}
            </p>
          )}
          <div className="sticky top-20 z-10 bg-gray-950 dark:bg-gray-900/70 backdrop-blur-lg rounded-lg px-4 py-6 mb-8" />

          <CourseGrid courses={visibleCourses} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {filteredCourses.length > visibleCount && (
            <div className="flex justify-center mt-8">
              <button onClick={handleLoadMore} className="px-6 py-3 text-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl hover:bg-gradient-to-r hover:from-cyan-600 hover:to-pink-600 transition-all duration-300">
                Load More Courses
              </button>
            </div>
          )}
        </>
      )}

      <JournalistFooter />
    </div>
  );
};

export default CoursesPage;



