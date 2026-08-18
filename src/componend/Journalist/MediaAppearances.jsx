import React from 'react';
import { FaYoutube, FaVideo, FaBroadcastTower } from 'react-icons/fa';

const MediaAppearances = () => {
  const appearances = [
    {
      title: 'FinBangla Voice YouTube Channel Broadcasts',
      platform: 'YouTube Platform (@FinBanglaVoice)',
      desc: 'Regular video releases explaining Finnish language nuances, vocational education, student life in Finland, and democratic reforms.',
      url: 'https://www.youtube.com/@FinBanglaVoice',
    },
    {
      title: 'Dialogues on Sustainable Development & Global Policy',
      platform: 'Academic Keynotes & Policy Summits',
      desc: 'Expert commentary and policy talks on environmental governance, education equality, and North-South cooperation.',
      url: 'https://www.youtube.com/@FinBanglaVoice',
    },
    {
      title: 'Bengali Diaspora & Nordic Integration Discussions',
      platform: 'Community Media',
      desc: 'Dedicated sessions addressing immigrant welfare, Finnish workplace culture, and family relocation procedures.',
      url: 'https://www.facebook.com/profile.php?id=61560033836918',
    },
  ];

  return (
    <section className="rounded-3xl bg-[#0F172A] border border-slate-800 p-8 sm:p-10 mb-10 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <FaBroadcastTower className="text-rose-400" />
          <span>Media Appearances & Dialogues</span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Public broadcasts, YouTube series, and academic policy engagements.
        </p>
      </div>

      <div className="space-y-4">
        {appearances.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                {item.platform}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 hover:bg-rose-600 hover:text-white border border-rose-500/30 text-xs font-semibold transition shrink-0 flex items-center gap-1.5"
            >
              <FaYoutube className="text-sm" />
              <span>Watch Broadcast</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaAppearances;
