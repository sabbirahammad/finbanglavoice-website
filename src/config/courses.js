export const COURSE_PRICE = { amount: 60, currency: 'EUR', display: '60 € Total' };

export const BEGINNER_ENROLLMENT_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdA2DW8q_sRsW_fDfGGdjEwiXdcdCmK8GzZbDKf7kLSMzUrsQ/viewform';

export const isBeginnerCourse = (course) => {
  if ((course.id || course.course_id) === 'course-finnish-a1') return true;
  const title = course.title || course.course_name || '';
  const level = course.level || course.course_details?.level || '';
  return /practical finnish/i.test(title) ||
    (/finnish/i.test(title) && /beginner/i.test(`${title} ${level}`));
};
