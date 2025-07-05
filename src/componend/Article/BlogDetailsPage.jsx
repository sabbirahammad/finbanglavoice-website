import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

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
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}

      {/* Blog Title & Meta */}
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        👤 {blog.author || 'Unknown'} | 📅 {blog.date ? new Date(blog.date).toLocaleDateString() : ''}
      </div>

      {/* Blog Content */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>

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



