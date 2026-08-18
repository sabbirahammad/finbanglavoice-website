import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaYoutube,
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaPlayCircle,
  FaUsers,
  FaComments
} from 'react-icons/fa';
import instructorImage from '../../assets/t.webp';

const TalkToJournalist = () => {
  const mediaData = {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Founder of FinBangla Voice • Professor & Senior Policy Researcher',
    youtubeUrl: 'https://www.youtube.com/@FinBanglaVoice',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61560033836918',
    whatsapp: '+358409369708',
    email: 'finbanglavoice@gmail.com',
    image: instructorImage,
    highlights: [
      {
        icon: <FaYoutube className="text-rose-500 text-xl" />,
        title: 'FinBangla Voice YouTube',
        desc: 'In-depth video guides on Finnish language, university admissions, and student life in Finland.',
      },
      {
        icon: <FaUsers className="text-blue-400 text-xl" />,
        title: 'Diaspora Network & Community',
        desc: 'Connecting thousands of Bengali-speaking students and immigrants across Nordic regions.',
      },
      {
        icon: <FaComments className="text-emerald-400 text-xl" />,
        title: 'Open Dialogue & Governance',
        desc: 'Critical discussions on democracy, South Asian policy, human rights, and global sustainability.',
      },
    ],
  };

  return (
    <section className="py-20 bg-[#0B1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <FaYoutube />
                <span>Media & Community Platform</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Amplifying Voices, <span className="bg-gradient-to-r from-rose-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">Education & Truth</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Beyond language education, <strong>FinBangla Voice</strong> serves as a multimedia platform promoting democracy, human rights, and good governance in Bangladesh, while supporting the Bengali diaspora in Finland.
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {mediaData.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-700/60 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={mediaData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-lg shadow-rose-600/25 active:scale-95 text-sm"
                >
                  <FaPlayCircle className="text-lg" />
                  <span>Subscribe on YouTube</span>
                </a>

                <a
                  href={mediaData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-blue-300 bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 transition-all text-sm"
                >
                  <FaFacebookF />
                  <span>Join Facebook Community</span>
                </a>

                <Link
                  to="/media"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white transition text-sm"
                >
                  <span>Media Hub</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* Right Side: Mentor & Media Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-[#0B1120] border border-slate-700/80 p-6 space-y-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={mediaData.image}
                    alt={mediaData.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-rose-500/80 shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{mediaData.name}</h4>
                    <p className="text-xs text-rose-400 font-medium">Founder & Chief Editor</p>
                    <p className="text-[11px] text-slate-400">FinBangla Voice Platform</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Channel Handle:</span>
                    <span className="font-semibold text-white">@FinBanglaVoice</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Focus Areas:</span>
                    <span className="font-semibold text-cyan-300">Finland Education & Policy</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Consultation:</span>
                    <span className="font-semibold text-emerald-400">Available by Appointment</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${mediaData.whatsapp.replace(/\D/g, '')}?text=Hello%20Dr.%20SM%20Shafiqul%20Alam%2C%20I%20would%20like%20to%20schedule%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Direct Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TalkToJournalist;
