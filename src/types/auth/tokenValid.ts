import { AxiosResponse } from 'axios';

interface CheckTokenValidData {
  statusCode: number;
  message?: string;
  error?: string;
}

export type CheckTokenValidResponse = AxiosResponse<CheckTokenValidData>;
