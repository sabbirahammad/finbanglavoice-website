import { COURSE_PRICE } from '../../config/courses';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaArrowLeft, FaGraduationCap } from 'react-icons/fa';
import CourseCard from './CourseCard';
import Footer from '../Home/Footer';
import fallbackImage from '../../assets/t.webp';

const allCourseCatalog = [
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
    level: "Beginner (Level 0 – A1/A2)",
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
    level: "Intermediate (Level A1 – A2)",
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

const WishlistPage = () => {
  const [wishlistCourses, setWishlistCourses] = useState([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('wishlist')) || [];
    const filtered = allCourseCatalog.filter((c) => savedIds.includes(c.id));
    setWishlistCourses(filtered);
  }, []);

  const handleRemove = (id) => {
    const savedIds = JSON.parse(localStorage.getItem('wishlist')) || [];
    const updated = savedIds.filter((savedId) => savedId !== id);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setWishlistCourses((prev) => prev.filter((c) => c.id !== id));
  };

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

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <FaHeart />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Saved Courses & Wishlist
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                You have {wishlistCourses.length} saved program{wishlistCourses.length === 1 ? '' : 's'}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {wishlistCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard course={course} onRemoveFromWishlist={handleRemove} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4 rounded-3xl bg-[#0F172A] border border-slate-800 max-w-xl mx-auto p-8 shadow-xl">
              <FaGraduationCap className="text-4xl text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">Your wishlist is currently empty</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Explore our Finnish language courses and university admission masterclasses to save and enroll.
              </p>
              <Link
                to="/courses"
                className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md"
              >
                Browse All Courses
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WishlistPage;
