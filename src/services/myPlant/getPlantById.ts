import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PlantResponse } from '@/pages/Plant/MyPlantPage/type';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getPlantById = async (id: number) => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  try {
    const res: PlantResponse = await axiosInstance.get(
      `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.GET_PLANT}/${id}`,
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
