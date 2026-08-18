import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle, FaArrowRight } from 'react-icons/fa';
import { API_BASE_URL } from '../../config/api';
import fallbackImage from '../../assets/c.webp';

const fallbackArticles = [
  {
    id: 1,
    title: 'Understanding the Finnish Education Model: Why Finland Leads Global Learning',
    excerpt:
      'An in-depth analysis of how Finland transformed its educational philosophy to prioritize student well-being, practical skills, and equality over high-stakes testing.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Education in Finland',
    created_at: '2025-01-15T00:00:00Z',
  },
  {
    id: 2,
    title: 'Pathway to Permanent Residency (PR) in Finland for Students and Skilled Migrants',
    excerpt:
      'A practical breakdown of immigration laws, post-graduation work permits, family reunification criteria, and YKI language requirements in the Finnish system.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Migration & Policy',
    created_at: '2025-02-01T00:00:00Z',
  },
  {
    id: 3,
    title: 'Sustainable Development and Democratic Governance: Global Cooperation Perspectives',
    excerpt:
      'Exploring the nexus between institutional transparency, human rights, and environmental policy solutions with actionable recommendations for developing nations.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Research & Policy',
    created_at: '2025-02-10T00:00:00Z',
  },
];

const getPostsFromResponse = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.posts)) return data.posts;
  if (Array.isArray(data?.data)) return data.data;
  return [];
};

const getShortText = (text, limit = 140) => {
  if (!text) return 'Read full article for details.';
  const cleanText = text.replace(/\*\*/g, '').replace(/==/g, '');
  return cleanText.length > limit ? `${cleanText.slice(0, limit).trim()}...` : cleanText;
};

const BlogSection = () => {
  const [articles, setArticles] = useState(fallbackArticles);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/posts`);
        const data = await response.json();

        if (response.ok) {
          const list = getPostsFromResponse(data);
          if (list.length > 0) {
            setArticles(list);
          }
        }
      } catch (err) {
        console.error('Failed to load homepage articles, using fallback:', err);
      }
    };

    loadArticles();
  }, []);

  return (
    <section className="bg-[#0F172A] py-20 border-t border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Research & Articles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Latest Insights & <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Analysis</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Thought-provoking research, policy analysis, educational guides, and investigative reporting by Dr. SM Shafiqul Alam.
            </p>
          </div>
          <Link
            to="/articles"
            className="w-fit inline-flex items-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/40 px-5 py-3 text-sm font-semibold text-blue-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            <span>Read All Articles</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.slice(0, 3).map((article, idx) => (
            <motion.article
              key={article.id || idx}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0B1120] shadow-xl hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Card Image */}
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src={article.image || fallbackImage}
                  alt={article.title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImage) {
                      event.currentTarget.src = fallbackImage;
                    }
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-slate-700">
                    {article.category || 'Education & Society'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <FaUserCircle className="text-blue-400" />
                    {article.author || 'Dr. SM Shafiqul Alam'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold leading-snug text-white group-hover:text-cyan-300 transition">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {getShortText(article.excerpt || article.content)}
                </p>

                <div className="pt-4 mt-auto border-t border-slate-800/80">
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-cyan-300 transition group-hover:translate-x-1"
                  >
                    <span>Read Full Article</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
