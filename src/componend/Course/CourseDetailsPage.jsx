import { COURSE_PRICE, BEGINNER_ENROLLMENT_URL, isBeginnerCourse } from '../../config/courses';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaClock,
  FaCalendarAlt,
  FaWhatsapp,
  FaClipboardList,
  FaArrowLeft,
  FaCheckCircle,
  FaBookOpen,
  FaVideo,
  FaFilePdf,
  FaChalkboardTeacher,
  FaEuroSign,
  FaAward,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import Footer from '../Home/Footer';
import { API_BASE_URL } from '../../config/api';
import fallbackImage from '../../assets/t.webp';
import { getCourseSyllabus, ALL_SYLLABUSES } from '../../config/courseSyllabus';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(() => getCourseSyllabus(id));
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  useEffect(() => {
    const syllabus = getCourseSyllabus(id);
    setCourse(syllabus);
    setOpenModuleIndex(0);

    // Fetch latest details from backend if dynamic course
    const fetchDynamic = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/courses/${id}`);
        const data = await res.json();
        if (res.ok && data) {
          const c = data.course || data;
          const matchedSyllabus = getCourseSyllabus(c.id ? c : id);
          setCourse({
            id: c.id || id,
            title: c.course_name || matchedSyllabus.title,
            level: c.course_details?.level || matchedSyllabus.level,
            tagline: c.course_details?.session_overview || matchedSyllabus.tagline,
            duration: c.course_details?.duration || matchedSyllabus.duration,
            schedule: c.course_details?.schedule || matchedSyllabus.schedule,
            fee: c.course_details?.total_fee || matchedSyllabus.fee || COURSE_PRICE.display,
            enrollUrl: c.enrollment?.url || matchedSyllabus.enrollUrl,
            instructor: {
              name: c.instructor?.name || matchedSyllabus.instructor?.name || 'Dr. SM Shafiqul Alam',
              title: c.instructor?.bio || matchedSyllabus.instructor?.title || 'Professor, Senior Researcher & Finnish Education Ambassador',
              bio: c.instructor?.bio || matchedSyllabus.instructor?.bio || 'Leading educator and researcher bridging Bangladesh and Finland.',
              image: c.instructor?.photo_url || matchedSyllabus.instructor?.image || fallbackImage,
            },
            modules: matchedSyllabus.modules,
            features: matchedSyllabus.features,
            practiceDetails: matchedSyllabus.practiceDetails,
            summaryInfo: matchedSyllabus.summaryInfo,
          });
        }
      } catch (err) {
        console.error('Failed to load course details from API, using default syllabus:', err);
      }
    };

    fetchDynamic();
  }, [id]);

  const toggleModule = (idx) => {
    setOpenModuleIndex(openModuleIndex === idx ? null : idx);
  };

  const beginner = isBeginnerCourse(course);
  const enrollUrl =
    course.enrollUrl ||
    (beginner
      ? BEGINNER_ENROLLMENT_URL
      : `https://wa.me/358409369708?text=${encodeURIComponent(
          `Hello Dr. SM Shafiqul Alam, I would like to enroll in "${course.title}". Please send me batch details and enrollment steps.`
        )}`);
  const isGoogleForm = Boolean(enrollUrl && enrollUrl.includes('docs.google.com/forms'));


  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Header Banner */}
      <section className="py-14 bg-gradient-to-b from-[#0F172A] to-[#0B1120] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <FaArrowLeft className="text-[10px]" />
            <span>Back to All Courses</span>
          </Link>

          <div className="space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>{course.level}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {course.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <FaClock className="text-cyan-400" />
                <span>{course.duration}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <FaCalendarAlt className="text-blue-400" />
                <span>{course.schedule}</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Course Overview & Benefits */}
              <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-6 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <FaBookOpen className="text-blue-400 text-lg" />
                  <span>Program Key Features</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheckCircle className="text-emerald-400 text-sm shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum & Syllabus Accordion */}
              <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                    <FaFilePdf className="text-cyan-400 text-lg" />
                    <span>Curriculum & Syllabus Modules</span>
                  </h2>
                  <span className="text-xs text-slate-400 font-medium">
                    {course.modules.length} Modules / Classes
                  </span>
                </div>

                <div className="space-y-3.5">
                  {course.modules.map((mod, idx) => {
                    const isOpen = openModuleIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-slate-800/60 border border-slate-700/60 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-700/40 transition cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-bold text-white pr-4">
                            {mod.title}
                          </span>
                          <span className="text-slate-400 text-xs">
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 border-t border-slate-700/60 space-y-2">
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                              {mod.topics.map((t, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Practice Guidelines & Objectives (if available) */}
              {course.practiceDetails && (
                <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-6 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                    <FaClipboardList className="text-emerald-400 text-lg" />
                    <span>অনুশীলন ও কোর্সের লক্ষ্য (Practice & Objectives)</span>
                  </h2>

                  <div className="space-y-5">
                    {course.practiceDetails.inClass && (
                      <div className="space-y-3 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                        <h3 className="text-sm font-bold text-cyan-300">
                          প্রতিটি ক্লাসের অনুশীলন
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                          {course.practiceDetails.inClass.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <FaCheckCircle className="text-emerald-400 text-xs shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {course.practiceDetails.outsideClass && (
                      <div className="space-y-2 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                        <h3 className="text-sm font-bold text-blue-300">
                          ক্লাসের বাইরের অনুশীলন
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {course.practiceDetails.outsideClass}
                        </p>
                      </div>
                    )}

                    {course.practiceDetails.objective && (
                      <div className="space-y-2 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                        <h3 className="text-sm font-bold text-amber-300">
                          কোর্সের লক্ষ্য
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {course.practiceDetails.objective}
                        </p>
                      </div>
                    )}

                    {course.practiceDetails.note && (
                      <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                        ℹ️ {course.practiceDetails.note}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Instructor Bio Box */}
              <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 space-y-6 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <FaChalkboardTeacher className="text-blue-400 text-lg" />
                  <span>Lead Instructor Profile</span>
                </h2>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-blue-500/80 shadow-lg shrink-0"
                  />
                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-white">{course.instructor.name}</h3>
                    <p className="text-xs text-cyan-400 font-semibold">{course.instructor.title}</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Enrollment Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-3xl bg-[#0F172A] border border-slate-700/80 p-6 sm:p-8 space-y-6 shadow-2xl">
                
                <div className="space-y-1 text-center pb-4 border-b border-slate-800">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                    Program Tuition Fee
                  </span>
                  <p className="text-3xl font-black text-emerald-400">
                    {course.fee}
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400 flex items-center gap-2">
                      <FaClock className="text-blue-400" /> Duration:
                    </span>
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400 flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" /> Schedule:
                    </span>
                    <span className="font-semibold text-white">{course.schedule}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400 flex items-center gap-2">
                      <FaVideo className="text-rose-400" /> Platform:
                    </span>
                    <span className="font-semibold text-cyan-300">Live Zoom + Recordings</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400 flex items-center gap-2">
                      <FaAward className="text-amber-400" /> Language:
                    </span>
                    <span className="font-semibold text-white">Finnish with Bangla explanation</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={enrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    {isGoogleForm ? <FaClipboardList className="text-lg" /> : <FaWhatsapp className="text-lg" />}
                    <span>{isGoogleForm ? 'Enroll via Google Form' : 'Enroll on WhatsApp'}</span>
                  </a>

                  <Link
                    to="/contact"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs text-center transition-all border border-slate-700 block"
                  >
                    Have Questions? Contact Us
                  </Link>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                  <p className="text-[11px] text-blue-300">
                    🔒 Direct batch enrollment & study materials handled personally by Dr. SM Shafiqul Alam.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
