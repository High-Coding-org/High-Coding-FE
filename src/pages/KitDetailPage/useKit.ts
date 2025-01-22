import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

import { IKit } from './type';

interface KitResponse {
  config: AxiosRequestConfig;
  data: IKit[];
  headers: AxiosRequestHeaders;
  request: AxiosRequestConfig;
  status: number;
  statusText: string;
}

const getKitDetail = async () => {
  try {
    const res: KitResponse = await axiosInstance.get(API_ENDPOINT.PRODUCT.KIT);

    // HiCoding은 현재 기획 상 하나의 키트만 판매하고 있기에
    // 다음과 같이 0번 인덱스를 반환
    return res.data[0];
  } catch (error) {
    throw new Error(
      `키트 정보를 불러오는데 실패했습니다. \n useKit.ts 26 line \n Error: ${error}`
    );
  }
};

export const useKit = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['kitData'],
    queryFn: () => getKitDetail(),
  });

  return { isLoading, data, error };
};
