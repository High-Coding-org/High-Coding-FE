import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const postOrderPurchase = async ({
  orderItems,
  receiverName,
  receiverPhone,
  deliveryAddress,
  orderNote,
  couponPublishId,
}) => {
  const reqBody = {
    orderItems,
    receiverName,
    receiverPhone,
    deliveryAddress,
    orderNote,
  };

  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  const res = await axiosInstance.post(
    `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.CREATE}?couponPublishId=${couponPublishId}`,
    reqBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};
