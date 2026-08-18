import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaPaperPlane,
  FaComments,
  FaShareAlt,
  FaWhatsapp,
  FaFacebook,
  FaLink,
  FaCheck,
  FaReply,
  FaEdit,
  FaTrash,
  FaQuoteLeft,
  FaTag,
  FaFont,
  FaSearchPlus,
  FaSearchMinus
} from 'react-icons/fa';
import Footer from '../Home/Footer';
import { useAuth } from '../../context/AuthContext';
import fallbackImage from '../../assets/c.webp';
import authorPhoto from '../../assets/t.webp';
import { fallbackArticlesList } from './ArticlePage';

// Rich text & Markdown parser
const renderFormattedBody = (content) => {
  if (!content) return null;

  const lines = content.split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();

    // Headings
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={idx} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 flex items-center gap-2.5 tracking-tight font-sans">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0"></span>
          <span>{trimmed.replace('### ', '')}</span>
        </h3>
      );
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4 border-b border-slate-800 pb-3 tracking-tight font-sans">
          {trimmed.replace('## ', '')}
        </h2>
      );
    }

    // Bullet points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const itemText = trimmed.substring(2);
      return (
        <li key={idx} className="ml-6 list-disc text-slate-200 my-1.5 leading-relaxed marker:text-cyan-400">
          {renderInlineFormatting(itemText)}
        </li>
      );
    }

    // Numbered points
    if (/^\d+\.\s/.test(trimmed)) {
      return (
        <p key={idx} className="font-semibold text-cyan-300 mt-5 mb-1.5 text-base sm:text-lg">
          {trimmed}
        </p>
      );
    }

    // Empty lines
    if (!trimmed) {
      return <div key={idx} className="h-3"></div>;
    }

    // Standard paragraph
    return (
      <p key={idx} className="text-slate-200 leading-[1.85] my-3.5">
        {renderInlineFormatting(trimmed)}
      </p>
    );
  });
};

const renderInlineFormatting = (text) => {
  const regex = /(\*\*.*?\*\*|==.*?==|\*.*?\*)/g;
  const parts = text.split(regex);

  return parts.map((part, partIdx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={partIdx} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('==') && part.endsWith('==')) {
      return (
        <mark key={partIdx} className="bg-cyan-500/20 text-cyan-200 px-1.5 py-0.5 rounded border border-cyan-500/40 font-medium">
          {part.slice(2, -2)}
        </mark>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={partIdx} className="italic text-slate-100">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [fontFamily, setFontFamily] = useState('serif'); // 'serif' (Lora) or 'sans' (Plus Jakarta / Inter)
  const [fontSize, setFontSize] = useState('base'); // 'sm', 'base', 'lg'

  // Comment State
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [guestName, setGuestName] = useState('');
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchArticleData();
    loadComments();
  }, [id]);

  const fetchArticleData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://finbangla-voice-backend-production.up.railway.app/api/posts/${id}`);
      if (res.data && (res.data.post || res.data.title)) {
        setArticle(res.data.post || res.data);
      } else {
        const found = fallbackArticlesList.find((a) => a.id === id);
        setArticle(found || fallbackArticlesList[0]);
      }
    } catch (error) {
      console.warn('Backend post API not reachable, using matching fallback article:', error);
      const found = fallbackArticlesList.find((a) => a.id === id);
      setArticle(found || fallbackArticlesList[0]);
    } finally {
      setLoading(false);
    }
  };

  const loadComments = async () => {
    const localKey = `comments_blog_${id}`;
    const savedLocal = JSON.parse(localStorage.getItem(localKey)) || [];

    try {
      const res = await axios.get(`https://finbangla-voice-backend-production.up.railway.app/api/blogs/${id}/comments`);
      if (res.data && Array.isArray(res.data.comments)) {
        setComments(res.data.comments);
        localStorage.setItem(localKey, JSON.stringify(res.data.comments));
        return;
      }
    } catch (err) {
      // ignore network err and use local fallback
    }

    if (savedLocal.length > 0) {
      setComments(savedLocal);
    } else {
      const initialComment = [
        {
          id: 'welcome-1',
          name: 'Dr. SM Shafiqul Alam',
          text: 'Thank you for reading this piece. Feel free to share your thoughts, ask questions regarding Finnish education, admissions, or language learning below!',
          timestamp: new Date().toISOString(),
          isInstructor: true,
          replies: []
        }
      ];
      setComments(initialComment);
      localStorage.setItem(localKey, JSON.stringify(initialComment));
    }
  };

  const saveCommentsState = (updatedList) => {
    setComments(updatedList);
    localStorage.setItem(`comments_blog_${id}`, JSON.stringify(updatedList));
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const authorName = user?.email || (guestName.trim() ? guestName.trim() : 'Reader');
    const newCmt = {
      id: 'cmt-' + Date.now(),
      blogId: id,
      name: authorName,
      text: commentText.trim(),
      timestamp: new Date().toISOString(),
      replies: []
    };

    try {
      await axios.post(
        `https://finbangla-voice-backend-production.up.railway.app/api/blogs/${id}/comments`,
        newCmt
      );
    } catch (err) {
      console.warn('API post failed, keeping local comment:', err);
    }

    const updated = [newCmt, ...comments];
    saveCommentsState(updated);
    setCommentText('');
  };

  const handleReplySubmit = async (commentId) => {
    if (!replyText.trim()) return;
    const authorName = user?.email || (guestName.trim() ? guestName.trim() : 'Reader');
    const replyObj = {
      id: 'rep-' + Date.now(),
      name: authorName,
      text: replyText.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      await axios.post(
        `https://finbangla-voice-backend-production.up.railway.app/api/comments/${commentId}/reply`,
        replyObj
      );
    } catch (err) {}

    const updated = comments.map((cmt) => {
      if (cmt.id === commentId) {
        return {
          ...cmt,
          replies: [...(cmt.replies || []), replyObj]
        };
      }
      return cmt;
    });

    saveCommentsState(updated);
    setReplyingToId(null);
    setReplyText('');
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;

    try {
      await axios.delete(`https://finbangla-voice-backend-production.up.railway.app/api/comments/${commentId}`);
    } catch (err) {}

    const updated = comments.filter((c) => c.id !== commentId);
    saveCommentsState(updated);
  };

  const handleEditSubmit = (commentId) => {
    if (!editText.trim()) return;
    const updated = comments.map((c) => {
      if (c.id === commentId) {
        return { ...c, text: editText.trim() };
      }
      return c;
    });
    saveCommentsState(updated);
    setEditingCommentId(null);
    setEditText('');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-100 flex items-center justify-center pt-20">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-400 text-xs sm:text-sm">Loading article details...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-slate-100 flex items-center justify-center pt-20">
        <div className="text-center space-y-4 max-w-md p-8 bg-[#0F172A] rounded-3xl border border-slate-800">
          <p className="text-rose-400 text-base font-bold">Article not found.</p>
          <p className="text-xs text-slate-400">The article you are looking for may have been moved or removed.</p>
          <Link
            to="/articles"
            className="inline-block px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
          >
            Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const shareTitle = encodeURIComponent(article.title);
  const shareUrl = encodeURIComponent(window.location.href);

  // Dynamic font size and family classes
  const fontClass = fontFamily === 'serif' ? 'font-serif-reading' : 'font-sans-editorial';
  const sizeClass = fontSize === 'lg' ? 'text-lg sm:text-xl' : fontSize === 'sm' ? 'text-sm sm:text-base' : 'text-base sm:text-lg';

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col pt-20">
      
      {/* Article Container */}
      <main className="py-12 sm:py-16 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Top Bar with Back Link, Font Controls & Social Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group"
            >
              <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition duration-200" />
              <span>Back to All Articles</span>
            </Link>

            {/* Controls Toolbar (Font Style & Size + Share) */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              
              {/* Font Family Toggle */}
              <div className="inline-flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5">
                <button
                  onClick={() => setFontFamily('serif')}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition cursor-pointer ${
                    fontFamily === 'serif' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Editorial Serif Font (Lora)"
                >
                  Serif
                </button>
                <button
                  onClick={() => setFontFamily('sans')}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition cursor-pointer ${
                    fontFamily === 'sans' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Modern Sans Font"
                >
                  Sans
                </button>
              </div>

              {/* Font Size Adjuster */}
              <div className="inline-flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5">
                <button
                  onClick={() => setFontSize(fontSize === 'lg' ? 'base' : fontSize === 'base' ? 'sm' : 'sm')}
                  className="px-2 py-1 text-slate-400 hover:text-white cursor-pointer"
                  title="Decrease Font Size"
                >
                  <FaSearchMinus className="text-[10px]" />
                </button>
                <span className="px-1 text-[11px] text-slate-300 uppercase font-mono">
                  {fontSize === 'lg' ? 'L' : fontSize === 'sm' ? 'S' : 'M'}
                </span>
                <button
                  onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : 'lg')}
                  className="px-2 py-1 text-slate-400 hover:text-white cursor-pointer"
                  title="Increase Font Size"
                >
                  <FaSearchPlus className="text-[10px]" />
                </button>
              </div>

              {/* Social Share */}
              <a
                href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
                title="Share on WhatsApp"
              >
                <FaWhatsapp className="text-xs" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition"
                title="Share on Facebook"
              >
                <FaFacebook className="text-xs" />
              </a>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs transition cursor-pointer"
              >
                {copied ? <FaCheck className="text-emerald-400 text-[10px]" /> : <FaLink className="text-[10px]" />}
                <span>{copied ? 'Copied' : 'Link'}</span>
              </button>
            </div>
          </div>

          {/* Article Header */}
          <header className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/25">
              <FaTag className="text-[10px]" />
              <span>{article.category || 'Education & Policy'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.25] tracking-tight font-sans">
              {article.title}
            </h1>

            {/* Author Credential Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0F172A] border border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <img
                  src={authorPhoto}
                  alt="Dr. SM Shafiqul Alam"
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/40 shadow"
                />
                <div>
                  <h4 className="font-bold text-white">{article.author || 'Dr. SM Shafiqul Alam'}</h4>
                  <p className="text-[11px] text-slate-400">PhD, Professor & Senior Policy Researcher</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-cyan-400" />
                  {article.date ? new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Recent'}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-blue-400" />
                  {article.readTime || '5 min read'}
                </span>
              </div>
            </div>
          </header>

          {/* Cover Media */}
          <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <img
              src={article.image || fallbackImage}
              alt={article.title}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                if (e.currentTarget.src !== fallbackImage) {
                  e.currentTarget.src = fallbackImage;
                }
              }}
            />
          </div>

          {/* Lead Summary Callout */}
          {article.excerpt && (
            <div className="p-5 sm:p-6 rounded-2xl bg-cyan-950/20 border-l-4 border-cyan-400 border-r border-t border-b border-cyan-900/30 text-cyan-100 text-base sm:text-lg leading-relaxed italic shadow-inner">
              <p>{article.excerpt.replace(/[*=#]/g, '')}</p>
            </div>
          )}

          {/* Article Full Body with Enhanced Typography */}
          <article className={`p-6 sm:p-10 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-xl ${fontClass} ${sizeClass}`}>
            {renderFormattedBody(article.content || article.excerpt)}
          </article>

          {/* Author Card Spotlight */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-cyan-950/40 border border-blue-500/30 shadow-xl flex flex-col sm:flex-row items-center gap-6">
            <img
              src={authorPhoto}
              alt="Dr. SM Shafiqul Alam"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-slate-700 shrink-0 shadow-lg"
            />
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white font-sans">About the Author: Dr. SM Shafiqul Alam</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Researcher, Professor, and Ambassador of Finnish Education agencies with over 20 years of experience in higher education, Finnish language instruction, and international policy research.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/358409369708?text=Hello%20Dr.%20SM%20Shafiqul%20Alam%2C%20I%20have%20read%20your%20article%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <FaWhatsapp />
                  <span>Connect with Dr. SM Shafiqul Alam on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 💬 Discussion & Comments Section */}
          {/* ========================================================================= */}
          <section className="p-6 sm:p-10 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <FaComments className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                    Discussion & Comments
                  </h3>
                  <p className="text-xs text-slate-400">
                    {comments.length} Thought{comments.length === 1 ? '' : 's'} shared by readers
                  </p>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              {!user && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
              )}

              <div className="space-y-2">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  rows={4}
                  placeholder="Share your perspective, ask a question, or leave your feedback on this article..."
                  className="w-full p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {user ? `Posting as ${user.email}` : 'Posting as community reader'}
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <FaPaperPlane className="text-[10px]" />
                  <span>Submit Comment</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              {comments.map((cmt) => (
                <div
                  key={cmt.id}
                  className={`p-5 rounded-2xl border transition ${
                    cmt.isInstructor
                      ? 'bg-blue-950/20 border-cyan-500/40'
                      : 'bg-slate-800/40 border-slate-700/60'
                  } space-y-3 text-xs sm:text-sm`}
                >
                  {/* Author Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-cyan-300 font-bold text-xs">
                        {cmt.name ? cmt.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{cmt.name}</span>
                          {cmt.isInstructor && (
                            <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                              Author / Instructor
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {cmt.timestamp ? new Date(cmt.timestamp).toLocaleString() : 'Just now'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Comment Body / Edit View */}
                  {editingCommentId === cmt.id ? (
                    <div className="space-y-2 pt-2">
                      <textarea
                        rows={2}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditSubmit(cmt.id)}
                          className="px-3 py-1 bg-cyan-600 text-white rounded-lg text-xs font-semibold"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingCommentId(null)}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{cmt.text}</p>
                  )}

                  {/* Actions: Reply / Edit / Delete */}
                  <div className="flex items-center gap-4 pt-1 text-xs">
                    <button
                      onClick={() => {
                        setReplyingToId(replyingToId === cmt.id ? null : cmt.id);
                        setReplyText('');
                      }}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <FaReply className="text-[10px]" />
                      <span>{replyingToId === cmt.id ? 'Close Reply' : 'Reply'}</span>
                    </button>

                    {user?.email === cmt.name && (
                      <>
                        <button
                          onClick={() => {
                            setEditingCommentId(cmt.id);
                            setEditText(cmt.text);
                          }}
                          className="text-amber-400 hover:underline flex items-center gap-1"
                        >
                          <FaEdit className="text-[10px]" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteComment(cmt.id)}
                          className="text-rose-400 hover:underline flex items-center gap-1"
                        >
                          <FaTrash className="text-[10px]" /> Delete
                        </button>
                      </>
                    )}
                  </div>

                  {/* Reply Input Box */}
                  {replyingToId === cmt.id && (
                    <div className="pt-3 pl-4 border-l-2 border-cyan-500/40 space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Write a reply..."
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
                        />
                        <button
                          onClick={() => handleReplySubmit(cmt.id)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Nested Replies */}
                  {cmt.replies && cmt.replies.length > 0 && (
                    <div className="pl-4 sm:pl-6 pt-2 border-l-2 border-slate-700/60 space-y-2.5">
                      {cmt.replies.map((rep, rIdx) => (
                        <div key={rep.id || rIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-cyan-300">{rep.name}</span>
                            <span className="text-[10px] text-slate-500">
                              {rep.timestamp ? new Date(rep.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                            </span>
                          </div>
                          <p className="text-slate-300">{rep.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
