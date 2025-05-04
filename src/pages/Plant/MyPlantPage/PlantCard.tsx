import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/path';
import { IPlant } from '@/types/plantData';

import PlantDropdownMenu from './PlantDropdownMenu';
// import { IPlant } from './type';

/**
 * PlantCard 컴포넌트
 *
 * 개별 식물 카드 정보를 표시합니다. 각 카드에는 식물의 이미지, 이름이 포함됩니다.
 * PlantDropdownMenu를 통해 수정,삭제를 할 수 있습니다.
 */

export default function PlantCard({ id, name, imageUrl }: IPlant) {
  const navigate = useNavigate();
  const defaultImgUrl = new URL(
    '@/assets/plant/defaultPlantImg.webp',
    import.meta.url
  ).href;

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    target.src = defaultImgUrl;
    target.onerror = null;
  };

  return (
    <div
      className="h-[200px] border border-gray-300 rounded cursor-pointer  transition-transform duration-300"
      onClick={() => navigate(`${PATH.PLANT_DIARY}/${id}`)}>
      {/* 이미지 영역 */}
      <img
        src={imageUrl ?? defaultImgUrl}
        alt={name}
        className="w-full h-[75%] rounded-t object-cover"
        onError={handleImageError}
      />

      {/* 식물 정보 및 메뉴 */}
      <div className="p-3 w-full h-[25%] flex items-center justify-between">
        <span className="mr-4 font-bold truncate">{name}</span>
        <PlantDropdownMenu id={id} />
      </div>
    </div>
  );
}
