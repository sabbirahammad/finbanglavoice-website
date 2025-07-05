import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactBanner = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchBanner = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3000/contactBanner');
  //       setData(res.data);
  //     } catch (error) {
  //       console.error('Error fetching contact banner:', error);
  //     }
  //   };

  //   fetchBanner();
  // }, []);

  // if (!data) return <div className="text-center py-20">Loading contact info...</div>;

  const data = {
    "headline": "📘 Let’s Talk About Your Learning Journey",
    "subtext": "Whether you have a question, need guidance, or want to book a free consultation — I’m here to support you every step of the way.",
    "note": "Responsive, supportive, and always student-focused.",
    "cardTitle": "Need Help? 🤔",
    "cardMessage": "Reach out now and I’ll personally get back to you within 24 hours!",
    "buttonText": "✉️ Contact Now"
  }

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {data.headline}
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6">{data.subtext}</p>
          <p className="text-sm text-white/80">{data.note}</p>
        </div>

        {/* Right: Contact Action Box */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 sm:p-10 text-center">
          <h3 className="text-xl font-semibold mb-4">{data.cardTitle}</h3>
          <p className="text-gray-600 mb-6 text-sm">{data.cardMessage}</p>
          <Link to="/contact">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md">
              {data.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;

