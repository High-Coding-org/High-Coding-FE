import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axiosInstance';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { IProfileData } from '@/pages/ProfilePage/type';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

type ProfileResponse = AxiosResponse<IProfileData>;

export const getProfile = async () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
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
