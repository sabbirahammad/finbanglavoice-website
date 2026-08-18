import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaGraduationCap,
  FaClock
} from 'react-icons/fa';
import Footer from '../componend/Home/Footer';
import instructorImage from '../assets/t.webp';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Finnish Language Course (A0–A1)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = {
    phone: '+358 40 9369708',
    whatsapp: '+358409369708',
    email: 'finbanglavoice@gmail.com',
    location: 'Helsinki & Uusimaa Region, Finland',
    hours: 'Mon – Sat: 09:00 – 19:00 (EET)',
    facebook: 'https://www.facebook.com/profile.php?id=61560033836918',
    instagram: 'https://www.instagram.com/finbanglavoice2024/',
    youtube: 'https://www.youtube.com/@FinBanglaVoice',
    founderName: 'Dr. SM Shafiqul Alam',
    founderTitle: 'Founder, Professor & Senior Policy Researcher',
    founderBio:
      'Guiding students and immigrants on Finnish language mastery (Level 0–A2), university and vocational admissions (AMK & Ammattiopisto), and Nordic integration. Leading dialogues on governance and human rights on YouTube.',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct to WhatsApp for instant connection
    const text = encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'N/A'}\n` +
      `*Interest:* ${formData.topic}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/358409369708?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-[#0F172A] to-[#0B1120] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FaEnvelope className="text-xs" />
            <span>Connect & Consult</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Discuss Your <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Finnish Future</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about upcoming Finnish language batches, university or vocational admissions, residence permit guidance, or media collaborations? Reach out directly to Dr. SM Shafiqul Alam.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Info & Profile (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Founder Profile Card */}
              <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={instructorImage}
                    alt={contactInfo.founderName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/80 shadow-md"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {contactInfo.founderName}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">{contactInfo.founderTitle}</p>
                    <p className="text-[11px] text-slate-400">FinBangla Voice Platform</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  {contactInfo.founderBio}
                </p>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20Dr.%20SM%20Shafiqul%20Alam%2C%20I%20would%20like%20to%20schedule%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Direct Contact Channels Card */}
              <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4 shadow-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Contact Information
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <FaWhatsapp className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">WhatsApp Helpline</p>
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-cyan-300 transition"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <FaEnvelope className="text-xs" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Email Address</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="font-semibold text-white hover:text-cyan-300 transition"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                      <FaMapMarkerAlt className="text-xs" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Location</p>
                      <p className="font-semibold text-white">{contactInfo.location}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <FaClock className="text-xs" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Consultation Hours</p>
                      <p className="font-semibold text-white">{contactInfo.hours}</p>
                    </div>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Official Social Channels
                  </p>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={contactInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="text-xs" />
                    </a>
                    <a
                      href={contactInfo.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="text-sm" />
                    </a>
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-xs" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center transition"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="text-xs" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive Consultation & Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-2xl space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Send a Message or Book Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    Fill in your details below and we will respond within 24 hours via WhatsApp or Email.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                    <FaCheckCircle className="text-3xl text-emerald-400 mx-auto" />
                    <h3 className="text-base font-bold text-white">Thank You! Inquiry Sent</h3>
                    <p className="text-xs text-slate-300">
                      Your consultation request has been prepared and redirected to WhatsApp. Dr. SM Shafiqul Alam will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-semibold block">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Mehedi Hasan"
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-semibold block">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. yourname@gmail.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-semibold block">WhatsApp / Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +880 1700-000000 or +358..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-slate-300 font-semibold block">Area of Interest *</label>
                        <select
                          name="topic"
                          value={formData.topic}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
                        >
                          <option value="Finnish Language Course (A0–A1)">Finnish Language Course (A0–A1)</option>
                          <option value="Intermediate Finnish (A1–A2)">Intermediate Finnish (A1–A2)</option>
                          <option value="University & AMK Admissions in Finland">University & AMK Admissions in Finland</option>
                          <option value="Vocational College (Ammattiopisto) Route">Vocational College (Ammattiopisto) Route</option>
                          <option value="Residence Permit & Family Relocation">Residence Permit & Family Relocation</option>
                          <option value="Media Interview / Journalism Dialogue">Media Interview / Journalism Dialogue</option>
                          <option value="General Query">General Query</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold block">Your Message / Question *</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please write your questions, academic background, or specific help needed..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <FaPaperPlane className="text-xs" />
                      <span>Submit Inquiry via WhatsApp / Helpline</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
