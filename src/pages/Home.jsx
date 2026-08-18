import React from 'react';
import HeroSection from '../componend/Home/HeroSection';
import CorePillars from '../componend/Home/CorePillars';
import TeacherIntro from '../componend/Home/TeacherIntro';
import FeaturedCourses from '../componend/Home/FeaturedCourses';
import PathwaySection from '../componend/Home/PathwaySection';
import SessionSection from '../componend/Home/SessionSection';
import BlogSection from '../componend/Home/BlogSection';
import TalkToJournalist from '../componend/Home/TalkToJournalist';
import ContactBanner from '../componend/Home/ContactBanner';
import Footer from '../componend/Home/Footer';

const Home = () => {
  return (
    <div className="pt-20 font-sans bg-[#0B1120] text-slate-100 min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Core Value Pillars */}
      <CorePillars />

      {/* 3. Founder & Mentor Spotlight */}
      <TeacherIntro />

      {/* 4. Featured Courses & Programs */}
      <FeaturedCourses />

      {/* 5. 4-Step Road to Finland Pathway */}
      <PathwaySection />

      {/* 6. Upcoming Live Sessions & Masterclasses */}
      <SessionSection />

      {/* 7. Latest Articles & Journalism */}
      <BlogSection />

      {/* 8. YouTube Media & Community Platform */}
      <TalkToJournalist />

      {/* 9. Direct Consultation & WhatsApp Banner */}
      <ContactBanner />

      {/* 10. Clean Modern Footer */}
      <Footer />
    </div>
  );
};

export default Home;
