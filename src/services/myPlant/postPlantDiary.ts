import { AxiosResponse } from 'axios';

import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const postPlantDiary = async ({ id, growth, content, record }) => {
  const token = getUserToken();
  const body = { growth, content, record };

  const res: AxiosResponse<string> = await axiosInstance.post(
    `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.POST_PLANT_DIARY}/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res?.data;
};
