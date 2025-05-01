import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { CheckTokenValidResponse } from '@/types/auth/tokenValid';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const checkTokenValid = async () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

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
