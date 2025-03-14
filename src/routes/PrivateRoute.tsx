import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getUserToken } from '@/utils/getUserToken';

import { PATH } from './path';

interface PrivateRouteProps {
  page: ReactElement;
}

export default function PrivateRoute({ page }: PrivateRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getUserToken();

    if (!token) {
      alert('로그인이 필요한 서비스 입니다.');
      navigate(PATH.SIGN);
    }
  }, [navigate]);

  return page;
}
