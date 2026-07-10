import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import fallbackImage from '../../assets/t.webp';

const renderFormattedText = (text) => {
  if (!text) return null;
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const regex = /(\*\*.*?\*\*|==.*?==)/g;
    const parts = line.split(regex);
    const renderedLine = parts.map((part, partIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={partIdx} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('==') && part.endsWith('==')) {
        return (
          <mark key={partIdx} className="bg-yellow-200 text-gray-900 px-1 rounded">
            {part.slice(2, -2)}
          </mark>
        );
      }
      return part;
    });
    return (
      <span key={lineIdx}>
        {renderedLine}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    );
  });
};

const SingleArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`https://finbangla-voice-backend-production.up.railway.app/api/posts/${id}`);
        setArticle(res.data.post || res.data);
      } catch (error) {
        console.error('Failed to load article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments((prev) => [...prev, newComment]);
    setNewComment('');
  };

  if (!article) return <div className="text-center py-16">Loading article...</div>;

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Article Image */}
        <div className="mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
          <img
            src={article.image || fallbackImage}
            alt={article.title}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            onError={(event) => {
              if (event.currentTarget.src !== fallbackImage) {
                event.currentTarget.src = fallbackImage;
              }
            }}
          />
        </div>

        {/* Title and Meta */}
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-2">
          {article.title}
        </h1>
        <div className="text-sm text-gray-500 mb-6">
          👤 {article.author} | 📅 {article.date}
        </div>

        {/* Article Content */}
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed">
          {renderFormattedText(article.excerpt || article.content)}
        </div>

        {/* Comments */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">💬 Comments</h3>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="3"
            placeholder="Write a comment..."
            className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring"
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 text-sm"
          >
            Submit Comment
          </button>

          {comments.length > 0 && (
            <div className="mt-4 space-y-2">
              {comments.map((comment, i) => (
                <div key={i} className="bg-gray-100 p-3 rounded text-sm text-gray-800">
                  🗨️ {comment}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back to Articles Link */}
        <div className="mt-10">
          <Link
            to="/articles"
            className="inline-block text-indigo-600 hover:underline text-sm"
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleArticlePage;

