import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';
import { checkTokenValid } from '@/services/auth/tokenValid';

export const useCheckTokenValid = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: checkTokenValid,
    onError: () => {
      toast.error(`로그인 세션이 만료되었습니다. 다시 로그인해주세요.`);
      localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
      navigate(PATH.HOME);
    },
  });
};
