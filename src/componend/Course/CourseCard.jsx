import { COURSE_PRICE, BEGINNER_ENROLLMENT_URL, isBeginnerCourse } from '../../config/courses';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaClock,
  FaCalendarAlt,
  FaWhatsapp,
  FaClipboardList,
  FaArrowRight,
  FaHeart,
  FaRegHeart,
  FaCheckCircle,
  FaEuroSign,
  FaChalkboardTeacher
} from 'react-icons/fa';
import fallbackImage from '../../assets/t.webp';

const CourseCard = ({ course, onRemoveFromWishlist }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
    setIsSaved(saved.includes(course.id));
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

  const beginner = isBeginnerCourse(course);
  const enrollUrl = beginner ? BEGINNER_ENROLLMENT_URL : `https://wa.me/358409369708?text=${encodeURIComponent(
    `Hi Dr. SM Shafiqul Alam, I would like to enroll in the course: "${course.title || course.course_name}".`
  )}`;

  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0F172A] shadow-xl hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10 group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Banner / Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={course.image || fallbackImage}
          alt={course.title}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== fallbackImage) {
              e.currentTarget.src = fallbackImage;
            }
          }}
        />

        {/* Level / Badge overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {course.badge && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-md shadow-md">
              {course.badge}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-slate-700">
            {course.level || 'Beginner'}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleSave}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 hover:text-rose-400 transition"
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          {isSaved ? <FaHeart className="text-rose-500 text-sm" /> : <FaRegHeart className="text-sm" />}
        </button>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        
        {/* Title */}
        <Link to={`/course/${course.id}`}>
          <h3 className="text-lg sm:text-xl font-bold leading-snug text-white group-hover:text-cyan-300 transition">
            {course.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
          {course.description || 'Comprehensive curriculum with live interactive lectures and practical exercises.'}
        </p>

        {/* Key Info Pill Box */}
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2 text-xs text-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FaClock className="text-blue-400" /> Duration:
            </span>
            <span className="font-semibold text-slate-200">{course.durationHours ? `${course.durationHours} Hours` : '3 Months'}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FaEuroSign className="text-emerald-400" /> Course Fee:
            </span>
            <span className="font-bold text-emerald-400 text-sm">
              {COURSE_PRICE.display}
            </span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-2.5 pt-1">
          <FaChalkboardTeacher className="text-blue-400 text-sm" />
          <span className="text-xs text-slate-300 font-medium">
            Instructor: <strong className="text-white">Dr. SM Shafiqul Alam</strong>
          </span>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-2 gap-3 pt-3 mt-auto border-t border-slate-800/80">
          <a
            href={enrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
          >
            {beginner ? <FaClipboardList className="text-sm" /> : <FaWhatsapp className="text-sm" />}
            <span>Enroll</span>
          </a>

          <Link
            to={`/course/${course.id}`}
            className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs text-center transition-all border border-slate-700 flex items-center justify-center gap-1"
          >
            <span>Syllabus</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        {/* Optional Wishlist Removal */}
        {onRemoveFromWishlist && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemoveFromWishlist(course.id);
            }}
            className="text-[11px] text-rose-400 hover:underline text-center pt-1"
          >
            Remove from saved list
          </button>
        )}

      </div>
    </motion.article>
  );
};

export default CourseCard;
