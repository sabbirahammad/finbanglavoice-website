import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RatingStars from './RatingStars';
import CourseBadge from './CourseBadge';
import CourseStartBadge from './CourseStartBadge';

// Animation variants
const cardVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
};

const CourseCard = ({ course, onRemoveFromWishlist }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
    setIsSaved(saved.includes(course.id));
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : document.documentElement.classList.contains('neon')
      ? 'neon'
      : 'light';
    setTheme(currentTheme);
  }, [course.id]);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
    let updated;
    if (saved.includes(course.id)) {
      updated = saved.filter((id) => id !== course.id);
    } else {
      updated = [...saved, course.id];
    }
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setIsSaved(!isSaved);
  };

  return (
    <Link to={`/course/${course.id}`} className="block group">
      <motion.div
        className={`rounded-xl p-4 h-full bg-[#1A1A1A] dark:bg-gray-800/10 neon:bg-black/10 backdrop-blur-lg border border-transparent neon:border-cyan-500/30 transition-all ${
          theme === 'neon' ? 'hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]' : 'hover:shadow-lg'
        }`}
        variants={cardVariants}
        whileHover="hover"
      >
        {/* Course Image */}
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Badge */}
        {course.badge && <CourseBadge label={course.badge} />}

        {/* Title + Wishlist Icon */}
        <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-200 neon:text-cyan-300 mb-1 flex items-center justify-between">
          {course.title}
          <motion.button
            onClick={toggleSave}
            className="text-xl"
            title={isSaved ? 'Remove from Wishlist' : 'Save to Wishlist'}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className={isSaved ? 'text-pink-500' : 'text-gray-400 neon:text-cyan-400'}>
              {isSaved ? '💖' : '🤍'}
            </span>
          </motion.button>
        </h3>

        {/* Start Date */}
        {course.startDate && (
          <div className="mb-2">
            <CourseStartBadge startDate={course.startDate} />
          </div>
        )}

        {/* Subject & Level */}
        <p className="text-sm text-gray-500 dark:text-gray-400 neon:text-white/80 mb-1">
          {course.level} • {course.subject}
        </p>

        {/* Lessons & Duration */}
        {(course.lessons || course.durationHours) && (
          <p className="text-sm text-gray-500 dark:text-gray-400 neon:text-white/80 mb-1">
            {course.lessons ? `${course.lessons} Lessons` : ''}
            {course.lessons && course.durationHours ? ' • ' : ''}
            {course.durationHours ? `${course.durationHours} hours` : ''}
          </p>
        )}

        {/* Rating & Enrolled */}
        <div className="flex items-center gap-2 mb-2">
          <RatingStars rating={course.rating} />
          <span className="text-sm text-gray-500 dark:text-gray-400 neon:text-white/80">
            ({course.enrolled} enrolled)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 neon:text-white/90 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Price */}
        {course.price && (
          <p className="text-base font-semibold text-blue-600 dark:text-blue-400 neon:text-cyan-400 mb-4">
            {course.price.display || `€${course.price.amount}`}
          </p>
        )}

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/course/private"
            className={`block px-4 py-2 rounded-full text-sm font-semibold transition text-center ${
              theme === 'neon'
                ? 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 animate-pulse text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Enroll Now
          </Link>
        </motion.div>

        {/* Remove from Wishlist */}
        {onRemoveFromWishlist && (
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemoveFromWishlist(course.id);
            }}
            className="mt-2 text-sm text-red-600 hover:text-red-700 neon:text-pink-400 neon:hover:text-pink-300 underline"
            whileHover={{ scale: 1.05 }}
          >
            🗑️ Remove from Wishlist
          </motion.button>
        )}
      </motion.div>
    </Link>
  );
};

export default CourseCard;








