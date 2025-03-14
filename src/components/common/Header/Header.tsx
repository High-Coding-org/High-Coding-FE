import {
  CircleHelp,
  CircleUserRound,
  LogIn,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import {
  ADDITIONAL_MENU_ITEMS,
  MENU_ITEMS,
  NAME_TO_PATH,
} from '@/constants/header';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { PATH } from '@/routes/path';

import Logo from '../Logo/Logo';

/**
 * Header 컴포넌트.
 * 상단 네비게이션 바를 렌더링하며, 로고와 텍스트 메뉴를 포함 합니다.
 * 텍스트: (키트 정보, 나의 식물, 식물 지식백과, AI 식물 추천)
 * 아이콘: (고객 센터, 내 정보, 로그인/로그아웃)
 */

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [authToken, setAuthToken] = useLocalStorage(LOCAL_STORAGE_AUTH_TOKEN);
  const isLoggedIn = !!authToken;

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  };

  const handleMenuClick = (item: string) => {
    if (item === ADDITIONAL_MENU_ITEMS[2]) {
      if (isLoggedIn) {
        const checkLogOut = confirm('로그아웃 하시겠습니까?');

        if (!checkLogOut) return;

        setAuthToken('');
        alert('로그아웃 되었습니다.');
        navigate(PATH.HOME);
      } else {
        navigate(PATH.SIGN);
      }
      setIsMenuOpen(false);

      return;
    }

    navigate(NAME_TO_PATH[item]);
    setIsMenuOpen(false);
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
                onClick={() => handleMenuClick(item)}
                className="hidden px-4 py-2 text-sm font-bold rounded cursor-pointer md:block hover:bg-gray-100">
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <CircleHelp
            onClick={() => handleMenuClick('고객 센터')}
            className="hidden md:block w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
          />
          <CircleUserRound
            onClick={() => handleMenuClick('내 정보')}
            className="hidden md:block w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
          />
          {isLoggedIn ? (
            <LogOut
              onClick={() => handleMenuClick('로그인/로그아웃')}
              className="hidden md:block w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
            />
          ) : (
            <LogIn
              onClick={() => handleMenuClick('로그인/로그아웃')}
              className="hidden md:block w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-gray-500 transition duration-300"
            />
          )}
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
            {[...MENU_ITEMS, ...ADDITIONAL_MENU_ITEMS].map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleMenuClick(item)}
                className="w-full px-4 py-2 text-sm font-bold text-left rounded cursor-pointer hover:bg-gray-100">
                {item === '로그인/로그아웃'
                  ? isLoggedIn
                    ? '로그아웃'
                    : '로그인'
                  : item}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
