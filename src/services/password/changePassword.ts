interface PasswordData {
  currentPassword: string;
  newPassword: string;
}
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { IPasswordChangeData } from '@/pages/PasswordChangePage/type';
import { axiosInstance } from '../axiosInstance';
import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';

type PasswordResponse = AxiosResponse<IPasswordChangeData>;

export const changePassword = async (
  token: string,
  passwordData: PasswordData
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
