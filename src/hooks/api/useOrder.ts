import { useMutation } from '@tanstack/react-query';

export const useOrderData = () => {
  return useMutation({
    mutationFn: postOrderData,
    onSuccess: (data: OrderResponse) => {
      console.log(data.data);
    },
    onError: error => {
      console.log(error);
    },
  });
};
