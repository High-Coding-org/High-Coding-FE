export interface IUserInfo {
  id: number;
  username: string;
  password: string;
  birth: string;
  name: string;
  phoneNumber: string;
  email: string;
}

export interface IProfile {
  statusCode: number;
  message: string;
  error: string;
  userInfo: IUserInfo;
}
