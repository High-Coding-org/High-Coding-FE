import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';
import { signIn } from '@/services/auth/signIn';
import signUp from '@/services/auth/signUp';
import { SignInSuccess } from '@/types/Login/signIn';

import { useLocalStorage } from '../useLocalStorage';

/**
 * 로그인 signIn API 통신 함수를 사용하는 useMutation를 반환하는 훅 입니다.
 * - 로그인 성공 시 액세스 토큰을 로컬 스토리지에 저장합니다.
 * - 저장 후 메인 페이지(홈)으로 direct합니다.
 */

export const useSignIn = () => {
  const navigate = useNavigate();
  const [, setAccessToken] = useLocalStorage(LOCAL_STORAGE_AUTH_TOKEN);

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data: SignInSuccess) => {
      setAccessToken(data.token);
      navigate(PATH.HOME);
    },
  });
};

/**
 * 회원가입 signUp API 함수를 사용하는 useMutation 커스텀 훅 입니다.
 * - 회원가입 성공 시 동시에 해당 인증 정보로 로그인도 진행합니다.
 * @returns 회원가입 성공 시 서버 내 유저 고유 id를 반환합니다.
 */

export const useSignUp = () => {
  const { mutate: signInMutate } = useSignIn();

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data, signUpResponse) => {
      if (data.statusCode === 400) return;

      signInMutate({
        username: signUpResponse.username,
        password: signUpResponse.password,
      });
      alert('회원가입에 성공했습니다.');
    },
  });
};
