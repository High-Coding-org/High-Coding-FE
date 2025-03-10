import { KitResponse } from '@/types/KitDetail/kitDetail';

import { API_AUTHORITY, API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getKitDetail = async (id: number) => {
  try {
    const res: KitResponse = await axiosInstance.get(
      `${API_AUTHORITY.PUBLIC}${API_ENDPOINT.PRODUCT.KIT}/${id}`
    );

    return res?.data;
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};
