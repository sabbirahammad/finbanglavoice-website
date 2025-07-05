// src/pages/UpcomingSessionsPage.jsx
import React, { useEffect, useState } from 'react';
import SessionBanner from './SessionBanner';
import SessionFilterBar from './SessionFilterBar';
import UpcomingSessionList from './UpcomingSessionList';

// ✅ Move session data outside the component to prevent re-creation every render
const sessions = [
  {
    id: "b710",
    title: "Finland Language",
    mode: "Live Zoom",
    instructor: "Dr. SM Shofikul Alom",
    duration: 2,
    rate: 50,
    description: "We discuss the roots and effects of the crisis in the Middle East.",
    whatsapp: "+358409369708",
    email: "finbanglavoice@gmail.com"
  },
  {
    id: "d544",
    title: "Finland Language",
    mode: "Live Zoom",
    instructor: "Dr. SM Shofikul Alom",
    duration: 1,
    rate: 50,
    description: "We discuss the roots and effects of the crisis in the Middle East.",
    whatsapp: "+358409369708",
    email: "finbanglavoice@gmail.com"
  }
];

const UpcomingSessionsPage = () => {
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [selectedMode, setSelectedMode] = useState('All');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Get unique instructor names
  const instructors = [...new Set(sessions.map((s) => s.instructor))];

  // ✅ Filter sessions based on selected criteria
  useEffect(() => {
    let filtered = [...sessions];

    if (selectedMode !== 'All') {
      filtered = filtered.filter((s) => s.mode === selectedMode);
    }

    if (selectedInstructor !== 'All') {
      filtered = filtered.filter((s) => s.instructor === selectedInstructor);
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter((s) =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSessions(filtered);
  }, [selectedMode, selectedInstructor, searchTerm]);

  return (
    <section className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 🚀 Top Banner */}
        <SessionBanner />

        {/* 🔍 Filter Bar */}
        <SessionFilterBar
          selectedMode={selectedMode}
          onModeChange={setSelectedMode}
          instructors={instructors}
          selectedInstructor={selectedInstructor}
          onInstructorChange={setSelectedInstructor}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* 📅 Filtered Session Cards */}
        <UpcomingSessionList sessions={filteredSessions} />
      </div>
    </section>
  );
};

export default UpcomingSessionsPage;




