import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  return (
    <div className="qurani-feedback-rating-container">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className="star-icon"
            color={ratingValue <= rating ? "#f56f46" : "#172153"}
            onClick={() => setRating(ratingValue)}
          />
        );
      })}
      <div className="ratingScore">
        {rating}/{totalStars}
      </div>
    </div>
  );
};

export default StarRating;
