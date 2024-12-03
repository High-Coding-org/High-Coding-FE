import { SignUpFormData } from '@/types/auth';

import { API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

const signUp = async ({
  name,
  id,
  password,
  phonePrefix,
  phoneNumber,
  birth,
}: SignUpFormData) => {
  const reqBody = {
    name,
    id,
    password,
    phone: `${phonePrefix}${phoneNumber}`,
    birth,
  };

  const res = await axiosInstance.post(`${API_ENDPOINT.AUTH.SIGNUP}`, reqBody);

  return res;
};

export default signUp;
