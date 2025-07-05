import React, { useEffect, useState } from 'react';
import { Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import axios from 'axios';

const ContactSection = () => {
  // const [contactInfo, setContactInfo] = useState(null);

  // useEffect(() => {
  //   const fetchContactInfo = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3000/contactInfo');
  //       setContactInfo(res.data);
  //     } catch (error) {
  //       console.error('Failed to fetch contact info:', error);
  //     }
  //   };

  //   fetchContactInfo();
  // }, []);

  // if (!contactInfo) {
  //   return (
  //     <section className="p-6 text-center text-gray-500">
  //       Loading contact info...
  //     </section>
  //   );
  // }
    const contactInfo = {
    "email": "finbanglavoice@gmail.com",
    "socialLinks": {
      "facebook": "https://www.facebook.com/profile.php?id=61560033836918",
      "twitter": "https://twitter.com/rumana_journalist",
      "linkedin": "https://www.instagram.com/finbanglavoice2024/",
      "youtube": "https://www.youtube.com/@FinBanglaVoice"
    }
  }

  const { email, socialLinks } = contactInfo;
  

  return (
    <section className="relative bg-white p-6 sm:p-10 rounded-2xl shadow-md mb-10 overflow-hidden">
      {/* Top decorative gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 rounded-t-2xl"></div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Let’s Connect
      </h2>

      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
            <Mail className="w-5 h-5 text-indigo-600" />
            <span>{email}</span>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-red-500" />
            </a>
          </div>
        </div>

        {/* Right: Newsletter Form */}
        <div className="flex-1">
          <form className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-5 rounded-xl shadow-inner border border-indigo-200">
            <label className="block mb-2 text-sm font-semibold text-indigo-800">
              📬 Subscribe for updates
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


