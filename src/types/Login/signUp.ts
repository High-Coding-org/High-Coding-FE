import { AxiosResponse } from 'axios';

interface SignUpResponseSuccess {
  statusCode: number;
  message: string;
}

interface SignUpResponseError {
  statusCode: number;
  error: string;
}

export type SignUpResponse = AxiosResponse<
  SignUpResponseSuccess | SignUpResponseError
>;
