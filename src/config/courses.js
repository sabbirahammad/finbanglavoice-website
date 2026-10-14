export const COURSE_PRICE = { amount: 60, currency: 'EUR', display: '60 € Total' };

export const BEGINNER_ENROLLMENT_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdA2DW8q_sRsW_fDfGGdjEwiXdcdCmK8GzZbDKf7kLSMzUrsQ/viewform';

export const isBeginnerCourse = (course) => {
  if (!course) return false;
  const cid = String(course.id || course.course_id || '');
  if (cid === 'course-finnish-a1' || cid === '3') return true;
  const title = course.title || course.course_name || '';
  const level = course.level || course.course_details?.level || '';
  return /practical finnish/i.test(title) ||
    (/finnish/i.test(title) && /beginner/i.test(`${title} ${level}`));
};

export const getCourseEnrollmentUrl = (course) => {
  if (!course) return BEGINNER_ENROLLMENT_URL;
  if (course.enrollUrl) return course.enrollUrl;
  if (course.enrollment?.url) return course.enrollment.url;
  if (isBeginnerCourse(course)) return BEGINNER_ENROLLMENT_URL;
  const title = course.title || course.course_name || 'Finnish Language Program';
  return `https://wa.me/358409369708?text=${encodeURIComponent(
    `Hello Dr. SM Shafiqul Alam, I would like to enroll in "${title}". Please send me batch details and enrollment steps.`
  )}`;
};

