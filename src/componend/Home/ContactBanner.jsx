import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaCalendarCheck, FaArrowRight } from 'react-icons/fa';

const ContactBanner = () => {
  const contactInfo = {
    whatsapp: '+358409369708',
    email: 'finbanglavoice@gmail.com',
  };

  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-950/60 border border-blue-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <FaCalendarCheck />
                <span>Start Your Finnish Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Learn Finnish or Study in <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Finland?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Get direct guidance on course batches, university admissions, and Nordic relocation from Dr. SM Shafiqul Alam. Reach out today!
              </p>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=Hello%20FinBangla%20Voice%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/30 active:scale-95 text-sm"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat on WhatsApp (+358 40 9369708)</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md active:scale-95 text-sm"
              >
                <FaEnvelope className="text-sm" />
                <span>Send Message / Book Consultation</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;

