import { ChevronsDown } from 'lucide-react';
import Header from '@/components/common/Header';
import BottomNavBar from '@/components/common/BottomNavBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb/Breadcrumb';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout 컴포넌트
 *
 * 기본 레이아웃을 렌더링합니다.
 *
 * @param {React.ReactNode} children - 페이지별로 다른 내용이 표시되는 영역입니다.
 * @returns {JSX.Element} 기본 레이아웃 구조를 렌더링하는 컴포넌트입니다.
 */
export default function Layout({ children }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleNavClick = (index: number) => {
    setIsCollapsed(false);
    const routes = ['/product', '/mykit', '/video', '/event'];
    navigate(routes[index]);
  };

  return (
    <div className="relative h-screen">
      <div
        className={`fixed top-0 left-0 w-[calc(100%_-_2rem)] h-[calc(100vh-1rem)] mt-4 mx-4 pt-4 pb-[4rem] border border-gray-300 rounded-xl overflow-scroll transition-transform duration-500 ease-in-out ${
          isCollapsed ? 'translate-y-[100%]' : 'translate-y-0'
        }`}>
        <div
          className="flex justify-center cursor-pointer"
          onClick={toggleCollapse}>
          <ChevronsDown className="text-gray-300 hover:text-black transition duration-300" />
        </div>

        <Header />

        <div className="px-[5rem]">
          <div className="my-8">
            <BreadcrumbAndTitle />
          </div>
          {children}
        </div>
      </div>
      <BottomNavBar onIconClick={handleNavClick} />
    </div>
  );
}
