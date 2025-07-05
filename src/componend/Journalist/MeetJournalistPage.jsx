import JournalistBanner from './JournalistBanner';
import BioSection from './BioSection';
import HighlightsGrid from './HighlightsGrid';
import FeaturedArticles from './FeaturedArticles';
import MediaAppearances from './MediaAppearances';
import ContactSection from './ContactSection';
import BookDemoClass from './BookDemoClass';

const MeetJournalistPage = () => {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <JournalistBanner />
        <BioSection />
        {/* Next components will follow... */}
        <BookDemoClass courseId={1} /> {/* You can change this ID */}
        <HighlightsGrid/>
        <FeaturedArticles/>
        <MediaAppearances/>
        <ContactSection/>
      </div>
    </div>
  );
};

export default MeetJournalistPage;
