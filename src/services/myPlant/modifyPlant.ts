import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PlantModifyResponse } from '@/pages/Plant/PlantModify/type';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

/**
 * 식물 등록 API
 *
 * 식물 수정 작업을 수행하는 API 함수입니다.
 */
export const putPlantModify = async ({
  id,
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

  const res: PlantModifyResponse = await axiosInstance.put(
    `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.UPDATE}/${id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(res?.data);
  return res?.data;
};
