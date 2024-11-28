import { ChevronsDown } from 'lucide-react';
import SideBar from '@/components/common/SideBar';
import Header from '@/components/common/Header';
import BottomNav from '@/components/common/BottomNavBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb/Breadcrumb';
const menuItems = [
  { name: '회원정보 수정', url: '/mypage/profile' },
  { name: '구매내역', url: '/mypage/purchasehistory' },
  { name: '탈퇴', url: '/withdrawal' },
];
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
//! sidebar 파일에서 width값을 설정하는 것으로 변경
//! 메뉴아이템 url 변경
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[calc(100vh-1rem)] mt-4 mx-4 pt-4 px-20 pb-[4rem] border border-gray-300">
      <ChevronsDown className="absolute left-1/2 transform -translate-x-1/2 top-[2rem]" />
      <Header />
      <div className="mb-8 mt-8">
        <BreadcrumbAndTitle />
      </div>
      <div className="flex justify-between">
        <div>{children}</div>
        <div className="w-[12rem]">
          <SideBar menuItems={menuItems} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
