import { AxiosResponse } from 'axios';

export interface UserInfo {
  username: string;
  password: string;
  birth: string;
  name: string;
  phoneNumber: string;
}

interface IUserInfoData {
  email: null | string;
  id: number;
  name: string;
  password: null | string;
  phoneNumber: string;
  role: string;
  username: string;
}

export interface UserInfoData {
  error: null | string;
  message: string;
  statusCode: number;
  userInfo: IUserInfoData;
}

export type UserInfoResponse = AxiosResponse<UserInfoData>;
