import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGraduationCap
} from 'react-icons/fa';
import logoImage from '../../assets/FinBangla-Voice-Logo_3.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080D1A] text-slate-300 border-t border-slate-800/80">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 p-1 border border-blue-500/30 flex items-center justify-center">
                <img src={logoImage} alt="FinBangla Voice" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                FinBangla<span className="text-blue-500">Voice</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              The premier platform for practical Finnish language learning (Level 0–A2), university & vocational admissions in Finland, residence permit advisory, and independent journalism by <strong>Dr. SM Shafiqul Alam</strong>.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61560033836918"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://www.youtube.com/@FinBanglaVoice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="YouTube"
              >
                <FaYoutube className="text-base" />
              </a>
              <a
                href="https://www.instagram.com/finbanglavoice2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center transition shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-cyan-300 transition">
                  Finnish Language Courses
                </Link>
              </li>
              <li>
                <Link to="/session" className="text-slate-400 hover:text-cyan-300 transition">
                  Upcoming Live Sessions
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-slate-400 hover:text-cyan-300 transition">
                  Articles & Research
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-slate-400 hover:text-cyan-300 transition">
                  Media & YouTube Hub
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-300 transition">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Offerings & Programs (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-cyan-300 transition">
                  Finnish Level 0–A1
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-cyan-300 transition">
                  Finnish Level A1–A2
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-cyan-300 transition">
                  Study in Finland
                </Link>
              </li>
              <li>
                <Link to="/session" className="text-slate-400 hover:text-cyan-300 transition">
                  Zoom Masterclasses
                </Link>
              </li>
              <li>
                <Link to="/journalist" className="text-slate-400 hover:text-cyan-300 transition">
                  Founder Bio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0" />
                <span>Helsinki & Uusimaa Region, Finland</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/358409369708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +358 40 9369708
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-cyan-400 shrink-0" />
                <a
                  href="mailto:finbanglavoice@gmail.com"
                  className="hover:text-white transition"
                >
                  finbanglavoice@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://wa.me/358409369708?text=Hello%20FinBangla%20Voice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30 transition"
              >
                <FaWhatsapp />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} FinBangla Voice. All rights reserved. Directed by Dr. SM Shafiqul Alam.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition">Privacy & Terms</Link>
            <Link to="/admin" className="hover:text-slate-300 transition">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
