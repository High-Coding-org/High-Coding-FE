import { AxiosResponse } from 'axios';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';
import { IProfileData } from '@/pages/ProfilePage/type';

type ProfileResponse = AxiosResponse<IProfileData>;

export const getProfile = async (token: string) => {
  try {
    const res: ProfileResponse = await axiosInstance.get(
      `${API_AUTHORITY.USER}${API_ENDPOINT.PROFILE}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res?.data;
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};
