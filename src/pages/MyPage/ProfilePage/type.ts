export interface IUserInfo {
  birth: string;
  email: null | string;
  id: number;
  name: string;
  password: null | string;
  phoneNumber: string;
  role: string;
  username: string;
}

export interface IProfileData {
  error: boolean;
  message: string;
  statusCode: number;
  userInfo: IUserInfo;
}
