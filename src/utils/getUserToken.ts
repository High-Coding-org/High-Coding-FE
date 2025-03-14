import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

export const getUserToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  if (!token) return null;

  return token;
};
