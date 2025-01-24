import { KitResponse } from '@/types/KitDetail/kitDetail';

import { API_ENDPOINT } from '../apiEndpoint';
import { axiosInstance } from '../axiosInstance';

export const getKitDetail = async (id: number) => {
  try {
    const res: KitResponse = await axiosInstance.get(
      `${API_ENDPOINT.PRODUCT.KIT}/${id}`
    );

    return res.data || null;
  } catch (error) {
    // useGlobalErrorStore.getState().globalErrorOccur();
    throw new Error(`Error : ${error}`);
  }
};
