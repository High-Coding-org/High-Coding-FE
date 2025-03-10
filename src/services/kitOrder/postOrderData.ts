import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const postOrderData = async data => {
  const reqBody = [
    {
      itemId: data[0].itemId,
      itemCount: data[0].itemCount,
    },
  ];

  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  const res = await axiosInstance.post(
    `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.LOOK_UP}`,
    reqBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};
