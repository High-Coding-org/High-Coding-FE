interface PlantNameProps {
  plantName: string;
}

/**
 * PlantName
 *
 * 추천된 식물의 이름을 표시하는 컴포넌트입니다.
 */
export default function PlantName({ plantName }: PlantNameProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="font-bold text-2xl">{plantName}</span>
    </div>
  );
}
