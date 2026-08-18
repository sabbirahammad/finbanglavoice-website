import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaVideo,
  FaCalendarAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaChalkboardTeacher,
  FaCheck
} from 'react-icons/fa';
import { API_BASE_URL } from '../../config/api';

const fallbackSessions = [
  {
    id: 'session-fin-lang-live',
    title: 'Live Finnish Language Spoken Workshop & Orientation (A0–A1)',
    mode: 'Live Online (Zoom)',
    instructor: 'Dr. SM Shafiqul Alam',
    duration: 1.5,
    rate: 0,
    date: 'Upcoming Weekend',
    time: '08:00 PM (Helsinki Time) / 11:00 PM (BD Time)',
    description:
      'Interactive workshop covering basic Finnish greetings, phonetics, and a walkthrough of the upcoming Finnish Language Batch curriculum with live Q&A.',
    whatsapp: '+358409369708',
    email: 'finbanglavoice@gmail.com',
    highlights: [
      'Pronunciation & sound rules for Bengali speakers',
      'Common daily Finnish expressions',
      'Overview of 3-month structured roadmap',
      'Open Q&A for prospective learners',
    ],
    isLive: false,
    session_link: 'https://wa.me/358409369708?text=Hello%20FinBangla%20Voice%2C%20I%20want%20to%20join%20the%20Live%20Finnish%20Workshop.',
  },
  {
    id: 'session-fin-study-qa',
    title: 'Study in Finland: University Admissions, Scholarships & RP Q&A',
    mode: 'Live Interactive Webinar',
    instructor: 'Dr. SM Shafiqul Alam',
    duration: 2,
    rate: 0,
    date: 'Next Scheduled Session',
    time: '07:30 PM (Helsinki Time)',
    description:
      'Live advisory session covering University & AMK application cycles, entrance exams, tuition fee waiver tactics, and student residence permit procedures.',
    whatsapp: '+358409369708',
    email: 'finbanglavoice@gmail.com',
    highlights: [
      'University vs Applied Science (AMK) admissions',
      'Vocational college (Ammattiopisto) pathway',
      'Documentation & fund requirements for D-Visa',
      'Part-time jobs & living expenses in Finland',
    ],
    isLive: false,
    session_link: 'https://wa.me/358409369708?text=Hello%20FinBangla%20Voice%2C%20I%20want%20to%20register%20for%20the%20Study%20in%20Finland%20Q%26A.',
  },
];

const SessionSection = () => {
  const [sessions, setSessions] = useState(fallbackSessions);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/sessions`);
        const data = await res.json();
        if (res.ok) {
          const list = Array.isArray(data) ? data : data?.sessions || [];
          if (list.length > 0) {
            const mapped = list.map((s) => ({
              id: s.id || s.session_id,
              title: s.course_name || 'Upcoming Live Session',
              mode: s.session_type || 'Live Online (Zoom)',
              instructor: s.instructor?.name || 'Dr. SM Shafiqul Alam',
              duration: Number.parseFloat(s.duration) || 1.5,
              rate: Number.parseFloat(s.rate) || 0,
              date: s.session_schedule?.date || 'Upcoming Weekend',
              time: s.session_schedule?.time || 'Evening Batch',
              description: s.overview || 'Live interactive session on Finnish language and education.',
              whatsapp: s.contact_options?.whatsapp || '+358409369708',
              email: s.contact_options?.email || 'finbanglavoice@gmail.com',
              session_link: s.session_link || '',
              highlights: [
                'Interactive live Q&A with Dr. SM Shafiqul Alam',
                'Comprehensive guidance and study materials',
                'Real-time clarification of doubts',
              ],
            }));
            setSessions(mapped);
          }
        }
      } catch (err) {
        console.error('Failed to load sessions from API, using fallback:', err);
      }
    };

    loadSessions();
  }, []);

  return (
    <section className="py-20 bg-[#0B1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Live Learning & Masterclasses
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Upcoming <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Live Sessions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Join live interactive Zoom workshops, Finnish language spoken sessions, and higher education masterclasses.
            </p>
          </div>
          <Link
            to="/session"
            className="w-fit inline-flex items-center gap-2 rounded-xl bg-cyan-600/20 border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-600 hover:text-white transition-all shadow-sm"
          >
            <span>All Live Sessions</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sessions.slice(0, 2).map((session, idx) => {
            const rsvpUrl =
              session.session_link && session.session_link.startsWith('http')
                ? session.session_link
                : `https://wa.me/${String(session.whatsapp || '+358409369708').replace(
                    /\D/g,
                    ''
                  )}?text=${encodeURIComponent(
                    `Hi, I would like to join the live session "${session.title}".`
                  )}`;

            return (
              <motion.article
                key={session.id || idx}
                className="relative rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  {/* Top Bar: Mode & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                      <FaVideo className="text-[11px]" />
                      {session.mode}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      <FaClock className="text-blue-400" />
                      {session.duration} Hours Live
                    </span>
                  </div>

                  {/* Session Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-300 transition">
                    {session.title}
                  </h3>

                  {/* Overview */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {session.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 mb-6">
                    {session.highlights?.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <FaCheck className="text-emerald-400 shrink-0 text-xs mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule Card */}
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-300 space-y-1.5 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FaCalendarAlt className="text-cyan-400" /> Date & Time:
                      </span>
                      <span className="font-semibold text-white">{session.date} • {session.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FaChalkboardTeacher className="text-blue-400" /> Host:
                      </span>
                      <span className="font-semibold text-cyan-300">{session.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                  <a
                    href={rsvpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Reserve Seat</span>
                  </a>
                  <Link
                    to="/session"
                    className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm text-center transition-all border border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <span>Session Details</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SessionSection;
