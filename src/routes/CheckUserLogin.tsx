import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

export const CheckUserLogin = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  return accessToken;
};
