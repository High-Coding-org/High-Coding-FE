interface PageIndicatorProps {
  totalPage: number;
  index: number;
}

/**
 * PageIndicator
 *
 * 이 컴포넌트는 현재 슬라이드의 위치를 시각적으로 표시하는 페이지 인디케이터입니다.
 * 원형 점 UI를 생성하여 사용자에게 현재 위치를 안내합니다.
 */
export default function PageIndicator({
  totalPage,
  index,
}: PageIndicatorProps) {
  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
      {[...Array(totalPage)].map((_, idx) => (
        <div
          key={idx}
          className={`w-2 h-2 rounded-full ${
            idx === index ? 'bg-primary' : 'bg-[#E0E0E0]'
          }`}
        />
      ))}
    </div>
  );
}
