import { AllPlantsResponse } from '@/pages/Plant/MyPlantPage/type';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';
import { getUserToken } from '@/utils/getUserToken';

export const getPlants = async () => {
  const token = getUserToken();

  try {
    const res: AllPlantsResponse = await axiosInstance.get(
      `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.GET_LIST}`,
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
