import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaClock,
  FaCalendarAlt,
  FaWhatsapp,
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

const defaultCoursesData = {
  'course-finnish-a1': {
    id: 'course-finnish-a1',
    title: 'Practical Finnish Language Course in Bangla (Level 0 – A1)',
    level: 'Beginner (Level 0 – A1)',
    tagline: 'Master fundamental Finnish pronunciation, daily conversation, and grammar with clear Bengali explanations.',
    duration: '3 Months (24 Live Zoom Classes)',
    schedule: 'Friday & Saturday • 08:00 PM (Helsinki Time)',
    fee: '50 € / Month (150 € Total)',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      title: 'Professor, Senior Researcher & Finnish Education Ambassador',
      bio: 'Over 7 years of Finnish language teaching experience and 20+ years of academic research and policy advisory. Official ambassador representing Finnish education agencies.',
      image: fallbackImage,
    },
    modules: [
      {
        title: 'Module 1: Alphabets, Phonetics & Vowel Harmony (বর্ণমালা ও উচ্চারণ বিধি)',
        topics: [
          'The Finnish alphabet and special vowels (ä, ö, y)',
          'Vowel harmony (Vokaalisointu) principles in Bangla',
          'Double vowels & double consonants (Pitkät vokaalit ja konsonantit)',
          'Basic greetings & everyday courtesy phrases (Hei, Tervetuloa, Kiitos)',
        ],
      },
      {
        title: 'Module 2: Daily Life Vocabulary & Numbers (দৈনন্দিন শব্দভাণ্ডার ও সংখ্যা)',
        topics: [
          'Cardinal and ordinal numbers, counting, and telling time',
          'Days of the week, months, seasons, and Finnish weather terms',
          'Shopping at markets, grocery stores, and asking for prices (Paljonko maksaa?)',
          'Food, dining, and restaurant ordering expressions',
        ],
      },
      {
        title: 'Module 3: Core Grammar & Verb Conjugation (ব্যাকরণ ও ক্রিয়াপদ)',
        topics: [
          'The 6 Finnish verb types (Verbityypit) with clear Bangla breakdown',
          'Consonant gradation (K-P-T vaihtelu) simplified rules',
          'Personal pronouns and present tense sentence construction (Minä puhun...)',
          'Forming positive and negative sentences in daily speech',
        ],
      },
      {
        title: 'Module 4: Essential Everyday Dialogues (বাস্তব জীবনের কথোপকথন)',
        topics: [
          'Introducing yourself, family, profession, and hometown',
          'Public transport, asking for directions, and finding locations in Finnish cities',
          'Doctor visits, pharmacy conversations, and health terms',
          'Basic administrative communication (Posti, Kela, City services)',
        ],
      },
    ],
    features: [
      '24 Interactive live Zoom sessions with real-time Q&A',
      'Class video recordings accessible 24/7 for self-paced revision',
      'Comprehensive PDF lecture notes, exercise sheets & vocabulary packs',
      'Weekly homework assignments with personalized teacher feedback',
      'Dedicated WhatsApp community study group for daily practice',
      'Certificate of Completion from FinBangla Voice',
    ],
  },
  'course-finnish-a2': {
    id: 'course-finnish-a2',
    title: 'Intermediate Finnish & Workplace Spoken (Level A1 – A2)',
    level: 'Intermediate (Level A1 – A2)',
    tagline: 'Elevate your Finnish for employment interviews, public authority interactions, and YKI test foundation.',
    duration: '3 Months (24 Live Zoom Classes)',
    schedule: 'Monday & Wednesday • 08:30 PM (Helsinki Time)',
    fee: '60 € / Month (180 € Total)',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      title: 'Professor, Senior Researcher & Finnish Education Ambassador',
      bio: 'Specialist in immigrant linguistic integration and career settlement in Finland.',
      image: fallbackImage,
    },
    modules: [
      {
        title: 'Module 1: Workplace & Professional Communication (কর্মক্ষেত্রের ভাষা)',
        topics: [
          'CV writing and job interview preparation in Finnish',
          'Workplace instructions, colleague conversations, and email etiquette',
          'Industry-specific vocabulary (Services, Tech, Healthcare, Logistics)',
        ],
      },
      {
        title: 'Module 2: Interacting with Official Authorities (সরকারি অফিসের যোগাযোগ)',
        topics: [
          'Navigating TE-palvelut employment plans and Kela benefit forms',
          'Police (Poliisi) and Migri residence permit inquiries',
          'Apartment rental contracts, housing company (Isännöitsijä) communication',
        ],
      },
      {
        title: 'Module 3: Advanced Grammar & Complex Cases (উন্নত ব্যাকরণ)',
        topics: [
          'Locative cases (Missä, Mistä, Mihin - Sisa- ja Ulkopaikallissijat)',
          'Partitive case (Partitiivi) usage in objects and quantities',
          'Past tense (Imperfekti) and perfect tense storytelling',
        ],
      },
      {
        title: 'Module 4: Foundation for National YKI Language Exam (YKI পরীক্ষার প্রস্তুতি)',
        topics: [
          'Reading comprehension and fast skimming strategies',
          'Writing formal letters, complaints, and opinion paragraphs',
          'Listening drills with diverse Finnish regional accents (Puhekieli)',
        ],
      },
    ],
    features: [
      '24 In-depth Zoom sessions focused on active speaking',
      'Workplace dialogue role-plays & realistic simulations',
      'Advanced grammar PDF drills & audio exercise collections',
      'Mock YKI test practice modules and assessment',
      '1-on-1 feedback on Finnish job applications',
    ],
  },
  'course-study-finland': {
    id: 'course-study-finland',
    title: 'Higher Education in Finland: University & AMK Admission Masterclass',
    level: 'All Educational Levels',
    tagline: 'Your complete roadmap to studying in Finland with scholarship acquisition and residence permit guidance.',
    duration: '4 Weeks (8 Comprehensive Masterclasses + 1-on-1 Consultation)',
    schedule: 'Sunday Masterclasses • 07:30 PM (Helsinki Time)',
    fee: '80 € Total Fee',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      title: 'Professor, Senior Researcher & Finnish Education Ambassador',
      bio: 'Official ambassador of Finnish education agencies. Has guided hundreds of students to Finnish university admissions.',
      image: fallbackImage,
    },
    modules: [
      {
        title: 'Module 1: Finnish Higher Education Ecosystem Overview',
        topics: [
          'Academic Universities vs Applied Sciences (AMK) vs Vocational (Ammattiopisto)',
          'Degree programs taught in English: Bachelors & Masters',
          'Eligibility requirements, grade conversions, and language waivers',
        ],
      },
      {
        title: 'Module 2: Studyinfo.fi Joint Application Masterclass',
        topics: [
          'Navigating Opintopolku / Studyinfo.fi step-by-step',
          'Understanding Entrance Examinations (International UAS Exam)',
          'Crafting high-impact Statement of Purpose (SOP) & Motivation Letters',
        ],
      },
      {
        title: 'Module 3: Tuition Fee Scholarships & Financial Planning',
        topics: [
          'Securing 50% - 100% tuition waivers and Finland Scholarships',
          'Proof of funds calculation and bank documentation rules',
          'Part-time work opportunities, student housing (HOAS/TOAS), and living costs',
        ],
      },
      {
        title: 'Module 4: Student Residence Permit (D-Visa) & Settlement',
        topics: [
          'EnterFinland online application guide & VFS Global appointment prep',
          'Health insurance requirements and biometric submission',
          'Family reunification visas for spouse and children',
          'Post-study 2-year job search visa & PR path',
        ],
      },
    ],
    features: [
      '8 Comprehensive live masterclasses with slide decks',
      'Personal 1-on-1 SOP & CV review session with Dr. SM Shafiqul Alam',
      'Complete checklist for university application & visa paperwork',
      'Direct connection with current Bangladeshi students in Finnish universities',
    ],
  },
};

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(defaultCoursesData[id] || defaultCoursesData['course-finnish-a1']);
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  useEffect(() => {
    // If ID exists in default courses, use it
    if (defaultCoursesData[id]) {
      setCourse(defaultCoursesData[id]);
      return;
    }

    // Try fetching from backend if it is a dynamic course
    const fetchDynamic = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/courses/${id}`);
        const data = await res.json();
        if (res.ok && data) {
          const c = data.course || data;
          setCourse({
            id: c.id || id,
            title: c.course_name || 'Finnish Language Program',
            level: c.course_details?.level || 'Beginner',
            tagline: c.course_details?.session_overview || 'Comprehensive course designed for Bangladeshi learners.',
            duration: c.course_details?.duration || '3 Months',
            schedule: c.course_details?.schedule || 'Live Weekend Zoom',
            fee: c.course_details?.rate || c.course_details?.total_fee || '50 € / Month',
            instructor: {
              name: c.instructor?.name || 'Dr. SM Shafiqul Alam',
              title: c.instructor?.bio || 'Professor, Senior Researcher & Finnish Education Ambassador',
              bio: 'Leading educator and researcher bridging Bangladesh and Finland.',
              image: c.instructor?.photo_url || fallbackImage,
            },
            modules: defaultCoursesData['course-finnish-a1'].modules,
            features: defaultCoursesData['course-finnish-a1'].features,
          });
        }
      } catch (err) {
        console.error('Failed to load course details from API, using default:', err);
      }
    };

    fetchDynamic();
  }, [id]);

  const toggleModule = (idx) => {
    setOpenModuleIndex(openModuleIndex === idx ? null : idx);
  };

  const whatsappEnrollUrl = `https://wa.me/358409369708?text=${encodeURIComponent(
    `Hello Dr. SM Shafiqul Alam, I would like to enroll in "${course.title}". Please send me batch details and enrollment steps.`
  )}`;

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
                    {course.modules.length} Modules
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
                    href={whatsappEnrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Enroll on WhatsApp</span>
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
