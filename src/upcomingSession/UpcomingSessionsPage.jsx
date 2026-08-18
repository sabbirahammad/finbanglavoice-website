import React, { useEffect, useState } from 'react';
import SessionBanner from './SessionBanner';
import SessionFilterBar from './SessionFilterBar';
import UpcomingSessionList from './UpcomingSessionList';
import Footer from '../componend/Home/Footer';
import { API_BASE_URL } from '../config/api';

const defaultFallbackSessions = [
  {
    id: "session-fin-lang-live",
    title: "Live Finnish Language Spoken Workshop & Orientation (A0–A1)",
    mode: "Live Zoom",
    instructor: "Dr. SM Shafiqul Alam",
    duration: 1.5,
    rate: 0,
    date: "Upcoming Weekend",
    time: "08:00 PM (Helsinki Time) / 11:00 PM (BD Time)",
    description: "Interactive live workshop covering basic Finnish greetings, phonetics, and a walkthrough of the 3-month course curriculum with live Q&A.",
    whatsapp: "+358409369708",
    email: "finbanglavoice@gmail.com"
  },
  {
    id: "session-fin-study-qa",
    title: "Study in Finland: University Admissions, Scholarships & RP Q&A",
    mode: "Interactive Webinar",
    instructor: "Dr. SM Shafiqul Alam",
    duration: 2,
    rate: 0,
    date: "Next Scheduled Session",
    time: "07:30 PM (Helsinki Time)",
    description: "Live advisory session covering University & AMK application cycles, entrance exams, tuition fee waiver tactics, and student residence permit procedures.",
    whatsapp: "+358409369708",
    email: "finbanglavoice@gmail.com"
  },
  {
    id: "session-yki-workshop",
    title: "YKI Finnish Language Exam Masterclass & Speaking Drills",
    mode: "Live Zoom",
    instructor: "Dr. SM Shafiqul Alam",
    duration: 2,
    rate: 0,
    date: "Monthly Special",
    time: "08:00 PM (Helsinki Time)",
    description: "Strategies for clearing the national YKI Finnish language test for permanent residency and citizenship. Speaking and listening drills.",
    whatsapp: "+358409369708",
    email: "finbanglavoice@gmail.com"
  }
];

const UpcomingSessionsPage = () => {
  const [sessions, setSessions] = useState(defaultFallbackSessions);
  const [selectedMode, setSelectedMode] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSessions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/sessions`);
        const data = await response.json();

        if (response.ok) {
          const sessionList = Array.isArray(data) ? data : data?.sessions || [];
          if (sessionList.length > 0) {
            const mappedSessions = sessionList.map((s) => ({
              id: s.id || s.session_id,
              title: s.course_name || 'Upcoming Live Session',
              mode: s.session_type || 'Live Zoom',
              instructor: s.instructor?.name || 'Dr. SM Shafiqul Alam',
              duration: Number.parseFloat(s.duration) || 1.5,
              rate: Number.parseFloat(s.rate) || 0,
              date: s.session_schedule?.date || 'Upcoming Weekend',
              time: s.session_schedule?.time || 'Evening Batch',
              description: s.overview || 'Live interactive session on Finnish language and education.',
              whatsapp: s.contact_options?.whatsapp || '+358409369708',
              email: s.contact_options?.email || 'finbanglavoice@gmail.com',
            }));
            setSessions(mappedSessions);
          }
        }
      } catch (err) {
        console.error('Failed to load sessions from API, using fallback:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, []);

  const filteredSessions = sessions.filter((session) => {
    const matchesMode =
      selectedMode === 'All' ||
      session.mode.toLowerCase().includes(selectedMode.toLowerCase());

    const matchesSearch =
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesMode && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Main Container */}
      <section className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Banner */}
          <SessionBanner />

          {/* Filters */}
          <SessionFilterBar
            selectedMode={selectedMode}
            onModeChange={setSelectedMode}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Session List */}
          <UpcomingSessionList sessions={filteredSessions} />

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UpcomingSessionsPage;
