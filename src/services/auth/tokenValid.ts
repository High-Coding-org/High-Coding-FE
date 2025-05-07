import { CheckTokenValidResponse } from '@/types/auth/tokenValid';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const checkTokenValid = async () => {
  const token = getUserToken();

  const res: CheckTokenValidResponse = await axiosInstance.post(
    `${API_AUTHORITY.PUBLIC}${API_ENDPOINT.AUTH.VALIDATE}`,
    { token }
  );

  if (res?.data.statusCode === 200) {
    return true;
  } else {
    throw new Error();
  }
};
