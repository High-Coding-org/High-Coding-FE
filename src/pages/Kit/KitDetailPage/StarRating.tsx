import { Star } from 'lucide-react';

import { StarRatingProps } from './type';

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
      } else if (i - value < 1) {
        const percentage = (value - Math.floor(value)) * 100;
        stars.push(
          <Star
            key={`star-partial-${i}`}
            className="w-4"
            style={{
              fill: `url(#grad-${i})`,
              stroke: `url(#grad-${i})`,
            }}>
            <svg>
              <defs>
                <linearGradient id={`grad-${i}`}>
                  <stop
                    offset={`${percentage}%`}
                    style={{ stopColor: 'black' }}
                  />
                  <stop
                    offset={`${percentage}%`}
                    style={{ stopColor: '#e5e7eb' }}
                  />
                </linearGradient>
              </defs>
            </svg>
          </Star>
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
