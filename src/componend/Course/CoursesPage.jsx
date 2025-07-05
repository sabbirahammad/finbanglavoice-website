import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import CourseFilterBar from './CourseFilterBar';
import CourseGrid from './CourseGrid';
import JournalistFooter from '../../pages/JournalistFooter';

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

const bannerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } },
};

const CoursesPage = () => {
  const location = useLocation();
  const stateCourse = location.state?.selectedCourse;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
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

  const filteredCourses = allCourses.filter((course) => {
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

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className={`pt-24 px-4 min-h-screen ${theme === 'light' ? 'bg-[#1A1A1A]' : theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-700' : 'bg-gradient-to-b from-blue-900 to-purple-900 animate-gradient-bg'}`}>
      <motion.section className="relative max-w-7xl mx-auto py-12 px-4 md:px-8 rounded-xl bg-white/10 dark:bg-gray-800/10 neon:bg-black/10 backdrop-blur-lg border border-transparent neon:border-cyan-500/30 mb-8" variants={bannerVariants} initial="hidden" animate="visible">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 className={`text-3xl md:text-5xl font-extrabold mb-4 ${theme === 'neon' ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 animate-glow' : 'text-gray-200 dark:text-gray-200'}`}>
              Discover Your Next Learning Adventure
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 neon:text-white/90 mb-6">
              <Typewriter
                words={['Learn New Skills', 'Master Your Passion', 'Achieve Your Goals']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Only show selected course if available */}
      {selectedCourse && (
          <motion.div className="bg-[#1A1A1A] rounded-2xl shadow-lg p-6 mb-8 border border-gray-800" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h2 className="text-2xl font-bold text-blue-500 mb-4">Selected Course</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <img src={selectedCourse.image} alt={selectedCourse.title} className="rounded-lg w-full h-60 object-cover" />
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{selectedCourse.title}</h3>
        <p className="text-gray-300 mb-2">{selectedCourse.description}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Subject:</strong> {selectedCourse.subject}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Level:</strong> {selectedCourse.level}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Lessons:</strong> {selectedCourse.lessons}</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Duration:</strong> {selectedCourse.durationHours} hrs</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Rating:</strong> {selectedCourse.rating} ⭐</p>
        <p className="text-sm text-gray-400 mb-1"><strong>Start Date:</strong> {selectedCourse.startDate}</p>
        <p className="text-sm text-blue-400 font-bold mt-2">{selectedCourse.price.display}</p>

        {/* ✅ Enroll Now Button */}
        <a
          href={`https://wa.me/+358409369708?text=Hi,%20I%20want%20to%20enroll%20in%20the%20"${encodeURIComponent(selectedCourse.title)}"%20course.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
            📱 WhatsApp
          </button>
        </a>
      </div>
    </div>
  </motion.div>
      )}

      {/* Show full course list only if no selected course */}
      {!selectedCourse && (
        <>
          <motion.div className="sticky top-20 z-10 bg-gray-950 dark:bg-gray-900/70 backdrop-blur-lg rounded-lg px-4 py-6 mb-8" variants={bannerVariants} initial="hidden" animate="visible">
            {/* <CourseFilterBar selected={selectedSubject} onSelect={setSelectedSubject} /> */}
          </motion.div>

          <CourseGrid courses={visibleCourses} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onCourseSelect={handleCourseSelect} />

          {filteredCourses.length > visibleCount && (
            <motion.div className="flex justify-center mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button onClick={handleLoadMore} className="px-6 py-3 text-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl hover:bg-gradient-to-r hover:from-cyan-600 hover:to-pink-600 transition-all duration-300">
                Load More Courses
              </button>
            </motion.div>
          )}
        </>
      )}

      <JournalistFooter />
    </div>
  );
};

export default CoursesPage;







