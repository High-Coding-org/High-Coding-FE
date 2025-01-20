import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header';

interface LayoutProps {
  showHeader: boolean;
}

export function Layout({ showHeader }: LayoutProps) {
  return (
    <div
      className={`relative flex flex-col items-center w-screen h-screen max-w-full ${
        !showHeader && 'justify-center'
      }`}>
      {showHeader && <Header />}
      <Outlet />
    </div>
  );
}
