import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { changePassword } from '@/services/password/changePassword';
export const usePasswordChange = () => {
  const mutation = useMutation<
    string,
    Error,
    { currentPassword: string; newPassword: string }
  >({
    mutationFn: async ({ currentPassword, newPassword }) => {
      const token = localStorage.getItem('authToken');
      console.log(token);
      const response = await changePassword(token, {
        currentPassword,
        newPassword,
      });
      console.log(response);
      return response.data;
    },
    onSuccess: data => {
      toast.success(data);
    },
    onError: error => {
      toast.error('비밀번호 변경 실패:' + error.message);
    },
  });

  return mutation;
};
