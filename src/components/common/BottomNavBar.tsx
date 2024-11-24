import { ShoppingBasket, TvMinimalPlay, Sparkles, Binary } from 'lucide-react';

/**
 *  BottomNavBar 컴포넌트
 * 하단 네비게이션 바를 렌더링하며, 여러 아이콘들(키트구매, 내 키트, 영상 보기, 이벤트)을 포함합니다.
 */
export default function BottomNavBar() {
  const icons = [ShoppingBasket, Binary, TvMinimalPlay, Sparkles];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-[18.75rem] h-[3.125rem] px-[3rem] items-center rounded-t-[0.5rem] bg-[#007AFD]">
      {icons.map((Icon, index) => (
        <a
          key={index}
          className="flex items-center justify-center cursor-pointer text-white w-[2.5rem] h-[2.5rem] hover:scale-110 hover:rotate-12 transition-all duration-300">
          <Icon className="w-[1.25rem] h-[1.25rem]" />
        </a>
      ))}
    </nav>
  );
}
