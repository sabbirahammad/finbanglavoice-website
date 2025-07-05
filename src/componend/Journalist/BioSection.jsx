import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const BioSection = () => {
  // const [bio, setBio] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:3000/journalistBio') // or your deployed endpoint
  //     .then(res => res.json())
  //     .then(data => setBio(data))
  //     .catch(err => console.error("Failed to load bio:", err));
  // }, []);

  // if (!bio) {
  //   return (
  //     <div className="text-center text-gray-600 py-10">
  //       Loading biography...
  //     </div>
  //   );
  // }
    const bio = {
    "name": "Dr.SM Shofikul Alom",
    "description": "Dr shofikul alom is a fearless voice in the field of investigative journalism, known for uncovering hidden truths and amplifying unheard voices. With more than a decade of experience reporting on human rights and political accountability, she has partnered with leading global outlets to bring attention to stories that others ignore.\n\nHer storytelling is marked by a deep commitment to empathy, justice, and impact — going beyond facts to spotlight lives. Rumana’s work has not only earned international recognition but has also led to tangible policy conversations and reform.",
    "quote": "Journalism isn’t about speaking — it’s about listening deeply, then echoing what matters."
  }
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 rounded-2xl shadow-md p-6 sm:p-10 mb-10 overflow-hidden">
      <Quote className="absolute top-5 right-5 w-12 h-12 text-indigo-100 opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-t-2xl" />

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        About the Journalist
      </h2>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-wide text-justify whitespace-pre-line">
        <span className="font-semibold text-indigo-600">{bio.name}</span> {bio.description}
      </p>

      <div className="mt-8 border-l-4 border-indigo-500 pl-4 text-indigo-700 italic text-sm sm:text-base bg-indigo-50/40 py-2 rounded-md shadow-inner">
        “{bio.quote}”
      </div>
    </section>
  );
};

export default BioSection;


