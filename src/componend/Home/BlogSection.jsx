import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState({});
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsRes = await axios.get('http://localhost:3000/blogs');
        const commentsRes = await axios.get('http://localhost:3000/comments');
        setBlogs(blogsRes.data);
        setComments(commentsRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };
    fetchData();
  }, []);

  const handleSubmitComment = async (blogId) => {
    if (!newComment.trim()) return;
    const newData = {
      id: Date.now().toString(),
      blogId,
      name: 'Anonymous',
      text: newComment,
      reply: null,
      replies: [],
      timestamp: new Date().toISOString(),
    };
    await axios.post('http://localhost:3000/comments', newData);
    setComments([...comments, newData]);
    setNewComment('');
  };

  const handleReplySubmit = async (commentId) => {
    const reply = replyText[commentId];
    if (!reply?.trim()) return;

    const updated = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    );

    const updatedComment = updated.find((c) => c.id === commentId);
    await axios.patch(`http://localhost:3000/comments/${commentId}`, {
      replies: updatedComment.replies,
    });

    setComments(updated);
    setReplyText({ ...replyText, [commentId]: '' });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <section className="bg-white py-16 px-4 md:px-8 relative">
      {/* Full Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowImageModal(false)}
        >
          <img
            src={selectedImage}
            alt="Full Blog"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">📰 Latest Blogs</h2>

        {blogs.slice(0, 1).map((blog) => {
          const blogComments = comments.filter((c) => c.blogId === blog.id);
          return (
            <div
              key={blog.id}
              className="bg-gradient-to-br from-indigo-50 to-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => handleImageClick(blog.image)}
              />
              <div className="p-6">
                <Link to={`/blog/${blog.id}`}>
                  <h1 className="text-2xl font-bold text-indigo-800 hover:underline cursor-pointer">
                    {blog.title}
                  </h1>
                </Link>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <div className="text-sm text-gray-400 mt-3">
                  👤 {blog.author} | 📅 {blog.date}
                </div>
                <button
                  onClick={() => setShowComments((prev) => !prev)}
                  className="mt-4 text-indigo-600 text-sm underline"
                >
                  {showComments ? 'Hide Comments' : '💬 Write a Comment'}
                </button>

                {showComments && (
                  <div className="mt-6">
                    {/* New Comment Box */}
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Write your comment..."
                      rows="3"
                      className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring"
                    />
                    <button
                      onClick={() => handleSubmitComment(blog.id)}
                      className="mt-2 bg-indigo-600 text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-700"
                    >
                      Submit Comment
                    </button>

                    {/* Comment List */}
                    <div className="mt-8 space-y-6">
                      {blogComments.map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                        >
                          <div className="text-sm text-gray-700">
                            🧑 {comment.name}: {comment.text}
                          </div>

                          <div className="ml-4 mt-2 space-y-2 text-sm text-indigo-600">
                            {comment.replies?.map((reply, i) => (
                              <div
                                key={i}
                                className="bg-white px-3 py-1 border-l-4 border-indigo-500 rounded"
                              >
                                🔁 {reply}
                              </div>
                            ))}
                          </div>

                          {/* Reply Input */}
                          <div className="mt-3 ml-4">
                            <textarea
                              value={replyText[comment.id] || ''}
                              onChange={(e) =>
                                setReplyText({ ...replyText, [comment.id]: e.target.value })
                              }
                              placeholder="Reply..."
                              rows="2"
                              className="w-full border rounded-md p-2 text-sm"
                            />
                            <button
                              onClick={() => handleReplySubmit(comment.id)}
                              className="mt-1 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs hover:bg-indigo-600"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* More Blogs Button */}
        <div className="text-center">
          <Link to="/articles">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition mt-4">
              📚 Read More Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;





