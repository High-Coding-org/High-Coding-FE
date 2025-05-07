import { AxiosResponse } from 'axios';

import { IPasswordChangeResponse } from '@/pages/MyPage/PasswordChangePage/type';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

type PasswordResponse = AxiosResponse<IPasswordChangeResponse>;

export const changePassword = async data => {
  const token = getUserToken();

  const response: PasswordResponse = await axiosInstance.put(
    `${API_AUTHORITY.USER}${API_ENDPOINT.PASSWORD}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
