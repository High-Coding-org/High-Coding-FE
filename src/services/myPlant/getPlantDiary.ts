import { PlantDiaryResponse } from '@/pages/Plant/PlantDiary/type';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getPlantDiary = async (id: number, date: string) => {
  const token = getUserToken();

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
