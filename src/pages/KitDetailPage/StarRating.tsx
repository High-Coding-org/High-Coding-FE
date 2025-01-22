import { Star, StarHalf } from 'lucide-react';

import { StarRatingProps } from '@/pages/KitDetailPage/type';

/**
 * StarRating 컴포넌트
 * 주어진 값에 따라 별점을 렌더링합니다.
 * 전체 별, 반쪽 별을 포함합니다.
 */

export default function StarRating({ value }: StarRatingProps) {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(value)) {
        stars.push(
          <Star
            key={`star-full-${i}`}
            className="w-4 text-black fill-black"
          />
        );
      } else if (i - value <= 0.5) {
        stars.push(
          <div
            key={`star-half-${i}`}
            className="relative w-4 h-5">
            <StarHalf className="absolute left-0 w-4 text-black fill-black" />
            <StarHalf className="w-4 text-gray-200 fill-gray-200 transform scale-x-[-1] " />
          </div>
        );
      } else {
        stars.push(
          <Star
            key={`star-empty-${i}`}
            className="w-4 text-gray-200 fill-gray-200"
          />
        );
      }
    }
    return stars;
  };

  return <div className="flex gap-1">{renderStars()}</div>;
}
