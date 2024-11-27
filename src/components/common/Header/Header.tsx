import { MoonStar, CircleUserRound, Headset, Megaphone } from 'lucide-react';
import logo from '@/assets/logo.svg';

/**
 * Header 컴포넌트.
 * 상단 네비게이션 바를 렌더링하며, 로고와 여러 아이콘들(다크모드, 아바타, CS 센터, 공지사항)을 포함합니다.
 */
export default function Header(): JSX.Element {
  const ICONS = [MoonStar, CircleUserRound, Headset, Megaphone];
  return (
    <header className="flex justify-between items-center px-[5rem] h-[3.75rem]">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[8.125rem] h-[3.75rem]"
        />
      </div>
      <nav className="flex items-center space-x-[2.5rem] h-[3.75rem]">
        {ICONS.map((Icon, index) => (
          <Icon
            key={index}
            className="w-[1.5rem] h-[1.5rem]"
          />
        ))}
      </nav>
    </header>
  );
}
