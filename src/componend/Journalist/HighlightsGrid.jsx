import React from 'react';
import { FaGraduationCap, FaLanguage, FaPassport, FaBullhorn } from 'react-icons/fa';

const HighlightsGrid = () => {
  const highlights = [
    {
      icon: <FaLanguage className="text-2xl text-blue-400" />,
      title: 'Finnish Language Mastery (A0–A2)',
      desc: 'Expert language coaching designed specifically for Bengali speakers living in or relocating to Finland.',
    },
    {
      icon: <FaGraduationCap className="text-2xl text-cyan-400" />,
      title: 'University & Vocational Admissions',
      desc: 'Official ambassador guidance on degree programs, UAS entrance exams, and vocational training in Finland.',
    },
    {
      icon: <FaPassport className="text-2xl text-emerald-400" />,
      title: 'Residence Permit & Relocation',
      desc: 'Accurate advisory on student D-visas, family reunification, permanent residency (PR), and employment integration.',
    },
    {
      icon: <FaBullhorn className="text-2xl text-amber-400" />,
      title: 'Media & Democracy Dialogue',
      desc: 'Leading policy discussions, investigative human rights reporting, and diaspora networking on YouTube.',
    },
  ];

  return (
    <section className="mb-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Key Pillars of Work
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Bridging education, language, and policy between Bangladesh and the Nordic region.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-3 shadow-lg hover:border-slate-700 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
              {h.icon}
            </div>
            <h3 className="text-base font-bold text-white">{h.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsGrid;
