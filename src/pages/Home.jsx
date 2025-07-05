import React from 'react';
import HeroSection from '../componend/Home/HeroSection';
import TeacherIntro from '../componend/Home/TeacherIntro';
import FeaturedCourses from '../componend/Home/FeaturedCourses';
import ContactBanner from '../componend/Home/ContactBanner';
import SessionSection from '../componend/Home/SessionSection';
import BlogSection from '../componend/Home/BlogSection';
import Footer from '../componend/Home/Footer';
import TalkToJournalist from '../componend/Home/TalkToJournalist';

const Home = () => {
  return (
    <div className="pt-20 font-sans bg-[#1A1A1A]"> {/* or use style={{ backgroundColor: '#f8f9fa' }} */}
      <HeroSection />
      <TeacherIntro />
      <FeaturedCourses />
      {/* <SessionSection /> */}
      <TalkToJournalist/>
      <ContactBanner />
      {/* <BlogSection /> */}
      <Footer />
    </div>
  );
};

export default Home;

