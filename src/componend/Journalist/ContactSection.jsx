import React from 'react';
import { FaEnvelope, FaWhatsapp, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="rounded-3xl bg-[#0F172A] border border-slate-800 p-8 sm:p-10 shadow-xl">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Connect with Dr. SM Shafiqul Alam
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          For academic collaborations, Finnish language batch registrations, media interviews, and university admission consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <a
          href="https://wa.me/358409369708"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/40 text-center space-y-2 group transition"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
            <FaWhatsapp className="text-lg" />
          </div>
          <h4 className="text-xs font-bold text-white group-hover:text-emerald-300">WhatsApp Hotline</h4>
          <p className="text-xs text-slate-400">+358 40 9369708</p>
        </a>

        <a
          href="mailto:finbanglavoice@gmail.com"
          className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-blue-500/40 text-center space-y-2 group transition"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center">
            <FaEnvelope className="text-lg" />
          </div>
          <h4 className="text-xs font-bold text-white group-hover:text-blue-300">Official Email</h4>
          <p className="text-xs text-slate-400">finbanglavoice@gmail.com</p>
        </a>

        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 mx-auto flex items-center justify-center">
            <FaMapMarkerAlt className="text-lg" />
          </div>
          <h4 className="text-xs font-bold text-white">Location</h4>
          <p className="text-xs text-slate-400">Helsinki, Finland</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
