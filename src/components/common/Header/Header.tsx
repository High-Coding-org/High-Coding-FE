import { CircleHelp, CircleUserRound, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import {
  ADDITIONAL_MENU_ITEMS,
  MENU_ITEMS,
  NAME_TO_PATH,
} from '@/constants/header';

import Logo from '../Logo/Logo';

/**
 * Header 컴포넌트.
 * 상단 네비게이션 바를 렌더링하며, 로고와 텍스트 메뉴(키트 구매, 내 키트, 키트 영상, 프로모션, 로그인), 아이콘(다크모드, 고객 관리, 마이페이지)을 포함합니다.
 */

export default function Header() {
  const navigate = useNavigate();
  const icons = [CircleHelp, CircleUserRound];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScroll && window.scrollY != 0) return;

      setIsScroll(window.scrollY != 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScroll]);

  return (
    <div
      className={`flex sticky justify-center w-full top-0 z-header bg-white px-5 ${isScroll ? 'border-b border-gray-300' : ''} `}>
      <header
        className={`flex justify-between items-center w-pageWidth h-[3.75rem] whitespace-nowrap `}>
        <div className="flex">
          <Logo style="w-[8.125rem] h-[3.75rem]" />

          <nav className="flex items-center h-[3.75rem] ">
            {MENU_ITEMS.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => navigate(NAME_TO_PATH[item])}
                className="hidden px-4 py-2 text-sm font-bold rounded cursor-pointer md:block hover:bg-gray-100">
                {item}
              </button>
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
          className={`absolute top-[3.75rem] left-0 w-full h-screen bg-white shadow-md transition-max-height duration-500 ease overflow-hidden  ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="flex flex-col items-start p-4 mx-4 space-y-2 transform">
            {MENU_ITEMS.map((item, index) => (
              <span
                key={index}
                className="w-full px-4 py-2 text-sm font-bold text-left rounded cursor-pointer hover:bg-gray-100">
                {item}
              </span>
            ))}
            {ADDITIONAL_MENU_ITEMS.map((item, index) => (
              <span
                key={index}
                className="w-full px-4 py-2 text-sm font-bold text-left rounded cursor-pointer hover:bg-gray-100">
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
