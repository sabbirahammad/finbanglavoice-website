import { COURSE_PRICE } from '../../config/courses';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaGraduationCap, FaFilter } from 'react-icons/fa';
import CourseGrid from './CourseGrid';
import CourseFilterBar from './CourseFilterBar';
import Footer from '../Home/Footer';
import { API_BASE_URL } from '../../config/api';
import fallbackImage from '../../assets/t.webp';

const defaultCourses = [
  {
    id: "12",
    title: "দৈনন্দিন ফিনিশ কথোপকথন অনুশীলন / Everyday Finnish Conversation Practice course",
    subject: "Language",
    level: "Speaking Practice (All Levels)",
    description: "৮টি অনলাইন সেশনে বাস্তব জীবন, কেনাকাটা, যাতায়াত, স্বাস্থ্য, বাসস্থান, কাজ ও পড়াশোনা নিয়ে নিয়মিত কথা বলার অভ্যাস ও আত্মবিশ্বাস বাড়ানোর বিশেষ কোর্স।",
    price: COURSE_PRICE,
    lessons: 8,
    durationHours: 16,
    rating: 4.9,
    enrolled: 640,
    badge: "Speaking Drills",
    startDate: "New Batch Starting Soon",
    image: fallbackImage,
    enrollUrl: "https://docs.google.com/forms/d/e/1FAIpQLScSClOiUyLEU7Zw4GDEIJBDdaI8ddMorlv1E_dH4Qm_XD4EYQ/viewform?usp=publish-editor",
  },
  {
    id: "10",
    title: "YKI পরীক্ষা প্রস্তুতি কোর্স",
    subject: "Language",
    level: "Intermediate (B1–B2 Prep)",
    description: "YKI পরীক্ষার চারটি অংশ—Reading, Writing, Speaking ও Listening—এর লক্ষ্যভিত্তিক প্রস্তুতি, মডেল টেস্ট ও শিক্ষক কর্তৃক ব্যক্তিগত ফিডব্যাক।",
    price: COURSE_PRICE,
    lessons: 16,
    durationHours: 24,
    rating: 5.0,
    enrolled: 820,
    badge: "YKI Test Prep",
    startDate: "Next Intake Batch",
    image: fallbackImage,
    enrollUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdrclrGbU5eXeChTkKD-wpjP2dbQwHjv6rt5idoP7_SjDamjg/viewform?usp=publish-editor",
  },
  {
    id: "course-finnish-a1",
    title: "বাংলায় ফিনিশ ভাষা শিক্ষা (A0–A2) / Practical Finnish Language Course",
    subject: "Language",
    level: "Beginner (A0–A1/A2)",
    description: "Learn essential Finnish pronunciation, everyday greetings, shopping, numbers, basic grammar, and conversation skills tailored for Bengali speakers.",
    price: COURSE_PRICE,
    lessons: 24,
    durationHours: 36,
    rating: 4.9,
    enrolled: 1850,
    badge: "Most Popular",
    startDate: "New Batch Starting Soon",
    image: fallbackImage,
    enrollUrl: "https://docs.google.com/forms/d/e/1FAIpQLScngT1MTcKR8B5106ZJ6a4Fe_D7XuGMfbWOHJPD2-K--MsaQg/viewform?usp=header",
  },
  {
    id: "course-finnish-a2",
    title: "Intermediate Finnish & Workplace Spoken (Level A1 – A2)",
    subject: "Language",
    level: "Intermediate (A1–A2)",
    description: "Designed for job seekers and residents. Master workplace conversations, official authority communication (Kela, TE-palvelut), and YKI exam fundamentals.",
    price: COURSE_PRICE,
    lessons: 24,
    durationHours: 36,
    rating: 4.8,
    enrolled: 920,
    badge: "Career Focused",
    startDate: "Evening Schedule",
    image: fallbackImage,
  },
  {
    id: "course-study-finland",
    title: "Higher Education in Finland: University & AMK Admission Masterclass",
    subject: "Education",
    level: "All Levels",
    description: "Complete walkthrough of Studyinfo.fi admissions, university selection, scholarship acquisition, SOP reviews, and student residence permit procedures.",
    price: COURSE_PRICE,
    lessons: 8,
    durationHours: 16,
    rating: 5.0,
    enrolled: 1450,
    badge: "Official Advisory",
    startDate: "Next Intake Workshop",
    image: fallbackImage,
  },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState(defaultCourses);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const loadCourses = async () => {
      setLoadingCourses(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/courses`);
        const data = await response.json();

        if (response.ok) {
          const courseList = Array.isArray(data) ? data : data?.courses || [];
          if (courseList.length > 0) {
            const mappedCourses = courseList.map((c) => ({
              id: c.id || c.course_id,
              title: c.course_name || 'Finnish Language Course',
              subject: c.category || 'Language',
              level: c.course_details?.level || 'Beginner',
              description: c.course_details?.session_overview || 'Live interactive Finnish language program.',
              price: COURSE_PRICE,
              lessons: 24,
              durationHours: 36,
              rating: 4.9,
              enrolled: 1000,
              badge: c.badge || 'Live Batch',
              startDate: c.course_details?.schedule || 'Ongoing Registration',
              image: c.instructor?.photo_url || fallbackImage,
              enrollment: c.enrollment,
              enrollUrl: c.enrollment?.url,
            }));
            setCourses(mappedCourses);
          }
        }
      } catch (err) {
        console.error('Failed to load courses from API:', err);
      } finally {
        setLoadingCourses(false);
      }
    };

    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.level && course.level.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'language' &&
        (course.subject.toLowerCase().includes('lang') ||
          course.title.toLowerCase().includes('finnish') ||
          course.title.toLowerCase().includes('ফিনিশ') ||
          course.title.toLowerCase().includes('কথোপকথন') ||
          course.title.toLowerCase().includes('yki'))) ||
      (selectedCategory === 'education' &&
        (course.subject.toLowerCase().includes('edu') ||
          course.title.toLowerCase().includes('education') ||
          course.title.toLowerCase().includes('admission'))) ||
      (selectedCategory === 'masterclass' &&
        (course.title.toLowerCase().includes('masterclass') ||
          course.title.toLowerCase().includes('workshop') ||
          course.title.toLowerCase().includes('yki')));

    return matchesSearch && matchesCategory;
  });


  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-b from-[#0F172A] to-[#0B1120] border-b border-slate-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FaGraduationCap className="text-sm" />
            <span>Structured Educational Programs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Finnish Language & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Education Courses</span>
          </h1>

          <div className="text-base sm:text-lg text-slate-300 font-medium h-8 flex items-center justify-center">
            <span className="text-cyan-400 mr-2">Featured Tracks:</span>
            <Typewriter
              words={[
                'Finnish Level 0 – A1 for Beginners in Bengali',
                'Intermediate Spoken & Workplace Finnish (A1–A2)',
                'University & AMK Admissions in Finland',
                'Residence Permit & Integration Coaching'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
            Led by <strong>Dr. SM Shafiqul Alam</strong>. Live interactive Zoom sessions with comprehensive study materials, vocabulary audio packs, and personalized feedback.
          </p>
        </div>
      </section>

      {/* Courses Search, Filter & Grid Section */}
      <section className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-lg">
            <div className="w-full md:max-w-md">
              <CourseFilterBar selected={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            <div className="text-xs text-slate-400">
              Showing <strong className="text-white">{filteredCourses.length}</strong> available programs
            </div>
          </div>

          {/* Grid */}
          <CourseGrid
            courses={filteredCourses}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;
