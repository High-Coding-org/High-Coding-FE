import { AxiosResponse } from 'axios';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { IProfileData } from '@/pages/MyPage/ProfilePage/type';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

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
