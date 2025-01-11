import { MoonStar, CircleUserRound, CircleHelp, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';
import { HeaderMenuItems, AdditionalMenuItems } from '@/constants/header';
import { useState } from 'react';

/**
 * Header 컴포넌트.
 * 상단 네비게이션 바를 렌더링하며, 로고와 텍스트 메뉴(키트 구매, 내 키트, 키트 영상, 프로모션, 로그인), 아이콘(다크모드, 고객 관리, 마이페이지)을 포함합니다.
 */
export default function Header() {
  const icons = [MoonStar, CircleHelp, CircleUserRound];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center w-auto h-[3.75rem] whitespace-nowrap">
      <div className="flex">
        <img
          src={logo}
          alt="Logo"
          className="w-[8.125rem] h-[3.75rem] cursor-pointer"
        />

        <nav className="flex items-center h-[3.75rem] ">
          {HeaderMenuItems.map((item, index) => (
            <span
              key={index}
              className="hidden md:block text-sm font-bold cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
              {item}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="hidden md:block w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
          />
        ))}
        {isMenuOpen ? (
          <X
            onClick={toggleMenu}
            className="md:hidden w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
          />
        ) : (
          <Menu
            onClick={toggleMenu}
            className="md:hidden w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300 "
          />
        )}
      </div>

      <div
        className={`absolute top-[5.75rem] left-0 w-full h-full bg-white shadow-md transition-max-height duration-500 ease overflow-hidden  ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col mx-4 items-start p-4 space-y-2 transform">
          {HeaderMenuItems.map((item, index) => (
            <span
              key={index}
              className="text-sm font-bold cursor-pointer hover:bg-gray-100 px-4 py-2 rounded w-full text-left">
              {item}
            </span>
          ))}
          {AdditionalMenuItems.map((item, index) => (
            <span
              key={index}
              className="text-sm font-bold cursor-pointer hover:bg-gray-100 px-4 py-2 rounded w-full text-left">
              {item}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
