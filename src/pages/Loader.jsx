import React from 'react';

const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">
    <div className="relative flex items-center justify-center">
      {/* Outer rotating ring */}
      <div className="absolute w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      {/* Inner pulsing circle */}
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      {/* Glowing effect */}
      <div className="absolute w-20 h-20 bg-blue-500 opacity-20 rounded-full animate-ping"></div>
    </div>
    <p className="mt-4 text-white text-lg font-semibold tracking-wide">Loading...</p>
  </div>
);

export default Loader;