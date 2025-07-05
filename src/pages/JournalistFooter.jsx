import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import axios from 'axios';
import image from '../assets/s.webp'

const JournalistFooter = () => {
  // const [footerData, setFooterData] = useState(null);

  // useEffect(() => {
  //   const fetchFooterData = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3000/journalistFooter');
  //       setFooterData(res.data);
  //     } catch (err) {
  //       console.error('Failed to fetch footer data:', err);
  //     }
  //   };
  //   fetchFooterData();
  // }, []);

  // if (!footerData) return <div className="text-center py-10 text-gray-500">Loading footer...</div>;
 const footerData = {
   "name": "Dr.SM Shofikul Alom",
    "title": "Investigative Journalist & Political Analyst",
    "bio": "Known for uncovering truths behind political turmoil, Dr. Islam has reported from some of the world’s most dangerous conflict zones.",
    "email": "finbanglavoice@gmail.com",
    "phone": "+358409369708",
    "image":image,
      "facebook": "https://www.facebook.com/profile.php?id=61560033836918",
    "instagram": "https://www.instagram.com/finbanglavoice2024/",
    "youtube": "https://www.youtube.com/@FinBanglaVoice",
    "topics": [
      "Human Rights Reporting",
      "South Asian Geopolitics",
      "Grassroots Activism",
      "Fake News & Fact-checking"
    ],
    "links": [
      {
        "label": "Contact",
        "url": "/contact"
      },
      {
        "label": "Join Newsletter",
        "url": "/journalist"
      },
      {
        "label": "Support My Work",
        "url": "/session"
      },
    ]
 }

  return (
    <footer className="bg-[#1A1A1A] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Info */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={footerData.image}
              alt={footerData.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
            />
            <div>
              <h4 className="text-lg font-bold">{footerData.name}</h4>
              <p className="text-sm text-gray-600">{footerData.title}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-4">{footerData.bio}</p>
          <div className="text-sm space-y-1 text-gray-700">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-600" /> {footerData.email}
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-600" /> {footerData.phone}
            </p>
          </div>
        </div>

        {/* Key Features / Topics */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-gray-900">🔍 Featured Topics</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            {footerData.topics.map((item, idx) => (
              <li key={idx}>✔️ {item}</li>
            ))}
          </ul>
        </div>

        {/* Navigation & Social */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-gray-900">📁 Quick Links</h4>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            {footerData.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 text-indigo-600 text-xl">
            <a href={footerData.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href={footerData.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href={footerData.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} {footerData.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default JournalistFooter;
