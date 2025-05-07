import { PlantResponse } from '@/pages/Plant/PlantDiary/type';
import { getUserToken } from '@/utils/getUserToken';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getPlantById = async (id: number) => {
  const token = getUserToken();

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
