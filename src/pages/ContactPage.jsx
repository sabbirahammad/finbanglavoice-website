import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import JournalistFooter from './JournalistFooter';

const ContactPage = () => {
  const contactInfo = {
    phone: "+358409369708",
    email: "finbanglavoice@gmail.com",
    address: "Finland",
    facebook: "https://www.facebook.com/profile.php?id=61560033836918",
    instagram: "https://www.instagram.com/finbanglavoice2024/",
    youtube: "https://www.youtube.com/@FinBanglaVoice",
    journalistName: "Dr.SM Shofikul Alom",
    journalistImage: "https://res.cloudinary.com/dpgags9kx/image/upload/v1750434052/xljjsxykdgqwlf2icbdu.jpg",
    journalistTitle: "Journalist,Professor and Sustainability specialist",
    journalistBio: "I am a researcher, professor, and development specialist with over 20 years of experience in sustainable development, policy, education, and international cooperation. I believe knowledge and skills empower people and form the foundation for effective solutions toward sustainable development. Through the FinBangla Voice YouTube platform, I work to promote democracy, human rights, and good governance in Bangladesh. For Bangla-speaking immigrants living in Finland, I offer Finnish language courses (Level 0–A2), provide advice and support on education, employment, and family-based permanent residency, and as an ambassador of Finnish education agencies, assist Bangladeshi students in gaining admission to Finnish universities and vocational colleges.",
    expertise: [
      "South Asian Politics",
      "Youth Engagement in Democracy",
      "Election Campaign Strategies",
      "Political Journalism",
      "Human Rights",
    ],
    mediaAppearances: [
      "Featured Columnist in FinBangla",
      "TEDx Talk: Voices of Resistance",
    ],
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col">
      <section className="flex-grow py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Connect</h1>
            <p className="mt-2 text-base sm:text-lg text-gray-400 max-w-md mx-auto">
              Reach out or follow our journalist for insights and updates.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-indigo-400">📞</span> Contact Us
              </h2>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center gap-3 group">
                  <FaPhoneAlt className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <FaEnvelope className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <FaMapMarkerAlt className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
                  <span>{contactInfo.address}</span>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-indigo-400">📱</span> Social
                </h3>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:scale-110 transition-all duration-200"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:scale-110 transition-all duration-200"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={contactInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:scale-110 transition-all duration-200"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Journalist Profile */}
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-center">
                <img
                  src={contactInfo.journalistImage}
                  alt={contactInfo.journalistName}
                  className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-3 hover:ring-2 hover:ring-indigo-400 transition-all duration-200"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {contactInfo.journalistName}
                </h3>
                <p className="text-indigo-400 text-sm sm:text-base mb-3">
                  {contactInfo.journalistTitle}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {contactInfo.journalistBio}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <ul className="list-none text-gray-400 text-xs sm:text-sm space-y-2">
                  {contactInfo.expertise
                    .filter((item) => item)
                    .map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> {item}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-2">Media</h3>
                <ul className="list-none text-gray-400 text-xs sm:text-sm space-y-2">
                  {contactInfo.mediaAppearances
                    .filter((item) => item)
                    .map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JournalistFooter />
    </div>
  );
};

export default ContactPage;




