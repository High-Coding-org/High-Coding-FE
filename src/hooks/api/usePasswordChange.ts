import { useMutation } from '@tanstack/react-query';
import { changePassword } from '@/services/passwordChange/changePassword';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

export const usePasswordChange = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  return useMutation<
    string,
    Error,
    { currentPassword: string; newPassword: string }
  >({
    mutationFn: async ({ currentPassword, newPassword }) => {
      const response = await changePassword(token, {
        currentPassword,
        newPassword,
      });

      return response.data.message;
    },
  });
};
