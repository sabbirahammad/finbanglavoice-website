import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JournalistSession = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('http://localhost:3000/journalistSession');
        setSession(res.data);
      } catch (err) {
        console.error('Error loading session data:', err);
        setError('Failed to load session data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  // Helper for formatting date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Helper for formatting time (optional)
  const formatTime = (timeStr) => timeStr || '';

  if (loading) return <div className="text-center py-16">Loading session...</div>;

  if (error)
    return <div className="text-center py-16 text-red-600 font-semibold">{error}</div>;

  if (!session) return null;

  return (
    <section className="bg-[#1A1A1A] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Guest Info */}
        <div className="md:w-1/2 text-center md:text-left">
          <img
            src={session?.guestImage}
            alt={session?.guestName || 'Guest'}
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mx-auto md:mx-0 shadow-lg"
          />
          <h3 className="text-2xl font-bold text-gray-800 mt-4">{session?.guestName}</h3>
          <p className="text-indigo-600 font-medium">{session?.guestTitle}</p>
          <p className="text-gray-600 mt-3">{session?.guestBio}</p>
        </div>

        {/* Right: Session Info */}
        <div className="md:w-1/2 bg-indigo-50 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
              📅 {formatDate(session?.date)}
            </span>
            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
              🕒 {formatTime(session?.time)}
            </span>
            {session?.isLive && (
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                🔴 Live Now
              </span>
            )}
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-2">
            {session?.topic}
          </h2>
          <p className="text-gray-700 text-sm mb-4">{session?.tagline}</p>

          <ul className="text-gray-600 text-sm list-disc list-inside mb-4">
            {session?.highlights?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-4">
            {session?.joinLinks?.zoom && (
              <a
                href={session.joinLinks.zoom}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-800 transition"
                aria-label="Join via Zoom"
              >
                🔗 Join via Zoom
              </a>
            )}
            {session?.joinLinks?.youtube && (
              <a
                href={session.joinLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 py-2 text-sm rounded-full hover:bg-red-700 transition"
                aria-label="Watch on YouTube"
              >
                ▶️ Watch on YouTube
              </a>
            )}
            {session?.joinLinks?.facebook && (
              <a
                href={session.joinLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition"
                aria-label="Watch on Facebook"
              >
                📘 Watch on Facebook
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalistSession;




