import { AxiosResponse } from 'axios';
import { IPasswordChangeResponse } from '@/pages/PasswordChangePage/type';
import { PasswordChangeData } from '@/types/PasswordChange/passwordChange';
import { axiosInstance } from '../axiosInstance';
import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';

type PasswordResponse = AxiosResponse<IPasswordChangeResponse>;

export const changePassword = async (
  token: string,
  passwordData: PasswordChangeData
) => {
  try {
    const response: PasswordResponse = await axiosInstance.put(
      `${API_AUTHORITY.USER}${API_ENDPOINT.PASSWORD}`,
      passwordData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};
