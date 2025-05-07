import { AxiosResponse } from 'axios';

import { IProfileData } from '@/pages/MyPage/ProfilePage/type';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

type ProfileResponse = AxiosResponse<IProfileData>;

export const getProfile = async () => {
  const token = getUserToken();

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
