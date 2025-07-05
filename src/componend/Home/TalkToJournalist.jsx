import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image from '../../assets/s.webp';

const TalkToJournalist = () => {
  const journalist = {
    email: 'finbanglavoice@gmail.com',
    whatsapp: '+358409369708',
    messenger: '',
    name: 'Dr. SM Shofikul Alom',
    title: 'Journalist,Professor and Sustainability specialist',
    image: image,
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-black rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl md:flex hover:shadow-white/10 transition-shadow"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Left - Info */}
        <div className="relative z-10 w-full md:w-3/5 p-8 md:p-12 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">{journalist.name}</h1>
            <p className="text-gray-400 mt-1">{journalist.title}</p>
          </div>

          <div className="space-y-4 text-sm md:text-base">
            {journalist.email && (
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href={`mailto:${journalist.email}`}
                  className="hover:underline text-gray-300 hover:text-white"
                >
                  {journalist.email}
                </a>
              </div>
            )}

            {journalist.whatsapp && (
              <div className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href={`https://wa.me/${journalist.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline hover:text-green-300"
                >
                  WhatsApp: {journalist.whatsapp}
                </a>
              </div>
            )}

            {journalist.messenger && (
              <div className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href={journalist.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300 hover:text-white"
                >
                  Messenger
                </a>
              </div>
            )}
          </div>

          <div>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Contact Now
            </Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto">
          <img
            src={journalist.image}
            alt={`Photo of ${journalist.name}`}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default TalkToJournalist;


