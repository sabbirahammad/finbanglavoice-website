import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';
import fallbackImage from '../../assets/c.webp';

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: 'Understanding the Finnish Education Model: Why Finland Leads Global Learning',
      category: 'Education in Finland',
      image: fallbackImage,
    },
    {
      id: 2,
      title: 'Pathway to Permanent Residency (PR) in Finland for Students and Skilled Migrants',
      category: 'Migration & Policy',
      image: fallbackImage,
    },
    {
      id: 3,
      title: 'Sustainable Development and Democratic Governance: Global Cooperation Perspectives',
      category: 'Research & Policy',
      image: fallbackImage,
    },
  ];

  return (
    <section className="rounded-3xl bg-[#0F172A] border border-slate-800 p-8 sm:p-10 mb-10 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <FaBookOpen className="text-blue-400" />
            <span>Featured Publications</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Key research papers and educational guides by Dr. SM Shafiqul Alam
          </p>
        </div>
        <Link
          to="/articles"
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
        >
          <span>All Articles</span>
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {articles.map((art) => (
          <Link
            key={art.id}
            to={`/blog/${art.id}`}
            className="group rounded-2xl bg-slate-800/50 border border-slate-700/60 overflow-hidden hover:border-blue-500/40 transition flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={art.image}
                alt={art.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                {art.category}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                {art.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
