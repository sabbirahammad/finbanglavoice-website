import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const BioSection = () => {
  const bio = {
    name: 'Dr. SM Shafiqul Alam',
    description: `I am a researcher, professor, and development specialist with over 20 years of experience in sustainable development, policy, education, and international cooperation. I believe knowledge and skills empower people and form the foundation for effective solutions toward sustainable development.

Through the FinBangla Voice YouTube platform, I work to promote democracy, human rights, and good governance in Bangladesh. For Bengali-speaking immigrants living in Finland, I offer structured Finnish language courses (Level 0–A2), provide advice and support on education, employment, and family-based permanent residency, and as an ambassador of Finnish education agencies, assist Bangladeshi students in gaining admission to Finnish universities and vocational colleges.`,
    quote: 'Knowledge, language, and truth empower individuals to build meaningful lives across borders.'
  };

  return (
    <section className="relative rounded-3xl bg-[#0F172A] border border-slate-800 p-8 sm:p-12 mb-10 overflow-hidden shadow-xl">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Biography & Mission
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line text-justify">
          <strong className="text-white">{bio.name}</strong> — {bio.description}
        </p>

        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-300 italic text-xs sm:text-sm flex items-start gap-3">
          <FaQuoteLeft className="text-blue-400 text-base shrink-0 mt-0.5" />
          <span>“{bio.quote}”</span>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
