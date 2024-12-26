import { ShoppingBasket, TvMinimalPlay, Sparkles, Binary } from 'lucide-react';

interface BottomNavBarProps {
  onIconClick: (index: number) => void;
}

/**
 * BottomNavBar 컴포넌트
 *
 * 하단 네비게이션 바를 렌더링하며, 키트 구매, 내 키트, 영상 보기, 이벤트 참여와 같은
 * 다양한 기능을 나타내는 아이콘들을 포함합니다.
 *
 * @props
 * - `onIconClick`: 아이콘 클릭 시 실행되는 콜백 함수. 클릭된 아이콘의 인덱스를 전달받습니다.
 *
 * @returns 네비게이션 바 JSX
 */

export default function BottomNavBar({ onIconClick }: BottomNavBarProps) {
  const icons = [ShoppingBasket, Binary, TvMinimalPlay, Sparkles];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-[18.75rem] h-[3.125rem] px-[3rem] items-center rounded-t-[0.5rem] bg-[#007AFD]">
      {icons.map((Icon, index) => (
        <button
          key={index}
          onClick={() => onIconClick(index)}
          className="flex items-center justify-center cursor-pointer text-white w-[2.5rem] h-[2.5rem] hover:scale-110 hover:rotate-12 transition-all duration-300">
          <Icon className="w-[1.25rem] h-[1.25rem]" />
        </button>
      ))}
    </nav>
  );
}
