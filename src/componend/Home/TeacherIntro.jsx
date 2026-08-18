import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaGraduationCap,
  FaAward,
  FaGlobeEurope,
  FaArrowRight,
  FaQuoteLeft
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import instructorImage from '../../assets/t.webp';

const TeacherIntro = () => {
  const teacher = {
    name: 'Dr. SM Shafiqul Alam',
    title: 'Professor, Senior Researcher & Finnish Education Ambassador',
    profileImage: instructorImage,
    experienceYears: '20+',
    teachingExperience: '7+ Years',
    specialties: [
      'Finnish Language (Level 0–A2)',
      'Higher Education & AMK Admissions',
      'Nordic Policy & Sustainable Development',
      'Investigative Journalism & Media Analysis',
    ],
    description:
      'I am a researcher, professor, and development specialist with over 20 years of experience in sustainable development, policy, education, and international cooperation. I believe knowledge and language empower people and form the foundation for lasting integration and growth.\n\nThrough the FinBangla Voice platform, I offer structured Finnish language courses (Level 0–A2) in Bengali for immigrants and students, provide expert guidance on university and vocational college admissions as an ambassador of Finnish education agencies, and conduct research on democracy and global governance.',
    quote:
      'Knowledge and language skills empower individuals to adapt, succeed, and build a brighter future in Finland and beyond.',
    typingWords: [
      'Senior Researcher & Professor 🎓',
      'Finnish Language Educator 🇫🇮',
      'Education Ambassador for Finland 🏛️',
      'Investigative Journalist & Analyst ✍️',
    ],
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=61560033836918',
      youtube: 'https://www.youtube.com/@FinBanglaVoice',
      linkedin: 'https://linkedin.com',
      email: 'finbanglavoice@gmail.com',
      whatsapp: '+358409369708',
    },
    credentials: [
      {
        icon: <FaGraduationCap className="text-blue-400 text-xl" />,
        title: 'PhD & Academic Leadership',
        desc: 'Over 20+ years of university research, teaching, and international policy cooperation.',
      },
      {
        icon: <FaGlobeEurope className="text-cyan-400 text-xl" />,
        title: 'Finnish Education Ambassador',
        desc: 'Assisting Bangladeshi students in securing admissions in Finnish universities & colleges.',
      },
      {
        icon: <FaAward className="text-emerald-400 text-xl" />,
        title: '7+ Yrs Language Coaching',
        desc: 'Specialized in teaching Finnish (A0–A2) with native Bengali explanations and daily practice.',
      },
    ],
  };

  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Meet Your Mentor & Guide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{teacher.name}</span>
          </h2>
          <p className="text-base text-slate-300">
            Guiding your academic, linguistic, and relocation journey to Finland with decades of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Credentials */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>

              {/* Portrait container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-700/80 shadow-2xl">
                <img
                  src={teacher.profileImage}
                  alt={teacher.name}
                  className="w-72 sm:w-80 h-96 object-cover object-top filter brightness-105"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-5 text-center">
                  <span className="text-sm font-bold text-white block">Dr. SM Shafiqul Alam</span>
                  <span className="text-xs text-cyan-400 font-medium block">
                    Founder, FinBangla Voice
                  </span>
                </div>
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={teacher.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="Facebook Profile"
              >
                <FaFacebookF />
              </a>
              <a
                href={teacher.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="YouTube Channel"
              >
                <FaYoutube className="text-lg" />
              </a>
              <a
                href={teacher.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`mailto:${teacher.socialLinks.email}`}
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href={`https://wa.me/${teacher.socialLinks.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio, Dynamic Typing, Credentials & CTA */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Dynamic Typing Title */}
            <div className="text-lg sm:text-xl font-bold text-cyan-400">
              <Typewriter
                words={teacher.typingWords}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={35}
                delaySpeed={1800}
              />
            </div>

            {/* Main Bio Text */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              <p>{teacher.description}</p>
            </div>

            {/* Quote Box */}
            <div className="relative rounded-xl bg-slate-800/60 border-l-4 border-blue-500 p-5 shadow-sm space-y-2">
              <FaQuoteLeft className="text-blue-500/40 text-2xl absolute top-3 right-4" />
              <p className="italic text-slate-200 text-sm sm:text-base leading-relaxed">
                “{teacher.quote}”
              </p>
              <span className="text-xs font-semibold text-blue-400 block">— {teacher.name}</span>
            </div>

            {/* Key Credentials Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {teacher.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/70 space-y-1.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-700/60 flex items-center justify-center mb-2">
                    {cred.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{cred.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{cred.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 active:scale-95 text-sm"
              >
                <span>Book 1-on-1 Consultation</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/journalist"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm"
              >
                <span>View Full Academic Bio</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TeacherIntro;
