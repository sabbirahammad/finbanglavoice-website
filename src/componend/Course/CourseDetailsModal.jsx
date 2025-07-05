import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseDetailsModal = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{course.title}</h2>
          <p className="text-sm text-gray-500 mb-1">{course.level} • {course.subject}</p>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <ul className="text-gray-600 text-sm list-disc pl-5 mb-4">
            <li>Access to recorded classes</li>
            <li>PDF notes included</li>
            <li>Weekly quizzes</li>
          </ul>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            ✅ Enroll in this Course
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CourseDetailsModal;
