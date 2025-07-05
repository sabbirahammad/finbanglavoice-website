import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../assets/s.webp'
const TeacherIntro = () => {
  // const [teacher, setTeacher] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:3000/teacher') // 🔁 Change port if needed
  //     .then((res) => res.json())
  //     .then((data) => setTeacher(data))
  //     .catch((err) => console.error("Failed to load teacher data:", err));
  // }, []);

  // if (!teacher) return <div className="text-center py-10">Loading...</div>;

  const teacher= {
    "id": 1,
    "name": "Dr.SM Shofikul Alom",
    "profileImage": image,
    "experienceYears": 7,
    "teachingGrades": "6 to 10",
    "specialties": [
      "Math",
      "Science",
      "English"
    ],
   "description": "I am a researcher, professor, and development specialist with over 20 years of experience in sustainable development, policy, education, and international cooperation. I believe knowledge and skills empower people and form the foundation for effective solutions toward sustainable development. Through the FinBangla Voice YouTube platform, I work to promote democracy, human rights, and good governance in Bangladesh. For Bangla-speaking immigrants living in Finland, I offer Finnish language courses (Level 0–A2), provide advice and support on education, employment, and family-based permanent residency, and as an ambassador of Finnish education agencies, assist Bangladeshi students in gaining admission to Finnish universities and vocational colleges."
,
    "typingWords": [
      " professor 💡",
      "development specialist 🔬",
      "I am a researcher ✍️"
    ],
    "socialLinks": {
      "facebook": "https://www.facebook.com/profile.php?id=61560033836918",
      "youtube": "https://www.youtube.com/@FinBanglaVoice",
      "linkedin": "https://linkedin.com",
      "email": "finbanglavoice@gmail.com"
    },
    "cta": {
      "text": "Book a Free Demo Class",
      "link": "/journalist"
    }
  }

  return (
    <section className="py-16 px-4 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.img
          src={teacher.profileImage}
          alt={teacher.name}
          className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-xl border-4 border-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2">
            Meet Your Teacher 👩‍🏫
          </h2>

          {/* Typing Effect */}
          <h3 className="text-lg font-medium text-blue-600 mb-4">
            <Typewriter
              words={teacher.typingWords}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {teacher.description}
          </p>

          {/* Quote Box */}
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 my-4 rounded-lg shadow-sm">
            <p className="italic text-blue-800">“{teacher.quote}”</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a href={teacher.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={20} />
            </a>
            <a href={teacher.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
              <FaYoutube size={24} />
            </a>
            <a href={teacher.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={20} />
            </a>
            <a href={teacher.socialLinks.email} className="text-gray-600 hover:text-gray-800">
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* CTA Button */}
          <Link to={"/journalist"}>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-md transition duration-200">
              📅 {teacher.cta.text}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherIntro;


