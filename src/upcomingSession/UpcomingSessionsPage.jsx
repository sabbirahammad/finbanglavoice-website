// src/pages/UpcomingSessionsPage.jsx
import React, { useEffect, useState } from 'react';
import SessionBanner from './SessionBanner';
import SessionFilterBar from './SessionFilterBar';
import UpcomingSessionList from './UpcomingSessionList';
import { API_BASE_URL } from '../config/api';

// ✅ Move session data outside the component to prevent re-creation every render
const fallbackSessions = [
  {
    id: "b710",
    title: "Finland Language",
    mode: "Live Zoom",
    instructor: "Dr. SM Shafiqul Alam",
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
    instructor: "Dr. SM Shafiqul Alam",
    duration: 1,
    rate: 50,
    description: "We discuss the roots and effects of the crisis in the Middle East.",
    whatsapp: "+358409369708",
    email: "finbanglavoice@gmail.com"
  }
];

const UpcomingSessionsPage = () => {
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [sessions, setSessions] = useState(fallbackSessions);
  const [selectedMode, setSelectedMode] = useState('All');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingSessions, setLoadingSessions] = useState(true);
  const [sessionError, setSessionError] = useState('');

  // ✅ Get unique instructor names
  const instructors = [...new Set(sessions.map((s) => s.instructor))];

  useEffect(() => {
    const loadSessions = async () => {
      setLoadingSessions(true);
      setSessionError('');

      try {
        const response = await fetch(`${API_BASE_URL}/api/sessions`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Failed to load sessions');
        }

        const sessionList = Array.isArray(data) ? data : data?.sessions || [];
        const mappedSessions = sessionList.map((session) => ({
          id: session.id || session.session_id,
          title: session.course_name || 'Untitled Session',
          mode: session.session_type || 'Online',
          instructor: session.instructor?.name || 'Unknown instructor',
          duration: Number.parseFloat(session.duration) || 0,
          rate: Number.parseFloat(session.rate) || 0,
          description: session.overview || '',
          whatsapp: session.contact_options?.whatsapp || '',
          email: session.contact_options?.email || '',
          session_link: session.session_link || '',
          session_schedule: session.session_schedule,
        }));

        setSessions(mappedSessions.length ? mappedSessions : fallbackSessions);
      } catch (error) {
        console.error('Failed to load sessions:', error);
        setSessionError('Could not load backend sessions. Showing default sessions.');
        setSessions(fallbackSessions);
      } finally {
        setLoadingSessions(false);
      }
    };

    loadSessions();
  }, []);

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
  }, [selectedMode, selectedInstructor, searchTerm, sessions]);

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
        {loadingSessions && (
          <p className="mb-4 text-center text-sm text-gray-500">Loading sessions...</p>
        )}
        {sessionError && (
          <p className="mb-4 rounded-lg bg-yellow-100 px-4 py-3 text-sm text-yellow-800">
            {sessionError}
          </p>
        )}
        <UpcomingSessionList sessions={filteredSessions} />
      </div>
    </section>
  );
};

export default UpcomingSessionsPage;
