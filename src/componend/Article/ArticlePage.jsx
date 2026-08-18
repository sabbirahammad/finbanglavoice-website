import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaCalendarAlt,
  FaArrowRight,
  FaSearch,
  FaNewspaper,
  FaClock,
  FaTag,
  FaBookOpen,
  FaGraduationCap
} from 'react-icons/fa';
import Footer from '../Home/Footer';
import fallbackImage from '../../assets/c.webp';

export const fallbackArticlesList = [
  {
    id: '1',
    title: 'Understanding the Finnish Education Model: Why Finland Leads Global Learning',
    excerpt:
      'An in-depth analysis of how Finland transformed its educational philosophy to prioritize student well-being, teacher autonomy, and equality over high-stakes standardized testing.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Education in Finland',
    date: '2025-01-15',
    readTime: '5 min read',
    content: `Finland's education system consistently ranks among the top in the world. But what makes it unique is not competition or intense testing — it is **equity, trust, and practical life skills**.

### 1. No Standardized High-Stakes Testing
Unlike many global education systems where students are evaluated constantly through standardized competitive exams, Finnish schools focus on continuous teacher assessment and individualized feedback. The only nationwide standardized test occurs at the end of upper secondary school (Ylioppilastutkinto).

### 2. High Teacher Autonomy and Professional Respect
All teachers in Finland are required to hold a Master's degree. Teaching is considered one of the most respected professions, comparable to medicine and law. Teachers are granted immense pedagogical freedom to curate curriculum modules that best fit their classroom dynamics.

### 3. Dual Higher Education Structure: Universities & UAS (AMK)
Finland offers two distinct higher education paths:
- **Traditional Science Universities (Yliopisto):** Focused on theoretical research, scientific discovery, and doctoral pathways.
- **Universities of Applied Sciences (Ammattikorkeakoulu / UAS):** Focused on applied practical industry skills, internships, and direct employment readiness.

For international and Bengali students, Finland offers exceptional opportunities, tuition fee scholarships, and a supportive academic environment that fosters innovation and independent research.`
  },
  {
    id: '2',
    title: 'Pathway to Permanent Residency (PR) in Finland for Students and Skilled Migrants',
    excerpt:
      'A practical breakdown of immigration laws, post-graduation work permits, family reunification criteria, and YKI Finnish language test requirements.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Migration & PR',
    date: '2025-02-01',
    readTime: '6 min read',
    content: `Securing Permanent Residency (Pysyvä oleskelulupa - P-lupa) in Finland is a transparent and structured journey for international graduates and professionals.

### Key Milestones for Permanent Residency:

1. **Continuous Residence (Continuous 'A' Permit):**
   Under Finnish immigration law, applicants generally require **4 continuous years** holding an 'A' permit (Continuous residence status) with legal stay and uninterrupted livelihood.

2. **Post-Graduation 2-Year Job Seeker Permit:**
   International students who complete a Bachelor's, Master's, or PhD in Finland can apply for a **2-year extended residence permit** specifically to seek employment or start a registered business.

3. **Finnish Language Competence (YKI Test):**
   While Finnish language proficiency is not strictly required for general PR under some categories, passing the **National Certificate of Language Proficiency (YKI test - Intermediate Level B1/B2)** is the primary pathway to Finnish Citizenship (Kansalaisuus).

4. **Family Reunification:**
   Spouses and dependent children are entitled to join permit holders under clear financial sufficiency thresholds set by the Finnish Immigration Service (Migri).`
  },
  {
    id: '3',
    title: 'Sustainable Development and Democratic Governance: Global Cooperation Perspectives',
    excerpt:
      'Exploring the nexus between institutional transparency, human rights, and environmental policy solutions with actionable recommendations for developing nations.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Policy & Governance',
    date: '2025-02-10',
    readTime: '7 min read',
    content: `Sustainable development cannot be separated from accountable governance, judicial independence, and democratic institutional integrity.

### 1. Transparency as a Catalyst for Economic Stability
Transparent government procurement, freedom of the press, and digital open governance eliminate systemic inefficiencies and foster foreign direct investment. Nordic models demonstrate that social trust and economic productivity are deeply interconnected.

### 2. North-South Academic and Policy Partnerships
Bridging knowledge networks between Nordic policy institutions and developing democracies enables cross-pollination of sustainable technologies, renewable energy transitions, and resilient social welfare systems.

### 3. Civil Society and Independent Media
Free media and critical academic inquiry are vital safeguards that hold public institutions accountable and amplify marginalized community perspectives.`
  },
  {
    id: '4',
    title: 'Practical Guide: How to Master the Finnish Language (Suomen Kieli) from Scratch',
    excerpt:
      'A step-by-step roadmap for Bengali speakers to overcome Finnish grammar fears, master phonetics, vowel harmony, and transition into fluent everyday spoken Finnish.',
    author: 'Dr. SM Shafiqul Alam',
    image: fallbackImage,
    category: 'Finnish Language',
    date: '2025-02-18',
    readTime: '4 min read',
    content: `Learning Finnish (Suomen kieli) may seem daunting due to its unique Uralic grammar structure, but it is one of the most logical and phonetic languages in the world!

### 1. Master Phonetics & Vowel Harmony (Vokaalisointu)
In Finnish, words are pronounced exactly as they are written. Learning the difference between front vowels (ä, ö, y) and back vowels (a, o, u) is the foundation of forming correct grammatical endings.

### 2. Understanding Written (Kirjakieli) vs. Spoken (Puhekieli)
In everyday life in Helsinki, Tampere, or Turku, Finns speak **Puhekieli**. For example:
- *Minä olen* (written) becomes *Mä oon* (spoken).
- *Mitä sinä teet?* (written) becomes *Mitä sä teet?* (spoken).

By practicing conversational phrases from Day 1 alongside structured grammar, learners can quickly navigate supermarkets, public transportation, and workplace social interactions.`
  }
];

const ArticlePage = () => {
  const [articles, setArticles] = useState(fallbackArticlesList);
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = [
    'All Topics',
    'Education in Finland',
    'Migration & PR',
    'Finnish Language',
    'Policy & Governance',
  ];

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://finbangla-voice-backend-production.up.railway.app/api/posts');
      const articlesArray = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.data)
        ? res.data.data
        : Array.isArray(res.data?.posts)
        ? res.data.posts
        : [];

      if (articlesArray.length > 0) {
        // Merge API articles with fallback structure
        const mapped = articlesArray.map((item, idx) => ({
          id: String(item.id || item._id || idx + 1),
          title: item.title || 'Insight Article',
          excerpt: item.excerpt || (item.content ? item.content.slice(0, 160) + '...' : 'In-depth research and commentary by Dr. SM Shafiqul Alam.'),
          author: item.author || 'Dr. SM Shafiqul Alam',
          image: item.image || fallbackImage,
          category: item.category || 'Education in Finland',
          date: item.date || item.createdAt || 'Recent',
          readTime: item.readTime || '5 min read',
          content: item.content || item.excerpt,
        }));
        setArticles(mapped);
      }
    } catch (err) {
      console.error('Error fetching articles from API, using fallback data:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All Topics' ||
      (article.category && article.category.toLowerCase().includes(selectedCategory.toLowerCase()));

    const matchesSearch =
      article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Header / Hero Section */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-[#0F172A] via-[#0B1120] to-[#0B1120] border-b border-slate-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <FaNewspaper className="text-xs" />
            <span>FinBangla Voice Editorial & Research</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Articles & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Investigative Insights</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            In-depth analysis of Finnish education, language mastery, immigration policy, and democracy dialogues authored by <strong>Dr. SM Shafiqul Alam</strong>.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Filter & Search Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Topic:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-500'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles by title or keyword..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-white">{filteredArticles.length}</strong> article{filteredArticles.length === 1 ? '' : 's'}
            </span>
            {selectedCategory !== 'All Topics' && (
              <button
                onClick={() => setSelectedCategory('All Topics')}
                className="text-cyan-400 hover:underline cursor-pointer"
              >
                Clear Topic Filter
              </button>
            )}
          </div>

          {/* Articles Card Grid (Clean 3-column / 2-column Card Layout) */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="group rounded-3xl bg-[#0F172A] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-900/10 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Thumbnail Image Container */}
                    <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                      <img
                        src={article.image || fallbackImage}
                        alt={article.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget.src !== fallbackImage) {
                            e.currentTarget.src = fallbackImage;
                          }
                        }}
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-lg text-[11px] font-bold bg-slate-950/85 text-cyan-300 backdrop-blur-md border border-slate-700/80 shadow-md">
                          {article.category || 'Education & Policy'}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-cyan-400" />
                          {article.date ? new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Recent'}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <FaClock className="text-blue-400" />
                          {article.readTime || '5 min read'}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition duration-200 leading-snug line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {article.excerpt?.replace(/[*=#]/g, '')}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <FaUserCircle className="text-blue-400 text-sm" />
                      <span className="font-medium text-slate-300">{article.author || 'Dr. SM Shafiqul Alam'}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition duration-200">
                      <span>Read Article</span>
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4 rounded-3xl bg-[#0F172A] border border-slate-800 max-w-xl mx-auto p-8 shadow-xl">
              <FaBookOpen className="text-4xl text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No matching articles found</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Try searching with different keywords or reset the topic filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Topics');
                  setSearchTerm('');
                }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default ArticlePage;
