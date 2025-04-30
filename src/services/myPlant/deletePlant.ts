import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const deletePlant = async (id: number) => {
  const token = getUserToken();

  await axiosInstance.delete(
    `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.DELETE}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return id;
};
