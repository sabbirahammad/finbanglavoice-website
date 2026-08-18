import React from 'react';
import { motion } from 'framer-motion';
import {
  FaVideo,
  FaCalendarAlt,
  FaClock,
  FaWhatsapp,
  FaEnvelope,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaEuroSign
} from 'react-icons/fa';

const UpcomingSessionCard = ({ session }) => {
  const rsvpWhatsappUrl = `https://wa.me/${String(session.whatsapp || '358409369708').replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hi Dr. SM Shafiqul Alam, I would like to reserve my seat for the live session: "${session.title}".`
  )}`;

  return (
    <motion.article
      className="p-6 sm:p-7 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between h-full group hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="space-y-4">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
            <FaVideo className="text-[10px]" />
            {session.mode || 'Live Zoom'}
          </span>
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
            <FaClock className="text-blue-400" />
            {session.duration ? `${session.duration} Hours` : '1.5 Hours'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
          {session.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {session.description || 'Interactive live session with open Q&A and practical guidance.'}
        </p>

        {/* Schedule & Info Box */}
        <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FaChalkboardTeacher className="text-blue-400" /> Host:
            </span>
            <span className="font-semibold text-white">{session.instructor || 'Dr. SM Shafiqul Alam'}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FaCalendarAlt className="text-cyan-400" /> Date & Time:
            </span>
            <span className="font-semibold text-cyan-300">{session.date || 'Upcoming Weekend'} • {session.time || 'Evening Batch'}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FaEuroSign className="text-emerald-400" /> Fee:
            </span>
            <span className="font-bold text-emerald-400">
              {session.rate > 0 ? `${session.rate} €` : 'Free / Open to Registered Students'}
            </span>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-5 mt-6 border-t border-slate-800/80">
        <a
          href={rsvpWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs text-center transition shadow-md flex items-center justify-center gap-1.5 active:scale-95"
        >
          <FaWhatsapp className="text-sm" />
          <span>Reserve Seat</span>
        </a>

        <a
          href={`mailto:${session.email || 'finbanglavoice@gmail.com'}?subject=Inquiry regarding live session: ${encodeURIComponent(session.title)}`}
          className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs text-center transition border border-slate-700 flex items-center justify-center gap-1.5"
        >
          <FaEnvelope className="text-xs" />
          <span>Email Details</span>
        </a>
      </div>
    </motion.article>
  );
};

export default UpcomingSessionCard;
