import Spinner from '@/components/common/Spinner/Spinner';
import { useAIPlantImage } from '@/hooks/api/useAIPlantImage';

/**
 * PlantImage
 *
 * 추천된 식물의 이미지를 표시하는 컴포넌트입니다.
 */
export default function PlantImage({ plantName }: { plantName: string }) {
  const {
    data: imageData,
    isLoading: isImageLoading,
    isError: isImageError,
  } = useAIPlantImage(plantName);

  //이미지 로딩 중일 때
  if (isImageLoading)
    return (
      <div className="w-full h-[253px] flex justify-center">
        <Spinner />
      </div>
    );

  // 오류가 있거나 데이터가 없을 때
  if (isImageError || !imageData?.urls?.small)
    return (
      <div className="w-full h-[253px] flex justify-center items-center">
        <div>이미지 로딩 실패</div>
      </div>
    );

  return (
    <img
      src={imageData?.urls?.small}
      alt="Recommended Plant"
      className="w-full h-[253px] object-cover rounded overflow-hidden"
    />
  );
}
