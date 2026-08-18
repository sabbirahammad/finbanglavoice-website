import React from 'react';
import { FaWhatsapp, FaCalendarCheck, FaUserGraduate } from 'react-icons/fa';

const BookDemoClass = () => {
  const whatsappUrl = `https://wa.me/358409369708?text=Hello%20Dr.%20SM%20Shafiqul%20Alam%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20or%20demo%20session.`;

  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-900/50 via-slate-900 to-cyan-900/50 border border-blue-500/30 p-8 sm:p-10 mb-10 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FaCalendarCheck />
            <span>Consultation & Demo Session</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Schedule a Direct 1-on-1 Session
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Discuss your study plan in Finland, admission eligibility, or find the right Finnish language batch for your level.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-emerald-900/30 flex items-center gap-2 shrink-0 active:scale-95"
        >
          <FaWhatsapp className="text-base" />
          <span>Chat on WhatsApp (+358 40 9369708)</span>
        </a>
      </div>
    </section>
  );
};

export default BookDemoClass;
