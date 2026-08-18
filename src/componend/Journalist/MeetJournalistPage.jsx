import React from 'react';
import JournalistBanner from './JournalistBanner';
import BioSection from './BioSection';
import HighlightsGrid from './HighlightsGrid';
import FeaturedArticles from './FeaturedArticles';
import MediaAppearances from './MediaAppearances';
import ContactSection from './ContactSection';
import BookDemoClass from './BookDemoClass';
import Footer from '../Home/Footer';

const MeetJournalistPage = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      <main className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <JournalistBanner />
          <BioSection />
          <BookDemoClass />
          <HighlightsGrid />
          <FeaturedArticles />
          <MediaAppearances />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeetJournalistPage;
