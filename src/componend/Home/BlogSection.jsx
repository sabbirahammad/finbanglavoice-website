import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';
import fallbackImage from '../../assets/t.webp';

const getPostsFromResponse = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.posts)) return data.posts;
  if (Array.isArray(data?.data)) return data.data;
  return [];
};

const getShortText = (text, limit = 160) => {
  if (!text) return 'Article summary will be updated soon.';
  const cleanText = text.replace(/\*\*/g, '').replace(/==/g, '');
  return cleanText.length > limit ? `${cleanText.slice(0, limit).trim()}...` : cleanText;
};

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`${API_BASE_URL}/api/posts`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Failed to load articles');
        }

        setArticles(getPostsFromResponse(data));
      } catch (err) {
        console.error('Failed to load homepage articles:', err);
        setError('Articles could not be loaded right now.');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Articles
            </p>
            <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">
              Latest Articles
            </h2>
          </div>
          <Link
            to="/articles"
            className="w-fit rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Read All Articles
          </Link>
        </div>

        {loading && <p className="text-sm text-gray-500">Loading articles...</p>}
        {error && (
          <p className="mb-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {!loading && !error && articles.length === 0 && (
          <p className="rounded-md bg-gray-50 px-4 py-6 text-center text-gray-500">
            No articles found.
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.slice(0, 6).map((article) => (
            <article
              key={article.id}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
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
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {article.author || 'FinBangla Voice'}
                </p>
                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-950">
                  {article.title}
                </h3>
                <p className="mb-5 text-sm leading-6 text-gray-600">
                  {getShortText(article.excerpt || article.content)}
                </p>
                <Link
                  to={`/blog/${article.id}`}
                  className="mt-auto text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
