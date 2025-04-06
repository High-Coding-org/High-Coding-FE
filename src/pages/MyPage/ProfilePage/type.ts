export interface IUserInfo {
  birth: string;
  id: number;
  name: string;
  password: string;
  phoneNumber: string;
  username: string;
}

export interface IProfileData {
  error: boolean;
  message: string;
  statusCode: number;
  userInfo: IUserInfo;
}
