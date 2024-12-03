import { SignInFormData } from '@/types/auth';

import { API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const signIn = async ({ id, password }: SignInFormData) => {
  const reqBody = {
    id,
    password,
  };

  const res = await axiosInstance.post(`${API_ENDPOINT.AUTH.SIGNIN}`, reqBody);

  return res;
};
