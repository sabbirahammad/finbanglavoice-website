import React from 'react';
import CourseOutcomes from '../componend/Course/CourseOutcomes';
import CourseTabs from '../componend/Course/CourseTabs';
import InstructorInfo from '../componend/Course/InstructorInfo'; // Example
// ✅ This is the correct name — should not reuse CoursePage
// Rename this component to SingleCoursePage or CourseDetailsPage

const SingleCoursePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 pt-24">
      {/* Title, description etc */}
      <h1 className="text-3xl font-bold mb-4">Complete React Developer Course</h1>
      <p className="text-gray-600 mb-6">
        Learn React from scratch and build modern web apps with practical projects and hands-on examples.
      </p>

      {/* ✅ Course Outcomes */}
      <CourseOutcomes
        outcomes={[
          "Master the fundamentals of JavaScript",
          "Build real-world projects using React",
          "Understand state management and context API",
          "Deploy applications using Netlify and Vercel"
        ]}
      />

      {/* ✅ Course Tabs */}
      <CourseTabs
        curriculum={[
          { title: 'Introduction to React', duration: '15 min' },
          { title: 'Components & Props', duration: '25 min' },
          { title: 'State & useEffect', duration: '30 min' }
        ]}
        reviews={[
          { name: 'Rifat', message: 'Excellent course!', rating: 5 },
          { name: 'Nusaiba', message: 'Very detailed and beginner-friendly.', rating: 4.5 }
        ]}
        faqs={[
          { question: 'Do I need JavaScript knowledge?', answer: 'Yes, basic understanding is helpful.' },
          { question: 'Will I get a certificate?', answer: 'Yes, upon completion.' }
        ]}
      />

      {/* ✅ Optional: Instructor Info */}
      <InstructorInfo />
    </div>
  );
};

export default SingleCoursePage;

