import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JournalistFooter from '../../pages/JournalistFooter';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    articles.forEach((article) => fetchComments(article.id));
  }, [articles]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('https://finbangla-voice-backend-production.up.railway.app/api/posts');
      const articlesArray = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.data)
        ? res.data.data
        : Array.isArray(res.data.posts)
        ? res.data.posts
        : [];
      setArticles(articlesArray);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setArticles([]);
    }
  };

  const fetchComments = async (articleId) => {
    try {
      const res = await axios.get(`https://finbangla-voice-backend-production.up.railway.app/api/blogs/${articleId}/comments`);
      if (res.data && Array.isArray(res.data.comments)) {
        setComments(prev => ({ ...prev, [articleId]: res.data.comments }));
      } else {
        setComments(prev => ({ ...prev, [articleId]: [] }));
      }
    } catch (err) {
      console.error('Error fetching comments:', err);
      setComments(prev => ({ ...prev, [articleId]: [] }));
    }
  };

  const handleCommentChange = (id, value) => {
    setNewComment(prev => ({ ...prev, [id]: value }));
  };

  const handleCommentSubmit = async (blogId) => {
    if (!user) return alert('Please log in');
    const content = newComment[blogId]?.trim();
    if (!content) return;

    const newCmt = {
      blogId,
      name: user.email,
      text: content,
    };

    try {
      const res = await axios.post(
        `https://finbangla-voice-backend-production.up.railway.app/api/blogs/${blogId}/comments`,
        newCmt
      );
      if (res.data && res.data.comment) {
        setComments(prev => ({
          ...prev,
          [blogId]: [...(prev[blogId] || []), res.data.comment]
        }));
        setNewComment(prev => ({ ...prev, [blogId]: '' }));
      }
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
    setReplyText('');
  };

  const handleReplySubmit = async (commentId, blogId) => {
    if (!user || !replyText.trim()) return;
    const replyObj = {
      name: user.email,
      text: replyText.trim(),
    };

    try {
      const res = await axios.post(
        `https://finbangla-voice-backend-production.up.railway.app/api/comments/${commentId}/reply`,
        replyObj
      );
      if (res.data && res.data.success) {
        await fetchComments(blogId);
        setReplyingTo(null);
        setReplyText('');
      }
    } catch (err) {
      console.error('Failed to submit reply:', err);
    }
  };

  const handleDeleteComment = async (commentId, blogId) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;

    try {
      const res = await axios.delete(`https://finbangla-voice-backend-production.up.railway.app/api/comments/${commentId}`);
      if (res.data && res.data.success) {
        setComments(prev => ({
          ...prev,
          [blogId]: prev[blogId].filter(c => c.id !== commentId),
        }));
      }
    } catch (err) {
      console.error('Failed to delete comment:', err);
    }
  };

  const handleEditClick = (commentId, blogId, currentText) => {
    setEditingComment({ commentId, blogId });
    setEditText(currentText);
  };

  const handleEditSubmit = async () => {
    const { commentId, blogId } = editingComment;
    if (!editText.trim()) return;

    try {
      const res = await axios.put(
        `https://finbangla-voice-backend-production.up.railway.app/api/comments/${commentId}`,
        { text: editText.trim() }
      );
      if (res.data && res.data.comment) {
        setComments(prev => ({
          ...prev,
          [blogId]: prev[blogId].map(c =>
            c.id === commentId ? res.data.comment : c
          ),
        }));
        setEditingComment(null);
        setEditText('');
      }
    } catch (err) {
      console.error('Failed to update comment:', err);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">📰 Articles</h1>
        {articles.map(article => (
          <div key={article.id} className="bg-white shadow p-6 mb-10 rounded-lg">
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
            )}
            <div className="text-gray-500 text-sm mb-2">👤 {article.author}</div>
            <Link to={`/blog/${article.id}`}>
              <h2 className="text-xl font-semibold mb-2 text-indigo-800 hover:underline cursor-pointer">
                {article.title}
              </h2>
            </Link>
            <p className="text-gray-700 mb-4">{article.excerpt}</p>

            {/* Comments Section */}
            <div className="mt-4 border-t pt-4">
              <textarea
                rows={2}
                value={newComment[article.id] || ''}
                onChange={e => handleCommentChange(article.id, e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="Write a comment..."
              />
              <button
                onClick={() => handleCommentSubmit(article.id)}
                className="bg-indigo-600 text-white px-4 py-1 rounded"
              >
                Comment
              </button>

              {(comments[article.id] || []).map(cmt => (
                <div key={cmt.id} className="mt-4 bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-800 font-medium">
                    {cmt.name} •{' '}
                    <span className="text-xs text-gray-400">
                      {new Date(cmt.timestamp).toLocaleString()}
                    </span>
                  </p>

                  {editingComment?.commentId === cmt.id ? (
                    <div className="mt-2">
                      <textarea
                        rows={2}
                        className="w-full border px-3 py-1 rounded text-sm"
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                      />
                      <button
                        onClick={handleEditSubmit}
                        className="mt-1 px-3 py-1 text-white bg-blue-600 rounded text-sm"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm">{cmt.text}</p>
                  )}

                  {(cmt.replies || []).map(rep => (
                    <div key={rep.id} className="ml-8 mt-2 p-2 bg-gray-100 rounded">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          {rep.name}{' '}
                          {rep.isAdmin && (
                            <span className="ml-2 text-xs text-white bg-blue-600 px-1.5 py-0.5 rounded">
                              Admin
                            </span>
                          )}
                        </p>
                        <span className="text-xs text-gray-400">
                          {new Date(rep.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800">{rep.text}</p>
                    </div>
                  ))}

                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => handleReplyClick(cmt.id)} className="text-xs text-blue-600">
                      Reply
                    </button>

                    {user?.email === cmt.name && (
                      <>
                        <button
                          onClick={() => handleEditClick(cmt.id, article.id, cmt.text)}
                          className="text-xs text-yellow-600"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDeleteComment(cmt.id, article.id)}
                          className="text-xs text-red-600"
                        >
                          🗑️ Delete
                        </button>
                      </>
                    )}
                  </div>

                  {replyingTo === cmt.id && (
                    <div className="mt-2">
                      <textarea
                        rows={1}
                        className="w-full border px-3 py-1 rounded text-sm"
                        placeholder="Write your reply..."
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                      />
                      <button
                        onClick={() => handleReplySubmit(cmt.id, article.id)}
                        className="mt-1 px-3 py-1 text-white bg-green-600 rounded text-sm"
                      >
                        Submit Reply
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <JournalistFooter />
    </>
  );
};

export default ArticlePage;
















