import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { OrderListResponse } from '@/pages/MyPage/OrderList/type';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getOrderList = async () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  const res: OrderListResponse = await axiosInstance.get(
    `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.ORDER_LIST}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res?.data;
};
