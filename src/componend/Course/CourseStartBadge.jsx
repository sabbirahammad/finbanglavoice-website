// CourseStartBadge.jsx
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const CourseStartBadge = ({ startDate }) => {
  if (!startDate) return null;

  const start = dayjs(startDate);
  const now = dayjs();
  const daysLeft = start.diff(now, 'day');

  if (daysLeft < 0) return null; // already started

  const label =
    daysLeft === 0
      ? 'Starts Today'
      : daysLeft === 1
      ? 'Starts Tomorrow'
      : `Starts in ${daysLeft} days`;

  return (
    <span className="inline-block text-xs font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
      🕒 {label}
    </span>
  );
};

export default CourseStartBadge;
