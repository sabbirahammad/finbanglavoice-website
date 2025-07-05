// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import CourseCard from './CourseCard';
// import CourseDetailsModal from './CourseDetailsModal';
// import CourseSearchBar from './CourseSearchBar';

// // Animation variants
// const gridVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } },
// };

// const CourseGrid = ({ courses, searchTerm, setSearchTerm }) => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = (course) => {
//     setSelectedCourse(course);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCourse(null);
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <motion.div
//         className="mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CourseSearchBar value={searchTerm} onChange={setSearchTerm} />
//       </motion.div>

//       {courses.length > 0 ? (
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           variants={gridVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {courses.map((course) => (
//             <motion.div key={course.id} variants={cardVariants} onClick={() => handleOpenModal(course)}>
//               <CourseCard course={course} />
//             </motion.div>
//           ))}
//         </motion.div>
//       ) : (
//         <motion.p
//           className="text-center text-gray-500 dark:text-gray-400 neon:text-cyan-300 mt-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           No courses found.
//         </motion.p>
//       )}

//       <CourseDetailsModal
//         course={selectedCourse}
//         isOpen={modalOpen}
//         onClose={handleCloseModal}
//       />
//     </>
//   );
// };

// export default CourseGrid;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/t.webp';

const FeaturedCourseCard = () => {
  const [language, setLanguage] = useState('bn');
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCourse({
      id: '2',
      image: image,
      badge: 'Top Rated',
      price: { amount: 150, currency: 'EUR', display: '€150' },
      rating: 4.5,
      lessons: 34,
      level: 'Beginner',
      title: {
        en: '🇫🇮 Practical Finnish Language Course in Bangla (Level 0–A2)',
        bn: '🇧🇩 বাংলায় প্রাকটিক্যাল ফিনিশ ভাষা কোর্স (স্তর ০ – A২)',
      },
      description: {
        en: 'Learn Finnish for daily life, job search, and official communication.',
        bn: 'দৈনন্দিন জীবন, চাকরি ও সরকারি কাজে ফিনিশ ভাষা শিখুন।',
      },
    });
  }, []);

  if (!course) return null;

  return (
    <section className="bg-gray-900 py-12 px-4 text-white min-h-screen">
      <div className="max-w-md mx-auto mt-10">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            className={`px-4 py-2 rounded-l ${language === 'en' ? 'bg-blue-600' : 'bg-gray-600'}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
          <button
            className={`px-4 py-2 rounded-r ${language === 'bn' ? 'bg-green-600' : 'bg-gray-600'}`}
            onClick={() => setLanguage('bn')}
          >
            বাংলা
          </button>
        </div>

        {/* Course Card */}
        <div className="bg-[#1A1A1A] rounded-xl shadow-md p-5">
          <img
            src={course.image}
            alt={course.title[language]}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold text-blue-400 mb-1">
            {course.title[language]}
          </h2>
          <p className="text-gray-300 text-sm mb-3">{course.description[language]}</p>

          <button
            onClick={() => navigate(`/coursedetiles/${course.id}`)}
            className="mt-2 text-sm text-blue-400 hover:underline"
          >
            📖 More Details →
          </button>

          <a
            href={`https://wa.me/+358409369708?text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(course.title.en)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all">
              📱 Enroll Now on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourseCard;



