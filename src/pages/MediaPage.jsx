import React from 'react';
import { motion } from 'framer-motion';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPlayCircle,
  FaPodcast,
  FaVideo,
  FaUsers,
  FaGlobeEurope,
  FaGraduationCap,
  FaBullhorn,
  FaArrowRight
} from 'react-icons/fa';
import Footer from '../componend/Home/Footer';

const MediaPage = () => {
  const channelStats = [
    { label: 'YouTube Platform', value: '@FinBanglaVoice', icon: <FaYoutube className="text-rose-500 text-xl" /> },
    { label: 'Community Focus', value: 'Education & Policy', icon: <FaGlobeEurope className="text-cyan-400 text-xl" /> },
    { label: 'Bengali Diaspora', value: 'Finland & Nordic', icon: <FaUsers className="text-blue-400 text-xl" /> },
    { label: 'Dialogues & Talks', value: '150+ Broadcasts', icon: <FaPodcast className="text-amber-400 text-xl" /> },
  ];

  const videoCategories = [
    {
      icon: <FaGraduationCap className="text-2xl text-blue-400" />,
      title: 'Finnish Language Video Lessons',
      bengaliTitle: 'বাংলায় ফিনিশ ভাষা শিক্ষা ভিডিও',
      desc: 'Free introductory video lessons covering Finnish alphabets, essential verbs, numbers, shopping, and everyday conversational phrases.',
      badge: 'Language Hub',
      linkText: 'Watch on YouTube',
      url: 'https://www.youtube.com/@FinBanglaVoice',
    },
    {
      icon: <FaGlobeEurope className="text-2xl text-cyan-400" />,
      title: 'Study & Work in Finland Guides',
      bengaliTitle: 'ফিনল্যান্ডে উচ্চশিক্ষা ও ক্যারিয়ার গাইড',
      desc: 'Comprehensive step-by-step video tutorials on Joint Application (Studyinfo.fi), AMK admissions, student visas, and living in Finland.',
      badge: 'Admissions & PR',
      linkText: 'Explore Admission Series',
      url: 'https://www.youtube.com/@FinBanglaVoice',
    },
    {
      icon: <FaBullhorn className="text-2xl text-rose-400" />,
      title: 'Democracy, Governance & Human Rights',
      bengaliTitle: 'গণতন্ত্র, সুশাসন ও মানবাধিকার সংলাপ',
      desc: 'In-depth interviews, political analysis, and critical dialogues on institutional reforms, good governance, and human rights in Bangladesh.',
      badge: 'Independent Media',
      linkText: 'Watch Policy Dialogues',
      url: 'https://www.youtube.com/@FinBanglaVoice',
    },
    {
      icon: <FaUsers className="text-2xl text-emerald-400" />,
      title: 'Diaspora Stories & Life in the Nordics',
      bengaliTitle: 'প্রবাসী জীবন ও নর্ডিক অভিজ্ঞতা',
      desc: 'Real stories, career transitions, and integration experiences of Bangladeshi students, researchers, and professionals living in Finland.',
      badge: 'Community Voices',
      linkText: 'Watch Community Series',
      url: 'https://www.youtube.com/@FinBanglaVoice',
    },
  ];

  const socialPlatforms = [
    {
      name: 'YouTube Channel',
      handle: '@FinBanglaVoice',
      desc: 'Subscribe for weekly Finnish lessons, admission updates, and live talk shows.',
      url: 'https://www.youtube.com/@FinBanglaVoice',
      icon: <FaYoutube className="text-2xl text-rose-500" />,
      btnText: 'Subscribe on YouTube',
      btnClass: 'bg-rose-600 hover:bg-rose-500 text-white',
    },
    {
      name: 'Facebook Community',
      handle: 'FinBangla Voice Official',
      desc: 'Join discussions with Bangladeshi students, applicants, and residents in Finland.',
      url: 'https://www.facebook.com/profile.php?id=61560033836918',
      icon: <FaFacebookF className="text-2xl text-blue-400" />,
      btnText: 'Join Facebook Page',
      btnClass: 'bg-blue-600 hover:bg-blue-500 text-white',
    },
    {
      name: 'Instagram Updates',
      handle: '@finbanglavoice2024',
      desc: 'Daily vocabulary highlights, student tips, and event announcements.',
      url: 'https://www.instagram.com/finbanglavoice2024/',
      icon: <FaInstagram className="text-2xl text-pink-400" />,
      btnText: 'Follow on Instagram',
      btnClass: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-90 text-white',
    },
    {
      name: 'LinkedIn Thought Leadership',
      handle: 'Dr. SM Shafiqul Alam',
      desc: 'Academic research papers, sustainable development policy, and university collaborations.',
      url: 'https://linkedin.com',
      icon: <FaLinkedinIn className="text-2xl text-sky-400" />,
      btnText: 'Connect on LinkedIn',
      btnClass: 'bg-sky-600 hover:bg-sky-500 text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Header Banner */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#0F172A] to-[#0B1120] border-b border-slate-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <FaVideo />
            <span>Broadcast & Multimedia Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            FinBangla Voice <span className="bg-gradient-to-r from-rose-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">Media Hub</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Independent journalism, Finnish language lessons, higher education roadmaps, and policy dialogues hosted by <strong>Dr. SM Shafiqul Alam</strong>.
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
            {channelStats.map((st, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center space-y-1">
                <div className="flex justify-center mb-1">{st.icon}</div>
                <h4 className="text-xs sm:text-sm font-bold text-white">{st.value}</h4>
                <p className="text-[11px] text-slate-400">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content Categories */}
      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curated Video Broadcasts & Series
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Browse structured video playlists created to help students, immigrants, and researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{cat.bengaliTitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80">
                  <a
                    href={cat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-400 hover:text-rose-300 transition"
                  >
                    <FaPlayCircle className="text-base" />
                    <span>{cat.linkText}</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Social Network Hub */}
      <section className="py-16 bg-[#0F172A] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Connect Across Official Social Channels
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Join thousands of community members across our platforms for daily updates and live discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((soc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B1120] border border-slate-800 flex flex-col justify-between text-center space-y-4 shadow-lg"
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 mx-auto flex items-center justify-center">
                    {soc.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{soc.name}</h3>
                  <p className="text-xs text-cyan-400 font-semibold">{soc.handle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{soc.desc}</p>
                </div>

                <a
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl font-semibold text-xs transition shadow-md ${soc.btnClass}`}
                >
                  {soc.btnText}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default MediaPage;
