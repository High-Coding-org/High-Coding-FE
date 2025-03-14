import { SignUpFormData } from '@/types/auth';
import { SignUpResponse } from '@/types/Login/signUp';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
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
    username: id,
    password,
    birth,
    name,
    phoneNumber: `${phonePrefix}${phoneNumber}`,
  };

  const res: SignUpResponse = await axiosInstance.post(
    `${API_AUTHORITY.PUBLIC}${API_ENDPOINT.AUTH.SIGNUP}`,
    reqBody
  );

  return res.data;
};

export default signUp;
