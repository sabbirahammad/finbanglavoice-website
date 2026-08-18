import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import CountUp from 'react-countup';
import {
  FaLanguage,
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
  FaVideo
} from 'react-icons/fa';
import instructorImage from '../../assets/t.webp';

const HeroSection = () => {
  const typewriterWords = [
    'Practical Finnish Language (A0 to A2)',
    'Finland University & AMK Admissions',
    'Vocational (Ammattiopisto) Pathways',
    'Residence Permit & Family Settlement',
    'Weekly Live Zoom Masterclasses',
  ];

  const heroStats = [
    { value: 5000, suffix: '+', label: 'Students & Aspirants Guided' },
    { value: 100, suffix: '%', label: 'Bangla-Guided Finnish Classes' },
    { value: 150, suffix: '+', label: 'Live Masterclasses Held' },
    { value: 20, suffix: '+', label: 'Years Academic & Policy Expertise' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120] py-16 lg:py-24">
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none -z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 65%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Core Value Proposition */}
        <motion.div
          className="lg:col-span-7 text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <span className="text-base">🇫🇮</span>
            <span>Connecting Bangladesh & Finland | ফিনল্যান্ড শিক্ষা ও ভাষা হাব</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Learn Practical <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Finnish</span> & Build Your Future in Finland
          </h1>

          {/* Dynamic Subheading */}
          <div className="text-lg sm:text-xl text-slate-300 font-medium h-12 flex items-center">
            <span className="text-cyan-400 font-semibold mr-2">Focus:</span>
            <Typewriter
              words={typewriterWords}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={35}
              delaySpeed={1800}
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
            Empowering students, professionals, and immigrants with structured Finnish language courses (Level 0–A2) in Bengali, higher education application guidance, and authentic migration insights led by <strong>Dr. SM Shafiqul Alam</strong>.
          </p>

          {/* Quick Value Points */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 shrink-0" />
              <span>Live Zoom Classes + Recordings</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 shrink-0" />
              <span>University & AMK Admissions</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 shrink-0" />
              <span>PDF Notes & Spoken Tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 shrink-0" />
              <span>1-on-1 Consultation Support</span>
            </div>
          </div>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-95"
            >
              <FaLanguage className="text-lg" />
              <span>Explore Courses</span>
              <FaArrowRight className="text-xs ml-1" />
            </Link>

            <Link
              to="/session"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <FaVideo className="text-cyan-400" />
              <span>Upcoming Sessions</span>
            </Link>

            <a
              href="https://wa.me/358409369708?text=Hello%20FinBangla%20Voice%2C%20I%20want%20to%20learn%20more%20about%20your%20Finnish%20courses%20and%20consultations."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 transition-all text-sm"
              title="Chat with Dr. SM Shafiqul Alam on WhatsApp"
            >
              <FaWhatsapp className="text-base" />
              <span className="hidden sm:inline">WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <CountUp end={stat.value} duration={2.5} separator="," />
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>
                <p className="text-xs text-slate-400 font-medium leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Interactive Featured Card */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Subtle Gradient Glow Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* Main Interactive Glass Card */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              
              {/* Header with Live Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 pl-3">
                    Enrolling: New Batch
                  </span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  <FaStar />
                  <span>4.9 / 5.0 (350+ Reviews)</span>
                </div>
              </div>

              {/* Course Title Preview */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Practical Finnish Language Course in Bangla (Level 0 – A2)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tailored for aspiring students and immigrants moving to Finland. Master grammar, spoken Finnish, and essential workplace vocabulary.
                </p>
              </div>

              {/* Instructor Mini Profile */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80">
                <img
                  src={instructorImage}
                  alt="Dr. SM Shafiqul Alam"
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-400 shrink-0"
                />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Dr. SM Shafiqul Alam</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
                      PhD & Professor
                    </span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    Senior Researcher & Finnish Education Ambassador
                  </p>
                  <p className="text-[11px] text-cyan-400 font-medium">
                    20+ Yrs Policy & 7+ Yrs Language Coaching
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Class Format</span>
                  <span className="font-semibold text-white">Live Zoom + Recorded Archive</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Duration & Schedule</span>
                  <span className="font-semibold text-white">3 Months (Weekend Batches)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Study Resources</span>
                  <span className="font-semibold text-cyan-300">Comprehensive PDF Notes Included</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Course Fee</span>
                  <span className="font-bold text-emerald-400 text-base">50 € / Month (150 € Total)</span>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/358409369708?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Finnish%20Language%20Course%20in%20Bangla."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-md hover:shadow-emerald-600/30 flex items-center justify-center gap-1.5"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Enroll on WhatsApp</span>
                </a>
                <Link
                  to="/courses"
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm text-center transition-all border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <span>View Details</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
