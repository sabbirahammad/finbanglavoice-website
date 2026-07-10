import React, { useMemo, useState, useRef, useEffect } from 'react';
import { API_BASE_URL, getAuthHeaders } from '../config/api';

const emptyArticle = {
  title: '',
  excerpt: '',
  author: '',
  image: '',
};

const emptyCourse = {
  course_name: '',
  instructor: {
    name: '',
    photo_url: '',
    bio: '',
  },
  course_details: {
    duration: '',
    schedule: '',
    session_mode: '',
    rate: '',
    total_fee: '',
    material: '',
    session_overview: '',
  },
  contact: {
    whatsapp: '',
    email: '',
  },
  enrollment: {
    button_text: '',
    url: '',
  },
};

const emptySession = {
  session_id: '',
  course_name: '',
  instructor: {
    name: '',
    profile_url: '',
    photo_url: '',
  },
  session_type: '',
  duration: '',
  rate: '',
  total_cost: '',
  overview: '',
  session_link: '',
  contact_options: {
    whatsapp: '',
    email: '',
  },
  session_schedule: {
    date: '',
    time: '',
  },
};

const sections = [
  { key: 'course', label: 'Courses', endpoint: '/api/courses' },
  { key: 'article', label: 'Articles', endpoint: '/api/posts' },
  { key: 'session', label: 'Sessions', endpoint: '/api/sessions' },
];

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100';

const textareaClass = `${inputClass} min-h-28 resize-y`;

const Field = ({ label, value, onChange, type = 'text', required = false }) => (
  <label className="block">
    <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
    <input
      type={type}
      value={value}
      required={required}
      onChange={(event) => onChange(event.target.value)}
      className={inputClass}
    />
  </label>
);

const TextArea = ({ label, value, onChange, required = false }) => (
  <label className="block">
    <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
    <textarea
      value={value}
      required={required}
      onChange={(event) => onChange(event.target.value)}
      className={textareaClass}
    />
  </label>
);

const PanelSection = ({ title, children }) => (
  <section className="rounded-lg border border-gray-200 bg-gray-50 p-4">
    <h2 className="mb-4 text-base font-semibold text-gray-900">{title}</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  </section>
);

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_pass') === 'shafiqulalam';
  });
  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState('');

  const [activeSection, setActiveSection] = useState('course');
  const [article, setArticle] = useState(emptyArticle);
  const [course, setCourse] = useState(emptyCourse);
  const [session, setSession] = useState(emptySession);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textareaRef = useRef(null);

  const insertFormat = (before, after) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    const replacement = before + selectedText + after;

    const newValue = text.substring(0, start) + replacement + text.substring(end);
    setArticle((current) => ({ ...current, excerpt: newValue }));

    // Reset selection/focus
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'shafiqulalam') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_pass', 'shafiqulalam');
      setPassError('');
    } else {
      setPassError('Incorrect password. Please try again.');
    }
  };

  const [items, setItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const fetchItems = async () => {
    setLoadingItems(true);
    try {
      const response = await fetch(`${API_BASE_URL}${activeConfig.endpoint}`);
      const data = await response.json();
      
      let list = [];
      if (activeSection === 'article') {
        list = Array.isArray(data) ? data : (data.posts || data.data || []);
      } else {
        list = Array.isArray(data) ? data : (data.courses || data.sessions || data.data || []);
      }
      setItems(list);
    } catch (err) {
      console.error("Failed to fetch items:", err);
      setItems([]);
    } finally {
      setLoadingItems(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchItems();
      resetActiveForm();
      setEditingId(null);
      setStatus({ type: '', message: '' });
    }
  }, [activeSection, isAuthenticated]);

  const handleCancelEdit = () => {
    resetActiveForm();
    setEditingId(null);
    setStatus({ type: '', message: '' });
  };

  const handleEditClick = (item) => {
    setEditingId(item.id);
    if (activeSection === 'article') {
      setArticle({
        title: item.title || '',
        excerpt: item.excerpt || '',
        author: item.author || '',
        image: item.image || '',
      });
    } else if (activeSection === 'course') {
      setCourse({
        course_name: item.course_name || '',
        instructor: {
          name: item.instructor?.name || '',
          photo_url: item.instructor?.photo_url || '',
          bio: item.instructor?.bio || '',
        },
        course_details: {
          duration: item.course_details?.duration || '',
          schedule: item.course_details?.schedule || '',
          session_mode: item.course_details?.session_mode || '',
          rate: item.course_details?.rate || '',
          total_fee: item.course_details?.total_fee || '',
          material: item.course_details?.material || '',
          session_overview: item.course_details?.session_overview || '',
        },
        contact: {
          whatsapp: item.contact?.whatsapp || '',
          email: item.contact?.email || '',
        },
        enrollment: {
          button_text: item.enrollment?.button_text || '',
          url: item.enrollment?.url || '',
        },
      });
    } else if (activeSection === 'session') {
      setSession({
        session_id: item.session_id || '',
        course_name: item.course_name || '',
        instructor: {
          name: item.instructor?.name || '',
          profile_url: item.instructor?.profile_url || '',
          photo_url: item.instructor?.photo_url || '',
        },
        session_type: item.session_type || '',
        duration: item.duration || '',
        rate: item.rate || '',
        total_cost: item.total_cost || '',
        overview: item.overview || '',
        session_link: item.session_link || '',
        contact_options: {
          whatsapp: item.contact_options?.whatsapp || '',
          email: item.contact_options?.email || '',
        },
        session_schedule: {
          date: item.session_schedule?.date || '',
          time: item.session_schedule?.time || '',
        },
      });
    }
  };

  const handleDeleteClick = async (itemId) => {
    if (!window.confirm(`Are you sure you want to delete this ${activeConfig.label.slice(0, -1)}?`)) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${activeConfig.endpoint}/${itemId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || data?.error || 'Delete failed');
      }

      setStatus({
        type: 'success',
        message: `${activeConfig.label.slice(0, -1)} deleted successfully.`,
      });
      
      if (editingId === itemId) {
        handleCancelEdit();
      }

      fetchItems();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while deleting.',
      });
    }
  };

  const activeConfig = useMemo(
    () => sections.find((section) => section.key === activeSection),
    [activeSection]
  );

  const activePayload = {
    course,
    article,
    session,
  }[activeSection];

  const resetActiveForm = () => {
    if (activeSection === 'course') setCourse(emptyCourse);
    if (activeSection === 'article') setArticle(emptyArticle);
    if (activeSection === 'session') setSession(emptySession);
  };

  const updateCourse = (path, value) => {
    setCourse((current) => {
      const next = structuredClone(current);
      const [group, field] = path;
      if (field) next[group][field] = value;
      else next[group] = value;
      return next;
    });
  };

  const updateSession = (path, value) => {
    setSession((current) => {
      const next = structuredClone(current);
      const [group, field] = path;
      if (field) next[group][field] = value;
      else next[group] = value;
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    setIsSubmitting(true);

    const url = editingId 
      ? `${API_BASE_URL}${activeConfig.endpoint}/${editingId}`
      : `${API_BASE_URL}${activeConfig.endpoint}`;
    
    const method = editingId ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(),
        },
        body: JSON.stringify(activePayload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || data?.error || 'Request failed');
      }

      setStatus({
        type: 'success',
        message: `${activeConfig.label.slice(0, -1)} ${editingId ? 'updated' : 'created'} successfully.`,
      });
      resetActiveForm();
      setEditingId(null);
      fetchItems();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 border border-gray-200 mt-20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Admin Authentication</h2>
            <p className="text-sm text-gray-500 mt-1">Please enter the password to access this page</p>
          </div>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="••••••••"
                required
              />
            </div>
            {passError && <p className="text-sm text-red-600 font-medium">{passError}</p>}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Access Panel
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-700">Admin Panel</p>
            <h1 className="text-3xl font-bold text-gray-950">
              {editingId ? 'Edit' : 'Create'} Website Content
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => {
                  setActiveSection(section.key);
                  setStatus({ type: '', message: '' });
                }}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  activeSection === section.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {status.message && (
          <div
            className={`mb-4 rounded-md px-4 py-3 text-sm font-medium ${
              status.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-lg bg-white p-5 shadow-sm">
            {activeSection === 'course' && (
              <>
                <PanelSection title="Course">
                  <Field
                    label="Course Name"
                    value={course.course_name}
                    required
                    onChange={(value) => updateCourse(['course_name'], value)}
                  />
                </PanelSection>

                <PanelSection title="Instructor">
                  <Field
                    label="Instructor Name"
                    value={course.instructor.name}
                    onChange={(value) => updateCourse(['instructor', 'name'], value)}
                  />
                  <Field
                    label="Instructor Photo URL"
                    value={course.instructor.photo_url}
                    onChange={(value) => updateCourse(['instructor', 'photo_url'], value)}
                  />
                  <div className="md:col-span-2">
                    <TextArea
                      label="Instructor Bio"
                      value={course.instructor.bio}
                      onChange={(value) => updateCourse(['instructor', 'bio'], value)}
                    />
                  </div>
                </PanelSection>

                <PanelSection title="Course Details">
                  <Field
                    label="Duration"
                    value={course.course_details.duration}
                    onChange={(value) => updateCourse(['course_details', 'duration'], value)}
                  />
                  <Field
                    label="Schedule"
                    value={course.course_details.schedule}
                    onChange={(value) => updateCourse(['course_details', 'schedule'], value)}
                  />
                  <Field
                    label="Session Mode"
                    value={course.course_details.session_mode}
                    onChange={(value) => updateCourse(['course_details', 'session_mode'], value)}
                  />
                  <Field
                    label="Rate"
                    value={course.course_details.rate}
                    onChange={(value) => updateCourse(['course_details', 'rate'], value)}
                  />
                  <Field
                    label="Total Fee"
                    value={course.course_details.total_fee}
                    onChange={(value) => updateCourse(['course_details', 'total_fee'], value)}
                  />
                  <Field
                    label="Material"
                    value={course.course_details.material}
                    onChange={(value) => updateCourse(['course_details', 'material'], value)}
                  />
                  <div className="md:col-span-2">
                    <TextArea
                      label="Session Overview"
                      value={course.course_details.session_overview}
                      onChange={(value) =>
                        updateCourse(['course_details', 'session_overview'], value)
                      }
                    />
                  </div>
                </PanelSection>

                <PanelSection title="Contact">
                  <Field
                    label="WhatsApp"
                    value={course.contact.whatsapp}
                    onChange={(value) => updateCourse(['contact', 'whatsapp'], value)}
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={course.contact.email}
                    onChange={(value) => updateCourse(['contact', 'email'], value)}
                  />
                </PanelSection>

                <PanelSection title="Enrollment">
                  <Field
                    label="Button Text"
                    value={course.enrollment.button_text}
                    onChange={(value) => updateCourse(['enrollment', 'button_text'], value)}
                  />
                  <Field
                    label="Enrollment URL"
                    value={course.enrollment.url}
                    onChange={(value) => updateCourse(['enrollment', 'url'], value)}
                  />
                </PanelSection>
              </>
            )}

            {activeSection === 'article' && (
              <PanelSection title="Article">
                <Field
                  label="Title"
                  value={article.title}
                  required
                  onChange={(value) => setArticle((current) => ({ ...current, title: value }))}
                />
                <Field
                  label="Author"
                  value={article.author}
                  required
                  onChange={(value) => setArticle((current) => ({ ...current, author: value }))}
                />
                <Field
                  label="Image URL"
                  value={article.image}
                  onChange={(value) => setArticle((current) => ({ ...current, image: value }))}
                />
                <div className="md:col-span-2">
                  <label className="block">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Excerpt / Content</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => insertFormat('**', '**')}
                          className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold border border-gray-300"
                        >
                          B (Bold)
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormat('==', '==')}
                          className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 font-semibold border border-yellow-300"
                        >
                          Highlight
                        </button>
                      </div>
                    </div>
                    <textarea
                      ref={textareaRef}
                      value={article.excerpt}
                      required
                      onChange={(event) => setArticle((current) => ({ ...current, excerpt: event.target.value }))}
                      className={textareaClass}
                      placeholder="Write your article content here..."
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Formatting tips: Select text and click the buttons above to format, or type manually: **bold** and ==highlight==.
                    </p>
                  </label>
                </div>
              </PanelSection>
            )}

            {activeSection === 'session' && (
              <>
                <PanelSection title="Session">
                  <Field
                    label="Session ID"
                    value={session.session_id}
                    onChange={(value) => updateSession(['session_id'], value)}
                  />
                  <Field
                    label="Course Name"
                    value={session.course_name}
                    required
                    onChange={(value) => updateSession(['course_name'], value)}
                  />
                  <Field
                    label="Session Type"
                    value={session.session_type}
                    onChange={(value) => updateSession(['session_type'], value)}
                  />
                  <Field
                    label="Duration"
                    value={session.duration}
                    onChange={(value) => updateSession(['duration'], value)}
                  />
                  <Field
                    label="Rate"
                    value={session.rate}
                    onChange={(value) => updateSession(['rate'], value)}
                  />
                  <Field
                    label="Total Cost"
                    value={session.total_cost}
                    onChange={(value) => updateSession(['total_cost'], value)}
                  />
                  <Field
                    label="Session Link"
                    value={session.session_link}
                    onChange={(value) => updateSession(['session_link'], value)}
                  />
                  <div className="md:col-span-2">
                    <TextArea
                      label="Overview"
                      value={session.overview}
                      onChange={(value) => updateSession(['overview'], value)}
                    />
                  </div>
                </PanelSection>

                <PanelSection title="Instructor">
                  <Field
                    label="Instructor Name"
                    value={session.instructor.name}
                    onChange={(value) => updateSession(['instructor', 'name'], value)}
                  />
                  <Field
                    label="Instructor Profile URL"
                    value={session.instructor.profile_url}
                    onChange={(value) => updateSession(['instructor', 'profile_url'], value)}
                  />
                  <Field
                    label="Instructor Photo URL"
                    value={session.instructor.photo_url}
                    onChange={(value) => updateSession(['instructor', 'photo_url'], value)}
                  />
                </PanelSection>

                <PanelSection title="Contact Options">
                  <Field
                    label="WhatsApp"
                    value={session.contact_options.whatsapp}
                    onChange={(value) => updateSession(['contact_options', 'whatsapp'], value)}
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={session.contact_options.email}
                    onChange={(value) => updateSession(['contact_options', 'email'], value)}
                  />
                </PanelSection>

                <PanelSection title="Schedule">
                  <Field
                    label="Date"
                    type="date"
                    value={session.session_schedule.date}
                    onChange={(value) => updateSession(['session_schedule', 'date'], value)}
                  />
                  <Field
                    label="Time"
                    type="time"
                    value={session.session_schedule.time}
                    onChange={(value) => updateSession(['session_schedule', 'time'], value)}
                  />
                </PanelSection>
              </>
            )}

            <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
              {editingId ? (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel Edit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={resetActiveForm}
                  className="rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : editingId ? `Update ${activeConfig.label.slice(0, -1)}` : `Create ${activeConfig.label.slice(0, -1)}`}
              </button>
            </div>
          </form>

          <aside className="rounded-lg bg-gray-950 p-5 text-white shadow-sm">
            <div className="mb-4">
              <p className="text-sm font-medium text-blue-300">Request Preview</p>
              <h2 className="text-xl font-semibold">{activeConfig.endpoint}</h2>
            </div>
            <pre className="max-h-[720px] overflow-auto rounded-md bg-black p-4 text-xs leading-relaxed text-gray-100">
              {JSON.stringify(activePayload, null, 2)}
            </pre>
          </aside>
        </div>

        {/* Existing Items List */}
        <div className="mt-8 rounded-lg bg-white p-5 shadow-sm border border-gray-200">
          <div className="mb-4 flex items-center justify-between border-b pb-3">
            <h2 className="text-lg font-bold text-gray-900">Existing {activeConfig.label}</h2>
            <span className="text-xs text-gray-500">{items.length} items found</span>
          </div>

          {loadingItems ? (
            <p className="text-sm text-gray-500 py-4">Loading existing {activeConfig.label.toLowerCase()}...</p>
          ) : items.length === 0 ? (
            <p className="text-sm text-gray-500 py-4">No existing {activeConfig.label.toLowerCase()} found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b text-gray-400 font-semibold">
                    <th className="py-2 px-3">Title / Name</th>
                    <th className="py-2 px-3">Author / Instructor</th>
                    <th className="py-2 px-3">Details / Excerpt</th>
                    <th className="py-2 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-700">
                  {items.map((item) => {
                    const title = item.title || item.course_name || `Session: ${item.course_name} (${item.session_id || item.id})`;
                    const subtitle = item.author || item.instructor?.name || 'N/A';
                    const detail = item.excerpt || item.course_details?.duration || item.overview || '';
                    
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-3 px-3 font-semibold text-gray-900 max-w-xs truncate">{title}</td>
                        <td className="py-3 px-3 max-w-xs truncate">{subtitle}</td>
                        <td className="py-3 px-3 max-w-md truncate">{detail}</td>
                        <td className="py-3 px-3 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => handleEditClick(item)}
                            className="text-blue-600 hover:text-blue-800 font-semibold mr-3 transition cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteClick(item.id)}
                            className="text-red-600 hover:text-red-800 font-semibold transition cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;

