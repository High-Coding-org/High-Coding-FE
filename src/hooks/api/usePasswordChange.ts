import { useMutation } from '@tanstack/react-query';
import { changePassword } from '@/services/passwordChange/changePassword';

export const usePasswordChange = () => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
};
