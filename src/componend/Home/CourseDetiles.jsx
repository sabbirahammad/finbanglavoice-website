import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../assets/t.webp';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [language, setLanguage] = useState('bn');
  const { id } = useParams();

  useEffect(() => {
    const courseList = [
      {
        id: '2',
        image: image,
        badge: 'Top Rated',
        price: { amount: 150, currency: 'EUR', display: '€150' },
        rating: 4.5,
        lessons: 34,
        level: 'Beginner',
        title: {
          en: '🇫🇮 Practical Finnish Language Course in Bangla (Level 0–A2)',
          bn: '🇧🇩 বাংলায় প্রাকটিক্যাল ফিনিশ ভাষা কোর্স (স্তর ০ – A২)',
        },
        description: {
          en: 'To help Bangla-speaking learners understand and use basic Finnish for everyday life, job search, and official communication.',
          bn: 'বাংলাভাষী শিক্ষার্থীদের দ্রুত ও কার্যকরভাবে ফিনিশ ভাষার মৌলিক ব্যবহার শেখানো।',
        },
        details: {
          en: `🔹 Duration: 3 Months
🔹 Class Days: 2 classes every weekend
🔹 Class Time: Final schedule based on group preference
🔹 Language of Instruction: Bangla & Finnish
🔹 Mode: Online (Zoom/Google Meet)
🔹 Course Fee: 150 Euro (50/month)
🔹 Certificate: Provided upon successful completion

📚 Focus: Grammar + Vocabulary + Reading + Listening + Speaking + Writing + Real-life Use

🎯 Course Goal:
To help Bangla-speaking learners quickly and effectively understand and use basic Finnish for everyday life, job search, and official communication.
You will learn essential grammar, practical vocabulary, sentence structures, and how to read, write, and understand simple Finnish newspapers, forms, and job advertisements.
By the end of the course, you will be able to manage common social interactions and hold everyday conversations with confidence.

👨‍🏫 Course Teacher: Dr. SM Shafiqul Alam`,
          bn: `📆 কোর্সের মেয়াদ: ৩ মাস
📚 ক্লাসের দিন: প্রতি সপ্তাহে ২টি ক্লাস (শুক্র/শনিবার)
🕘 সময়: গ্রুপের সুবিধামতো সময় নির্ধারণ করা হবে
🗣 শিক্ষার ভাষা: বাংলা ও ফিনিশ
💻 পদ্ধতি: অনলাইন (Zoom / Google Meet)
💶 কোর্স ফি: ১৫০ ইউরো (মাসে ৫০ ইউরো)
📜 সার্টিফিকেট: কোর্স শেষে প্রদান করা হবে

📚 কী শিখবেন:
ব্যাকরণ + শব্দভাণ্ডার + পড়া + শোনা + বলা + লেখা + বাস্তব জীবনের ব্যবহার

🎯 কোর্সের লক্ষ্য:
বাংলাভাষী শিক্ষার্থীদের দ্রুত ও কার্যকরভাবে ফিনিশ ভাষার মৌলিক ব্যবহার শেখানো, যেন তারা দৈনন্দিন জীবন, চাকরির খোঁজ ও সরকারি যোগাযোগে স্বাচ্ছন্দ্যে ফিনিশ ব্যবহার করতে পারেন।
এই কোর্সে আপনি শিখবেন দরকারি ব্যাকরণ, ব্যবহারিক শব্দভাণ্ডার, বাক্য গঠন, এবং কীভাবে সহজ ফিনিশ পত্রিকা, ফর্ম ও চাকরির বিজ্ঞাপন পড়তে, লিখতে ও বুঝতে হয়।
কোর্স শেষে আপনি সাধারণ সামাজিক যোগাযোগ এবং দৈনন্দিন কথোপকথনে আত্মবিশ্বাসের সঙ্গে অংশ নিতে পারবেন।

👨‍🏫 কোর্স পরিচালনায়: ড. এস এম শফিকুল আলম`,
        },
      },
    ];

    // Filter by URL param id
    const matched = courseList.filter((course) => course.id === id);
    setCourses(matched);
  }, [id]);

  return (
    <section className="bg-gray-900 py-12 px-4 text-white min-h-screen mt-14">
      <div className="max-w-4xl mx-auto">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setLanguage('en')}
            className={`py-2 px-4 rounded-l-lg ${
              language === 'en' ? 'bg-blue-700' : 'bg-blue-500'
            } text-white font-semibold`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('bn')}
            className={`py-2 px-4 rounded-r-lg ${
              language === 'bn' ? 'bg-green-700' : 'bg-green-500'
            } text-white font-semibold`}
          >
            বাংলা
          </button>
        </div>

        {/* Course Details */}
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#1A1A1A] rounded-2xl shadow-lg p-6 mb-10"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={course.image}
                alt={course.title[language]}
                className="w-full lg:w-1/3 h-64 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {course.title[language]}
                </h2>
                <p className="text-gray-300 mb-4">
                  {course.description[language]}
                </p>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 bg-gray-800 p-4 rounded-lg">
                  {course.details[language]}
                </pre>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/+358409369708?text=${encodeURIComponent(
                    `Hi, I want to enroll in the "${course.title[language]}" course.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
                    📱 Enroll Now on WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
