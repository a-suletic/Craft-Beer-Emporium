import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingBarProps {
  maxRating?: number; // Max rating count, default is 5
  onRatingSelect?: (rating: number) => void; // Optional callback to handle rating selection
  initialRating?: number; // Optional initial rating value
}

const RatingBar: React.FC<RatingBarProps> = ({
  maxRating = 5,
  onRatingSelect,
  initialRating = 0,
}) => {
  const [currentRating, setCurrentRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (rating: number) => {
    setCurrentRating(rating);
    if (onRatingSelect) onRatingSelect(rating);
  };

  const handleMouseEnter = (rating: number) => setHoverRating(rating);
  const handleMouseLeave = () => setHoverRating(0);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={ratingValue}
            className={`cursor-pointer transition-colors duration-200 ${
              (hoverRating || currentRating) >= ratingValue
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
            size={24}
          />
        );
      })}
    </div>
  );
};

export default RatingBar;
