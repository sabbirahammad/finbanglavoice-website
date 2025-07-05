// src/components/UpcomingSessions/UpcomingSessionList.jsx
import React from 'react';
import UpcomingSessionCard from './UpcomingSessionCard';

const UpcomingSessionList = ({ sessions }) => {
  if (!sessions || sessions.length === 0) {
    return (
      <div className="text-center text-gray-500 bg-white rounded-xl p-8 shadow-md mt-10">
        🚫 No upcoming sessions found.
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">🗓️ {sessions.length} Upcoming Session{sessions.length > 1 ? 's' : ''}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <UpcomingSessionCard key={session.id} session={session} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingSessionList;

