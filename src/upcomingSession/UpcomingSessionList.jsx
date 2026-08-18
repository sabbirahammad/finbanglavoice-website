import React from 'react';
import UpcomingSessionCard from './UpcomingSessionCard';
import { FaVideoSlash } from 'react-icons/fa';

const UpcomingSessionList = ({ sessions }) => {
  if (!sessions || sessions.length === 0) {
    return (
      <div className="text-center text-slate-400 bg-[#0F172A] border border-slate-800 rounded-3xl p-12 shadow-xl max-w-xl mx-auto space-y-3">
        <FaVideoSlash className="text-3xl text-slate-600 mx-auto" />
        <h3 className="text-base font-bold text-white">No Upcoming Sessions Found</h3>
        <p className="text-xs text-slate-400">
          Try changing your filter options or search term. New workshops are scheduled regularly.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sessions.map((session) => (
          <UpcomingSessionCard key={session.id} session={session} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingSessionList;
