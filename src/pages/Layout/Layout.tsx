import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header/Header';
import { useCheckTokenValid } from '@/hooks/api/useTokenValidate';
import { getUserToken } from '@/utils/getUserToken';

interface LayoutProps {
  showHeader: boolean;
}

export function Layout({ showHeader }: LayoutProps) {
  const { mutate } = useCheckTokenValid();

  useEffect(() => {
    const token = getUserToken();
    if (!token) return;

    mutate();
  }, [mutate]);

  return (
    <div
      className={`relative flex flex-col items-center w-screen max-w-full min-h-screen ${
        !showHeader && 'justify-center'
      }`}>
      {showHeader && <Header />}
      <Outlet />
    </div>
  );
}
