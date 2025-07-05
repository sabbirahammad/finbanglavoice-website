// src/components/UpcomingSessions/CountdownTimer.jsx
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ date, time }) => {
  const getTimeLeft = () => {
    const target = new Date(`${date} ${time}`);
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000); // update every second for dynamic feeling
    return () => clearInterval(interval);
  }, [date, time]);

  if (!timeLeft) {
    return (
      <p className="text-red-600 font-semibold text-sm animate-pulse">
        🔴 Live now
      </p>
    );
  }

  // Add color highlight if less than 1 hour
  const isUrgent = timeLeft.days === 0 && timeLeft.hours === 0;

  return (
    <div
      className={`rounded-lg px-3 py-2 inline-block text-sm font-medium ${
        isUrgent
          ? 'bg-red-100 text-red-700 animate-pulse'
          : 'bg-blue-100 text-blue-700'
      }`}
    >
      ⏳ Starts in:&nbsp;
      {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
      {timeLeft.hours > 0 || timeLeft.days > 0 ? <span>{timeLeft.hours}h </span> : null}
      <span>{timeLeft.minutes}m </span>
      {isUrgent && <span>{timeLeft.seconds}s</span>}
    </div>
  );
};

export default CountdownTimer;

