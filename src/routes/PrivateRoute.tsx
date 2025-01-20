import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

interface PrivateRouteProps {
  page: ReactElement;
}

export default function PrivateRoute({ page }: PrivateRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

    if (!token) {
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/');
    }
  }, [navigate]);

  return page;
}
