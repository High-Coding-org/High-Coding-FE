import { useMutation } from '@tanstack/react-query';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { signIn } from '@/services/auth/signIn';
import signUp from '@/services/auth/signUp';

import { useLocalStorage } from '../useLocalStorage';

/**
 * 로그인 signIn API 통신 함수를 사용하는 useMutation를 반환하는 훅 입니다.
 * - 로그인 성공 시 액세스 토큰을 로컬 스토리지에 저장합니다.
 * - 저장 후 메인 페이지(홈)으로 direct합니다.
 * ! 경로 설정 후 '/home'을 상수화 해야 합니다.
 */

export const useSignIn = () => {
  // const navigate = useNavigate();
  const [, setAccessToken] = useLocalStorage(LOCAL_STORAGE_AUTH_TOKEN);

  return useMutation({
    mutationFn: signIn,
    onSuccess: data => {
      // data 타입이 unknown으로 추론되어 구조분해할당 시 타입 에러가 발생합니다
      // signIn 함수의 반환 타입을 명시적으로 지정해주어야 합니다
      // 현재는 AxiosResponse 타입의 data를 받아오고 있습니다
      // setAccessToken(data.data.accessToken);
      console.log('로그인 성공!');
      console.log(data);
      // navigate('/home');
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
        username: signUpResponse.id,
        password: signUpResponse.password,
      });
      // alert('회원가입에 성공했습니다.');
    },
  });
};
