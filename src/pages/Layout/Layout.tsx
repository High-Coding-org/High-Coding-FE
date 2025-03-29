import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header/Header';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

interface LayoutProps {
  showHeader: boolean;
}

interface CheckTokenValidData {
  statusCode: number;
  message?: string;
  error?: string;
}

type CheckTokenValidResponse = AxiosResponse<CheckTokenValidData>;

export function Layout({ showHeader }: LayoutProps) {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  const checkTokenValid = async () => {
    const res: CheckTokenValidResponse = await axiosInstance.post(
      `${API_AUTHORITY.PUBLIC}${API_ENDPOINT.AUTH.VALIDATE}`,
      { token }
    );

    return res?.data.statusCode === 200;
  };

  const {
    mutate: mutateCheckTokenValid,
    data: isTokenValid,
    isSuccess,
  } = useMutation({
    mutationFn: checkTokenValid,
  });

  useEffect(() => {
    mutateCheckTokenValid();
  }, []);

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
