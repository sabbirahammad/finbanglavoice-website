import { COURSE_PRICE, BEGINNER_ENROLLMENT_URL, isBeginnerCourse } from '../../config/courses';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaClock,
  FaWhatsapp,
  FaClipboardList,
  FaArrowRight,
  FaCheckCircle,
  FaEuroSign
} from 'react-icons/fa';
import { API_BASE_URL } from '../../config/api';
import fallbackImage from '../../assets/t.webp';

const fallbackCourses = [
  {
    id: 'course-finnish-a1',
    course_name: 'Practical Finnish Language Course in Bangla (Level 0 – A1)',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      photo_url: fallbackImage,
      bio: 'Professor, Senior Researcher & Finnish Education Ambassador',
    },
    course_details: {
      duration: '3 Months',
      schedule: 'Weekend Live Zoom Classes',
      session_mode: 'Live Online (Zoom)',
      rate: COURSE_PRICE.display,
      total_fee: COURSE_PRICE.display,
      material: 'Comprehensive PDF lecture notes, vocabulary drills, and audio practice packs',
      session_overview:
        'Designed specifically for beginners moving to or living in Finland. Learn pronunciation, core grammar rules, daily conversations, shopping, numbers, and basic sentence structuring with Bengali explanations.',
      highlights: [
        'Alphabet, pronunciation & sound rules',
        'Daily conversation: home, market & travel',
        'Core grammar & verb conjugations in Bangla',
        'Recorded sessions + weekly assignment feedback',
      ],
    },
    contact: {
      whatsapp: '+358409369708',
      email: 'finbanglavoice@gmail.com',
    },
    enrollment: {
      button_text: 'Enroll on WhatsApp',
      url: '',
    },
  },
  {
    id: 'course-finnish-a2',
    course_name: 'Intermediate Finnish & Workplace Spoken (Level A1 – A2)',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      photo_url: fallbackImage,
      bio: 'Professor, Senior Researcher & Finnish Education Ambassador',
    },
    course_details: {
      duration: '3 Months',
      schedule: 'Evening Live Zoom Classes',
      session_mode: 'Live Online (Zoom)',
      rate: COURSE_PRICE.display,
      total_fee: COURSE_PRICE.display,
      material: 'Advanced PDF modules, workplace dialogue sheets, and YKI test primer',
      session_overview:
        'Level up your Finnish language skills for job interviews, official communication (Kela, TE-palvelut, Poliisi), doctor visits, public services, and building foundation for YKI language exams.',
      highlights: [
        'Workplace & professional Finnish phrases',
        'Interactions with Finnish official authorities',
        'Complex sentences, cases & noun declensions',
        'Foundational prep for national YKI test',
      ],
    },
    contact: {
      whatsapp: '+358409369708',
      email: 'finbanglavoice@gmail.com',
    },
    enrollment: {
      button_text: 'Enroll on WhatsApp',
      url: '',
    },
  },
  {
    id: 'course-study-finland',
    course_name: 'Higher Education in Finland & Admission Masterclass',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      photo_url: fallbackImage,
      bio: 'Professor, Senior Researcher & Finnish Education Ambassador',
    },
    course_details: {
      duration: '4 Weeks',
      schedule: 'Weekly Interactive Workshops',
      session_mode: 'Online Masterclass + 1-on-1',
      rate: COURSE_PRICE.display,
      total_fee: COURSE_PRICE.display,
      material: 'University application checklist, SOP templates, and visa guide',
      session_overview:
        'Comprehensive roadmap to studying in Finland. Expert guidance on selecting universities/AMK, vocational college (Ammattiopisto) routes, scholarship essays, and residence permit requirements.',
      highlights: [
        'Studyinfo.fi portal application walkthrough',
        'SOP & Motivation letter personalized review',
        'Tuition fee scholarship acquisition tactics',
        'D-Visa & Residence Permit documentation prep',
      ],
    },
    contact: {
      whatsapp: '+358409369708',
      email: 'finbanglavoice@gmail.com',
    },
    enrollment: {
      button_text: 'Enroll on WhatsApp',
      url: '',
    },
  },
];

const getShortText = (text, limit = 160) => {
  if (!text) return 'Course overview and syllabus will be updated soon.';
  return text.length > limit ? `${text.slice(0, limit).trim()}...` : text;
};

const FeaturedCourses = () => {
  const [courses, setCourses] = useState(fallbackCourses);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/courses`);
        const data = await response.json();

        if (response.ok) {
          const courseList = Array.isArray(data) ? data : data?.courses || [];
          if (courseList.length > 0) {
            setCourses(courseList);
          }
        }
      } catch (err) {
        console.error('Failed to load homepage courses, using fallback:', err);
      }
    };

    loadCourses();
  }, []);

  return (
    <section className="bg-[#0B1120] py-20 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Actions */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Educational Pathways
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Courses & Programs</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Practical Finnish language batches and university admission masterclasses taught in Bengali by Dr. SM Shafiqul Alam.
            </p>
          </div>
          <Link
            to="/courses"
            className="w-fit inline-flex items-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/40 px-5 py-3 text-sm font-semibold text-blue-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            <span>View All Courses</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.slice(0, 3).map((course, idx) => {
            const details = course.course_details || {};
            const instructor = course.instructor || {};
            const enrollment = course.enrollment || {};
            const contact = course.contact || {};
            const image = instructor.photo_url || fallbackImage;
            const highlights = details.highlights || [
              'Live interactive Zoom batches',
              'PDF study notes & exercises',
              'Bengali explanations for fast learning',
              'Recorded classes for revision',
            ];

            const beginner = isBeginnerCourse(course);
            const enrollUrl = beginner ? BEGINNER_ENROLLMENT_URL :
              enrollment.url ||
              `https://wa.me/${String(contact.whatsapp || '+358409369708').replace(
                /\D/g,
                ''
              )}?text=${encodeURIComponent(
                `Hi, I would like to enroll in the "${course.course_name}" course on FinBangla Voice.`
              )}`;

            return (
              <motion.article
                key={course.id || idx}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0F172A] shadow-xl hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Top Level / Mode Badges */}
                <div className="p-6 pb-0 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {details.session_mode || 'Live Online'}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <FaClock className="text-[10px]" />
                    {details.duration || '3 Months'}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  {/* Course Title */}
                  <h3 className="text-xl font-bold leading-snug text-white group-hover:text-cyan-300 transition">
                    {course.course_name}
                  </h3>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    {getShortText(details.session_overview)}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Curriculum Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {highlights.slice(0, 4).map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <FaCheckCircle className="text-emerald-400 text-xs shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule & Fee Details */}
                  <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1.5 text-xs text-slate-300 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FaCalendarAlt className="text-blue-400" /> Schedule:
                      </span>
                      <span className="font-semibold text-slate-200">{details.schedule || 'Weekend Batches'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FaEuroSign className="text-emerald-400" /> Fee:
                      </span>
                      <span className="font-bold text-emerald-400 text-sm">
                        {COURSE_PRICE.display}
                      </span>
                    </div>
                  </div>

                  {/* Instructor Mini Badge */}
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={image}
                      alt={instructor.name || 'Instructor'}
                      className="w-9 h-9 rounded-full object-cover border border-blue-400/50"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                    <div className="text-xs">
                      <p className="font-bold text-white">{instructor.name || 'Dr. SM Shafiqul Alam'}</p>
                      <p className="text-slate-400 text-[11px]">Lead Instructor & Mentor</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-3 mt-auto">
                    <a
                      href={enrollUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      {beginner ? <FaClipboardList className="text-sm" /> : <FaWhatsapp className="text-sm" />}
                      <span>{beginner ? 'Enroll via Google Form' : enrollment.button_text || 'Enroll Now'}</span>
                    </a>
                    <Link
                      to="/courses"
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs text-center transition-all border border-slate-700 flex items-center justify-center gap-1"
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;
