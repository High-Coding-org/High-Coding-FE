import { PurchaseResponse } from '@/pages/Kit/KitOrderPage/type';
import { getUserToken } from '@/utils/getUserToken';

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
  const address = `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.CREATE}${
    couponPublishId ? `?couponPublishId=${couponPublishId}` : ''
  }`;
  const token = getUserToken();

  const res: PurchaseResponse = await axiosInstance.post(address, reqBody, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
