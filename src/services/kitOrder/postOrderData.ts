import { OrderResponse } from '@/pages/Kit/KitOrderPage/type';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const postOrderData = async data => {
  const reqBody = [
    {
      itemId: data[0].itemId,
      itemCount: data[0].itemCount,
    },
  ];

  const token = getUserToken();

  const res: OrderResponse = await axiosInstance.post(
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
