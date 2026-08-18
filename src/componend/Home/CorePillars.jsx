import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLanguage,
  FaUniversity,
  FaPassport,
  FaBullhorn,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const CorePillars = () => {
  const pillars = [
    {
      icon: <FaLanguage className="text-2xl text-blue-400" />,
      title: 'Practical Finnish Language (A0–A2)',
      bengaliTitle: 'ব্যবহারিক ফিনিশ ভাষা শিক্ষা',
      description:
        'Structured online courses tailored for Bengali speakers. Learn pronunciation, practical vocabulary, grammar rules, and everyday conversational Finnish for life and work in Finland.',
      points: [
        'Level 0 to A2 structured roadmap',
        'Native Bengali explanation & PDF guides',
        'Weekend live Zoom sessions + Q&A',
        'Preparation for YKI language foundation',
      ],
      link: '/courses',
      linkText: 'Explore Finnish Courses',
      accentColor: 'from-blue-600/20 to-blue-400/5',
      borderColor: 'border-blue-500/30',
      badge: 'Most Popular',
    },
    {
      icon: <FaUniversity className="text-2xl text-cyan-400" />,
      title: 'University & Vocational Admissions',
      bengaliTitle: 'উচ্চশিক্ষা ও কলেজ ভর্তি সহায়তা',
      description:
        'Official educational guidance as an ambassador of Finnish educational agencies. Get expert assistance with Bachelor, Master, and Vocational (Ammattiopisto) applications.',
      points: [
        'University & AMK application support',
        'Vocational college pathway counseling',
        'Tuition fee waivers & scholarship advice',
        'Motivation letter & document review',
      ],
      link: '/contact',
      linkText: 'Get Admission Guidance',
      accentColor: 'from-cyan-600/20 to-cyan-400/5',
      borderColor: 'border-cyan-500/30',
      badge: 'Official Ambassador',
    },
    {
      icon: <FaPassport className="text-2xl text-emerald-400" />,
      title: 'Residence, Job & Settlement Advisory',
      bengaliTitle: 'ভিসা, কর্মসংস্থান ও স্থায়ী বসবাসের পরামর্শ',
      description:
        'Navigate the complexities of Finnish immigration. Reliable guidance on residence permits (RP), student work rights, family reunification, and career adaptation in the Nordics.',
      points: [
        'Student visa & D-visa application tips',
        'Family & spouse residency procedures',
        'CV adaptation for Finnish job market',
        'Practical Nordic lifestyle integration',
      ],
      link: '/session',
      linkText: 'Join Advisory Session',
      accentColor: 'from-emerald-600/20 to-emerald-400/5',
      borderColor: 'border-emerald-500/30',
      badge: 'Settlement Support',
    },
    {
      icon: <FaBullhorn className="text-2xl text-amber-400" />,
      title: 'Media, Democracy & Human Rights',
      bengaliTitle: 'মিডিয়া, সুশাসন ও মানবাধিকার চর্চা',
      description:
        'Through the FinBangla Voice media platform and YouTube channel, Dr. SM Shafiqul Alam conducts investigative reporting, policy research, and dialogues on democracy and governance.',
      points: [
        'Critical South Asian geopolitical analysis',
        'Investigative human rights reporting',
        'Diaspora community voice & stories',
        'Sustainable development policy talks',
      ],
      link: '/articles',
      linkText: 'Read Research & Articles',
      accentColor: 'from-amber-600/20 to-amber-400/5',
      borderColor: 'border-amber-500/30',
      badge: 'Journalism Hub',
    },
  ];

  return (
    <section className="py-20 bg-[#0B1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Our Core Mission & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How FinBangla Voice <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Empowers You</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A comprehensive, trusted ecosystem designed to help you learn the Finnish language, secure university admissions, settle smoothly in Finland, and stay informed through independent journalism.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl bg-gradient-to-br ${pillar.accentColor} bg-[#0F172A] border ${pillar.borderColor} p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10 group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                {/* Card Top Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 p-3 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>

                {/* Card Title & Bengali Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mb-4">
                  {pillar.bengaliTitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-8">
                  {pillar.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheck className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  to={pillar.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-cyan-300 transition group-hover:translate-x-1"
                >
                  <span>{pillar.linkText}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorePillars;
