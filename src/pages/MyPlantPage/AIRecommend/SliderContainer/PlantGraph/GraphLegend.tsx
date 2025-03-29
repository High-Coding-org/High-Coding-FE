interface GraphLegendProps {
  plantName: string;
}

/**
 * GraphLegend
 *
 * 레이더 차트에서 AI 추천 식물 데이터와 사용자 입력 데이터를 구분할 수 있도록
 * 색상 및 라벨을 제공하는 범례(legend) 컴포넌트입니다.
 */
export default function GraphLegend({ plantName }: GraphLegendProps) {
  return (
    <div className="absolute left-[50%] transform -translate-x-1/2 bottom-1 flex gap-6">
      <div className="flex items-center">
        <div className="bg-sky-200 w-3 h-3 mr-2" />
        <span>{plantName} </span>
      </div>
      <div className="flex items-center">
        <div className="bg-red-200 w-3 h-3 mr-2" />
        <span>유저 입력</span>
      </div>
    </div>
  );
}
