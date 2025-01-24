import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { IKit } from '@/pages/KitDetailPage/type';

export interface KitResponse {
  config: AxiosRequestConfig;
  data: IKit;
  headers: AxiosRequestHeaders;
  request: AxiosRequestConfig;
  status: number;
  statusText: string;
}
