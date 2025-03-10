import { useMutation } from '@tanstack/react-query';

import { OrderResponse } from '@/pages/KitOrderPage/type';
import { postOrderData } from '@/services/kitOrder/postOrderData';

export const useOrderData = () => {
  return useMutation({
    mutationFn: postOrderData,
    onSuccess: (data: OrderResponse) => {
      console.log(data.data);
      return data.data;
    },
    onError: error => {
      console.error('useOrderData 오류', error);
    },
  });
};

export const useOrderPurchase = () => {
  return useMutation({
    mutationFn: postOrderPurchase,
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
};
