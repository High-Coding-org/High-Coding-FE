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
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-[#FFFF] rounded">
      <span>추천식물</span>
      <span className="font-bold text-xl">{plantName}</span>
    </div>
  );
}
