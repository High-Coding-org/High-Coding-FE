import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PlantRegisterResponse } from '@/pages/Plant/PlantRegister/type';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

/**
 * 식물 등록 API
 *
 * 식물 등록 작업을 수행하는 API 함수입니다.
 */
export const postPlantRegister = async ({
  name,
  idealTemperature,
  idealHumidity,
  idealSolidMoisture,
  idealLightIntensity,
  growthTarget,
  imageFile,
}) => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  const formData = new FormData();
  formData.append('name', name);
  formData.append('idealTemperature', idealTemperature);
  formData.append('idealHumidity', idealHumidity);
  formData.append('idealSolidMoisture', idealSolidMoisture);
  formData.append('idealLightIntensity', idealLightIntensity);
  formData.append('growthTarget', growthTarget);
  formData.append('image', imageFile);

  const res: PlantRegisterResponse = await axiosInstance.post(
    `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.CREATE}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res?.data;
};
