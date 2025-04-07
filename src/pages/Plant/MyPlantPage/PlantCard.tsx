import { IPlant } from './type';

/**
 * PlantCard 컴포넌트
 *
 * 개별 식물 카드 정보를 표시합니다. 각 카드에는 식물의 이미지, 이름이 포함됩니다.
 * PlantDropdownMenu를 통해 수정,삭제를 할 수 있습니다.
 */

export default function PlantCard({
  id,
  userId,
  name,
  idealTemperature,
  idealHumidity,
  idealSolidMoisture,
  idealLightIntensity,
  growthTarget,
  totalGrowth,
  imageUrl,
}: IPlant) {
  return (
    <div className="h-[200px] border border-gray-300 rounded cursor-pointer hover:translate-y-[-10px] transition-transform duration-300">
      {/* 이미지 영역 */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[75%] rounded-t object-cover"
      />

      {/* 식물 정보 및 메뉴 */}
      <div className="p-3 w-full h-[25%] flex items-center justify-between">
        <span className="mr-4 font-bold truncate">{name}</span>
        {/* <PlantDropdownMenu onDelete={onDelete} /> */}
      </div>
    </div>
  );
}
