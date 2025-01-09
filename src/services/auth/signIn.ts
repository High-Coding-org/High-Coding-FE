import { SignInFormData } from '@/types/auth';

import { API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

// ! 스웨거 속성 값 변경 시 username -> id로 변경해야 할 수 있음.
export const signIn = async ({ username, password }: SignInFormData) => {
  const reqBody = {
    username,
    password,
  };

  const res = await axiosInstance.post(API_ENDPOINT.AUTH.SIGNIN, reqBody);

  return res;
};
