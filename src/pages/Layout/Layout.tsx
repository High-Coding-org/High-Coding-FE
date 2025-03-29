import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header/Header';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { checkTokenValid } from '@/services/auth/tokenValid';

interface LayoutProps {
  showHeader: boolean;
}

export function Layout({ showHeader }: LayoutProps) {
  const {
    mutate: mutateCheckTokenValid,
    data: isTokenValid,
    isSuccess,
  } = useMutation({
    mutationFn: checkTokenValid,
  });

  useEffect(() => {
    mutateCheckTokenValid();
  }, [mutateCheckTokenValid]);

  useEffect(() => {
    if (isSuccess && !isTokenValid) {
      localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
    }
  }, [isTokenValid, isSuccess]);

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
