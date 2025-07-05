// src/pages/PendingApproval.jsx
import React from 'react';

const PendingApproval = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-center px-4">
      <h1 className="text-3xl font-bold text-yellow-800 mb-4">⏳ Approval Pending</h1>
      <p className="text-gray-700 max-w-md">
        Thank you for signing up! 🚀 Your request is under review by our admin team.
        Once approved, you’ll automatically get access to the premium course.
        Please check back later or contact support if needed.
      </p>
    </div>
  );
};

export default PendingApproval;
