import { COURSE_PRICE, BEGINNER_ENROLLMENT_URL } from '../../config/courses';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClipboardList, FaGraduationCap, FaCheckCircle, FaGlobe, FaCertificate, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Footer from './Footer';
import image from '../../assets/t.webp';

const CourseDetiles = () => {
  const [language, setLanguage] = useState('en');
  const { id } = useParams();

  const course = {
    id: id || '2',
    image: image,
    badge: 'Flagship Program',
    price: COURSE_PRICE,
    rating: 4.9,
    lessons: 24,
    duration: '3 Months (36 Hours Live)',
    level: 'Beginner (Level 0 – A2)',
    title: {
      en: 'Practical Finnish Language Course in Bangla (Level 0 – A2)',
      bn: 'বাংলায় প্রাকটিক্যাল ফিনিশ ভাষা কোর্স (স্তর ০ – A২)',
    },
    description: {
      en: 'An intensive, structured Finnish language program designed specifically for Bengali speakers living in Finland or planning to relocate.',
      bn: 'বাংলাভাষী শিক্ষার্থীদের দ্রুত ও কার্যকরভাবে ফিনিশ ভাষার মৌলিক ব্যবহার ও বাস্তব যোগাযোগ শেখানোর বিশেষ কোর্স।',
    },
    features: [
      '24 Comprehensive Live Interactive Classes over 3 Months',
      'Phonetics, Vowel Harmony & Everyday Spoken Finnish (Puhekieli)',
      'Official Authority Communication (Kela, TE-palvelut, Migri)',
      'Job Hunting, Resume Preparation & Workplace Finnish Vocabulary',
      'YKI National Finnish Language Test Foundation',
      'Course Completion Certificate & Lifetime Community Access'
    ],
    schedule: {
      en: '2 classes every weekend (Zoom Live with Dr. SM Shafiqul Alam)',
      bn: 'প্রতি সপ্তাহে ২টি লাইভ ক্লাস (সরাসরি ড. এস এম শফিকুল আলমের সঙ্গে)'
    },
    teacher: 'Dr. SM Shafiqul Alam (PhD, Professor & Senior Policy Researcher)'
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      <main className="py-14 flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Bar Navigation & Language Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              <FaArrowLeft className="text-[10px]" />
              <span>Back to All Courses</span>
            </Link>

            <div className="inline-flex items-center rounded-xl bg-slate-900 border border-slate-800 p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  language === 'bn'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>

          {/* Main Card */}
          <div className="rounded-3xl bg-[#0F172A] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-lg">
                  <img
                    src={course.image}
                    alt={course.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 text-xs font-semibold border border-blue-500/25">
                  <FaGraduationCap />
                  <span>{course.badge}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {course.title[language]}
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {course.description[language]}
                </p>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">Course Investment</span>
                    <span className="text-lg sm:text-xl font-black text-emerald-400">{course.price.display}</span>
                  </div>
                  <span className="text-xs text-slate-300">{course.duration}</span>
                </div>
              </div>
            </div>

            {/* Key Features & Syllabus Checklist */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <h2 className="text-lg font-bold text-white">What You Will Master:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-slate-800/30 border border-slate-800">
                    <FaCheckCircle className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor & CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span>Course Instructor: </span>
                <strong className="text-white">{course.teacher}</strong>
              </div>

              <a
                href={BEGINNER_ENROLLMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm text-center transition shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 active:scale-95"
              >
                <FaClipboardList className="text-base" />
                <span>Enroll via Google Form</span>
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetiles;
