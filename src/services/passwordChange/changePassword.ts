import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axiosInstance';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { IPasswordChangeResponse } from '@/pages/PasswordChangePage/type';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

type PasswordResponse = AxiosResponse<IPasswordChangeResponse>;

export const changePassword = async data => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

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
