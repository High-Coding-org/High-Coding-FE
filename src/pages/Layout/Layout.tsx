import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import Header from '@/components/common/Header/Header';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { checkTokenValid } from '@/services/auth/tokenValid';

interface LayoutProps {
  showHeader: boolean;
}

export function Layout({ showHeader }: LayoutProps) {
  const { mutate } = useMutation({
    mutationFn: checkTokenValid,

    onError: () => {
      toast.error(
        <div className="flex flex-col gap-2">
          <p>로그인 세션이 만료되었습니다.</p>
          <p>다시 로그인해주세요.</p>
        </div>
      );
      localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
    },
  });
  // [✨feat]: axiosInstance timout 시간 증가
  useEffect(() => {
    mutate();
  }, [mutate]);

  // useEffect(() => {
  //   if (isSuccess && !isTokenValid) {
  //     localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
  //   }
  // }, [isTokenValid, isSuccess]);

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
