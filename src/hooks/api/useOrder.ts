import { useMutation } from '@tanstack/react-query';

import { postOrderData } from '@/services/kitOrder/postOrderData';
import { postOrderPurchase } from '@/services/kitOrder/postOrderPurchase';

export const useOrderData = () => {
  return useMutation({
    mutationFn: postOrderData,
    onSuccess: data => {
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
      return data;
    },
    onError: error => {
      console.error('useOrderPurchase 오류', error);
    },
  });
};
