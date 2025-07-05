import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // ✅ এটি useAuth হতে হবে
import SecureVideoPlayer from './SecureVideoPlayer';

const PrivateCoursePage = () => {
  const { user } = useAuth(); // ✅ এটি ঠিকভাবে context থেকে user আনবে

  if (!user) {
    return <Navigate to="/login" />;
  }

  const videoId = 'dQw4w9WgXcQ';
  const userEmail = user.email;

  return (
    <div className="pt-24 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          📚 Welcome to Your Premium Course
        </h1>

        <SecureVideoPlayer
          videoId={videoId}
          overlayText={`Accessed by: ${userEmail}`}
        />

        <p className="text-sm text-gray-500 mt-4">
          For best experience, use a desktop browser. Your access is monitored.
        </p>
      </div>
    </div>
  );
};

export default PrivateCoursePage;


