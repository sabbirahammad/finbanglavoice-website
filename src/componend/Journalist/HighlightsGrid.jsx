// src/components/Journalist/HighlightsGrid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Globe, Award, CalendarCheck, FileText } from 'lucide-react';

const iconMap = {
  FileText: FileText,
  Award: Award,
  Globe: Globe,
  CalendarCheck: CalendarCheck
};

const HighlightsGrid = () => {
  // const [highlights, setHighlights] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/highlights')
  //     .then(res => setHighlights(res.data))
  //     .catch(err => {
  //       console.error("Failed to fetch highlights:", err);
  //       setHighlights([]);
  //     });
  // }, []);

 const highlights = [
    {
      "id": "0552",
      "label": "Awards Won",
      "value": "12+",
      "icon": "Award",
      "color": "text-yellow-500"
    },
    {
      "id": "8cb6",
      "label": "Article",
      "value": "15+",
      "icon": "FileText",
      "color": "text-green-500"
    },
    {
      "id": "0904",
      "label": "Novel win",
      "value": "1",
      "icon": "Activity",
      "color": "text-blue-500"
    },
     {
      "id": "0552",
      "label": "Awards Won",
      "value": "12+",
      "icon": "Award",
      "color": "text-yellow-500"
    },
  ]

  return (
    <section className="bg-white p-6 sm:p-10 rounded-2xl shadow-md mb-10 mt-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        🚀 Career Highlights
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {highlights.map((item) => {
          const Icon = iconMap[item.icon] || FileText;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow hover:shadow-md transition hover:-translate-y-1"
            >
              <div className="bg-white p-3 rounded-full shadow-md mb-2 border border-gray-200">
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <p className="text-xl font-bold text-indigo-700">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HighlightsGrid;


