import React from 'react';
import { FaGraduationCap, FaAward, FaGlobeEurope, FaWhatsapp } from 'react-icons/fa';
import instructorImage from '../../assets/t.webp';

const JournalistBanner = () => {
  return (
    <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Photo */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <img
              src={instructorImage}
              alt="Dr. SM Shafiqul Alam"
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border-2 border-slate-700 shadow-xl"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FaAward />
            <span>Academic Leader & Educator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Dr. SM Shafiqul Alam
          </h1>

          <p className="text-sm sm:text-base text-cyan-300 font-semibold">
            Founder of FinBangla Voice • Professor & Senior Policy Researcher
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Empowering students and immigrants with Finnish language proficiency, higher education admissions in Finland, residence permit advisory, and promoting democracy through independent media.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="https://wa.me/358409369708?text=Hello%20Dr.%20SM%20Shafiqul%20Alam%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md"
            >
              <FaWhatsapp className="text-base" />
              <span>Book 1-on-1 Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalistBanner;
