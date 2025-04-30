import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/path';
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
    retry: 3,
  });
};

export const useOrderPurchase = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postOrderPurchase,
    onSuccess: data => {
      navigate(`${PATH.PRODUCT}/${PATH.ORDER_COMPLETE}`, {
        state: {
          orderId: data.data,
        },
      });
    },
    onError: error => {
      console.error('useOrderPurchase 오류', error);
    },
    retry: 3,
  });
};
