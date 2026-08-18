import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLanguage,
  FaUniversity,
  FaFileSignature,
  FaMapMarkedAlt,
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp
} from 'react-icons/fa';

const PathwaySection = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Finnish Language Foundation',
      subtitle: 'ফিনিশ ভাষার মজবুত ভিত্তি',
      description:
        'Start with our Level 0 to A2 structured online batches. Clear explanations in Bengali make learning grammar, vocabulary, and everyday spoken Finnish intuitive and engaging.',
      icon: <FaLanguage className="text-2xl text-blue-400" />,
      features: ['Level 0-A2 Courses', 'Native Bengali Explanations', 'PDF Drills & Tasks'],
    },
    {
      stepNumber: '02',
      title: 'Program & College Selection',
      subtitle: 'সঠিক বিশ্ববিদ্যালয় ও কোর্স নির্বাচন',
      description:
        'Receive personalized guidance as an ambassador of Finnish education agencies. Select suitable Bachelor, Master, or Vocational (Ammattiopisto) study tracks in Finland.',
      icon: <FaUniversity className="text-2xl text-cyan-400" />,
      features: ['University & AMK Pathways', 'Vocational College Prep', 'Scholarship Strategies'],
    },
    {
      stepNumber: '03',
      title: 'Application & Visa Processing',
      subtitle: 'ভর্তি আবেদন ও রেসিডেন্স পারমিট',
      description:
        'Get assistance with application portals, SOP & motivation letters, university entrance exams, and official Finnish Residence Permit (RP / D-Visa) documentation.',
      icon: <FaFileSignature className="text-2xl text-emerald-400" />,
      features: ['SOP & CV Review', 'D-Visa/RP Guidance', 'Interview Preparation'],
    },
    {
      stepNumber: '04',
      title: 'Integration & Career Settlement',
      subtitle: 'ফিনল্যান্ডে ক্যারিয়ার ও স্থায়ী বসবাস',
      description:
        'Connect with the FinBangla community in Finland. Get practical advice on student job hunting, family reunification, official registrations (DVV/Kela), and Nordic life.',
      icon: <FaMapMarkedAlt className="text-2xl text-amber-400" />,
      features: ['Job Search & Networking', 'Family Permanent Residency', 'Diaspora Community Hub'],
    },
  ];

  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Your Step-by-Step Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Proven Road to <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Success in Finland</span>
          </h2>
          <p className="text-base text-slate-300">
            From your very first Finnish word to securing admission and settling into Nordic life, we guide you every step of the way.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl bg-[#0B1120] border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-black text-slate-700 group-hover:text-blue-400/40 transition">
                    {step.stepNumber}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Mini Features List */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                {step.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <FaCheckCircle className="text-emerald-400 shrink-0 text-[10px]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Pathway Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Not sure which step to start with?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get in touch directly with Dr. SM Shafiqul Alam for personal consultation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/358409369708?text=Hello%20FinBangla%20Voice%2C%20I%20need%20guidance%20on%20studying%20in%20Finland."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <FaWhatsapp className="text-base" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition"
            >
              <span>Contact Page</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PathwaySection;
