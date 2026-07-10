import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';
import fallbackImage from '../../assets/t.webp';

const fallbackCourses = [
  {
    id: 'fallback-finnish',
    course_name: 'Practical Finnish Language Course in Bangla',
    instructor: {
      name: 'Dr. SM Shafiqul Alam',
      photo_url: fallbackImage,
      bio: '',
    },
    course_details: {
      duration: '3 Months',
      schedule: 'Weekend classes',
      session_mode: 'Online',
      rate: '50 Euro/month',
      total_fee: '150 Euro',
      material: 'PDF notes and practice tasks',
      session_overview:
        'Learn Finnish for daily life, job search, and official communication with Bangla guidance.',
    },
    contact: {
      whatsapp: '+358409369708',
      email: 'finbanglavoice@gmail.com',
    },
    enrollment: {
      button_text: 'Enroll Now',
      url: '',
    },
  },
];

const getShortText = (text, limit = 180) => {
  if (!text) return 'Course details will be updated soon.';
  return text.length > limit ? `${text.slice(0, limit).trim()}...` : text;
};

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`${API_BASE_URL}/api/courses`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Failed to load courses');
        }

        const courseList = Array.isArray(data) ? data : data?.courses || [];
        setCourses(courseList.length ? courseList : fallbackCourses);
      } catch (err) {
        console.error('Failed to load homepage courses:', err);
        setError('Showing default courses because the course API could not be loaded.');
        setCourses(fallbackCourses);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return (
    <section className="bg-[#101827] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Courses
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Explore All Courses</h2>
          </div>
          <Link
            to="/courses"
            className="w-fit rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View Courses
          </Link>
        </div>

        {loading && <p className="text-sm text-gray-300">Loading courses...</p>}
        {error && (
          <p className="mb-5 rounded-md bg-yellow-100 px-4 py-3 text-sm text-yellow-900">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => {
            const details = course.course_details || {};
            const instructor = course.instructor || {};
            const enrollment = course.enrollment || {};
            const contact = course.contact || {};
            const image = instructor.photo_url || fallbackImage;
            const enrollUrl =
              enrollment.url ||
              `https://wa.me/${String(contact.whatsapp || '+358409369708').replace(
                '+',
                ''
              )}?text=${encodeURIComponent(
                `Hi, I want to enroll in the "${course.course_name}" course.`
              )}`;

            return (
              <article
                key={course.id}
                className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#1A1A1A] shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={image}
                    alt={course.course_name}
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
                  <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold">
                    {details.session_mode && (
                      <span className="rounded bg-blue-500/15 px-2 py-1 text-blue-300">
                        {details.session_mode}
                      </span>
                    )}
                    {details.duration && (
                      <span className="rounded bg-green-500/15 px-2 py-1 text-green-300">
                        {details.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-bold leading-snug text-blue-300">
                    {course.course_name}
                  </h3>
                  {instructor.name && (
                    <p className="mb-3 text-sm text-gray-400">By {instructor.name}</p>
                  )}
                  <p className="mb-4 text-sm leading-6 text-gray-300">
                    {getShortText(details.session_overview)}
                  </p>

                  <dl className="mb-5 grid grid-cols-1 gap-2 text-sm text-gray-300">
                    {details.schedule && (
                      <div>
                        <dt className="font-semibold text-gray-100">Schedule</dt>
                        <dd>{details.schedule}</dd>
                      </div>
                    )}
                    {(details.total_fee || details.rate) && (
                      <div>
                        <dt className="font-semibold text-gray-100">Fee</dt>
                        <dd>{details.total_fee || details.rate}</dd>
                      </div>
                    )}
                  </dl>

                  <a
                    href={enrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-700"
                  >
                    {enrollment.button_text || 'Enroll Now'}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
