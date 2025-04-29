import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';
import { UserInfoResponse } from '@/types/userInfo';
import { getUserToken } from '@/utils/getUserToken';

import { PATH } from './path';

interface PlantPrivateRouteProps {
  page: ReactElement;
}

export default function PlantPrivateRoute({ page }: PlantPrivateRouteProps) {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);

  const getUserRole = async (token: string) => {
    try {
      const res: UserInfoResponse = await axiosInstance.get(
        `${API_AUTHORITY.USER}${API_ENDPOINT.PROFILE}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res?.data?.userInfo?.role;
    } catch (e) {
      alert(`API 요청에 실패했습니다. ${e}`);
      navigate(PATH.HOME);
    }
  };

  useEffect(() => {
    const token = getUserToken();

    if (!token) {
      alert('로그인이 필요한 서비스 입니다.');
      navigate(PATH.SIGN);
      return;
    }

    getUserRole(token).then(role => {
      if (role === 'ROLE_PLANT' || role === 'ROLE_ADMIN') {
        setHasAccess(true);
      } else {
        alert('접근할 수 없는 페이지 입니다.');
        navigate(PATH.HOME);
      }
    });
  }, [navigate]);

  return hasAccess ? page : null;
}
