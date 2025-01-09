import { MoonStar, CircleUserRound, CircleHelp } from 'lucide-react';
import logo from '@/assets/logo.svg';

/**
 * Header 컴포넌트.
 * 상단 네비게이션 바를 렌더링하며, 로고와 텍스트 메뉴(키트 구매, 내 키트, 키트 영상, 프로모션, 로그인), 아이콘(다크모드, 고객 관리, 마이페이지)을 포함합니다.
 */
export default function Header(): JSX.Element {
  const menuItems = ['키트 구매', '내 키트', '키트 영상', '프로모션', '로그인'];
  const icons = [MoonStar, CircleHelp, CircleUserRound];

  return (
    <header className="flex justify-between items-center px-[10rem] h-[3.75rem]">
      <div className="flex">
        <img
          src={logo}
          alt="Logo"
          className="w-[8.125rem] h-[3.75rem] mr-16 cursor-pointer"
        />

        <nav className="flex items-center h-[3.75rem]">
          {menuItems.map((item, index) => (
            <span
              key={index}
              className="text-sm font-bold cursor-pointer  hover:bg-gray-100 px-4 py-2 rounded">
              {item}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
          />
        ))}
      </div>
    </header>
  );
}
