import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PlantDiaryResponse } from '@/pages/Plant/PlantDiary/type';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getPlantDiary = async (id: number, date: string) => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  try {
    const res: PlantDiaryResponse = await axiosInstance.get(
      `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.GET_PLANT_DIARY}/${id}?date=${date}`,
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
