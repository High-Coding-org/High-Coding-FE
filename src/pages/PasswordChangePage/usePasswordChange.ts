import { useMutation } from '@tanstack/react-query';
import { changePassword } from '@/services/password/changePassword';
export const usePasswordChange = () => {
  return useMutation<
    string,
    Error,
    { currentPassword: string; newPassword: string }
  >({
    mutationFn: async ({ currentPassword, newPassword }) => {
      const token = localStorage.getItem('authToken');
      const response = await changePassword(token, {
        currentPassword,
        newPassword,
      });

      return response.data.message;
    },
  });
};
