import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  value: number;
}

/**
 * StarRating 컴포넌트
 * 주어진 값에 따라 별점을 렌더링합니다.
 * 전체 별, 반쪽 별을 포함합니다.
 */
export default function StarRating({ value }: StarRatingProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.round(value)) {
        stars.push(
          <Star
            key={i}
            className="w-5"
          />
        );
      } else if (i - value >= 0.5) {
        stars.push(
          <StarHalf
            key={i}
            className="w-5"
          />
        );
      }
    }
    return stars;
  };

  return <div className="flex gap-1">{renderStars()}</div>;
}
