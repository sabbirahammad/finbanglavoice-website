import React, { useEffect } from 'react';

const SecureVideoPlayer = ({ videoId, overlayText }) => {
  useEffect(() => {
    const disableContext = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableContext);
    return () => {
      document.removeEventListener('contextmenu', disableContext);
    };
  }, []);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md">
      {/* Watermark Overlay */}
      <div className="absolute z-10 w-full h-full flex items-center justify-center pointer-events-none">
        <p className="text-sm text-white bg-black/40 px-4 py-1 rounded-full">
          {overlayText}
        </p>
      </div>

      {/* Embedded YouTube Video */}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&disablekb=1`}
        title="Secure Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SecureVideoPlayer;

