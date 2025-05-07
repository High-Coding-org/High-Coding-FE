import { OrderListResponse } from '@/pages/MyPage/OrderList/type';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getOrderList = async () => {
  const token = getUserToken();

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
