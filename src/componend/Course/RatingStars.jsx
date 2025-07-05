import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 text-sm" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default RatingStars;
