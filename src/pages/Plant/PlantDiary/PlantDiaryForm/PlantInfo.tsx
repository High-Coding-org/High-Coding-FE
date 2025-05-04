import { SyntheticEvent, useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';

import { PlantInfo } from '../type';

export default function PlantInfoSection({
  name,
  percentage,
  totalGrowth,
  imageUrl,
}: PlantInfo) {
  const [watch, setWatch] = useState(true);
  const defaultImgUrl = new URL(
    '@/assets/plant/defaultPlantImg.webp',
    import.meta.url
  ).href;

  useEffect(() => {
    const interval = setInterval(() => {
      setWatch(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    target.src = defaultImgUrl;
    target.onerror = null;
  };

  return (
    <div className="flex items-center gap-4">
      <img
        src={imageUrl}
        alt={`${name} 이미지`}
        className="object-cover w-24 h-24 rounded-lg"
        onError={handleImageError}
      />
      <div className="flex-1">
        <h2 className="mb-2 text-lg font-semibold">{name}</h2>
        <p className="mb-2 text-sm text-gray-600">
          {watch
            ? `현재 ${totalGrowth}cm 성장했어요.`
            : `전체 대비 ${percentage}% 성장했어요!`}
        </p>
        <Progress
          value={percentage}
          className="w-full"
        />
      </div>
    </div>
  );
}
