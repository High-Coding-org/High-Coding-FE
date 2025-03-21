import { AxiosResponse } from 'axios';

export interface SignInSuccess {
  expirationTime: string;
  message: string;
  refreshToken: string;
  statusCode: number;
  token: string;
}

export type SignInResponse = AxiosResponse<SignInSuccess>;
