import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PurchaseResponse } from '@/pages/KitOrderPage/type';

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
  const address = `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.CREATE}${
    couponPublishId ? `?couponPublishId=${couponPublishId}` : ''
  }`;

  const res: PurchaseResponse = await axiosInstance.post(address, reqBody, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
