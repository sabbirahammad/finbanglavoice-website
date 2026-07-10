import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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

const BlogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // User came from '/articles' or home '/'
  const from = location.state?.from === 'articles' ? '/articles' : '/articles';

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://finbangla-voice-backend-production.up.railway.app/api/posts/${id}`);
        
        // Logging for debug
        console.log('Blog data:', res.data);

        // If backend returns { post: {...} }
        if (res.data && res.data.post) {
          setBlog(res.data.post);
        }
        // If backend returns directly the post object
        else if (res.data && res.data.id) {
          setBlog(res.data);
        } else {
          setBlog(null);
        }

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-20 text-red-500">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-30">
      {/* Blog Image */}
      <div className="mb-6 aspect-[16/9] overflow-hidden rounded bg-gray-100">
        <img
          src={blog.image || fallbackImage}
          alt={blog.title}
          className="h-full w-full object-cover object-center"
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== fallbackImage) {
              event.currentTarget.src = fallbackImage;
            }
          }}
        />
      </div>

      {/* Blog Title & Meta */}
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        👤 {blog.author || 'Unknown'} | 📅 {blog.date ? new Date(blog.date).toLocaleDateString() : ''}
      </div>

      {/* Blog Content */}
      <div className="text-gray-700 leading-relaxed text-base sm:text-lg">{renderFormattedText(blog.excerpt || blog.content)}</div>

      {/* Back Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate(from)}
          className="text-indigo-600 hover:underline"
        >
          ← Back to {from === '/articles' ? '/articles' : 'Articles'}
        </button>
      </div>
    </div>
  );
};
export default BlogDetailsPage;


