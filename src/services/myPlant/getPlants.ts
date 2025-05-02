import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PlantResponse } from '@/pages/Plant/MyPlantPage/type';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

export const getPlants = async () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  try {
    const res: PlantResponse = await axiosInstance.get(
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

//! 백엔드에서 단일 식물 조회 api 추가 시 이어서 작업
// export const getPlantById = async (id: string) => {
//   const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

//   try {
//     const res: PlantResponse = await axiosInstance.get(
//       `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.GET_LIST}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return res?.data;
//   } catch (error) {
//     throw new Error(`Error : ${error}`);
//   }
// };
