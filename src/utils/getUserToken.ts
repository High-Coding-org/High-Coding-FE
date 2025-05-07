import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

import { tokenCrypto } from './tokenCrypto';

export const getUserToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  if (!token) return null;

  const decryptedToken = tokenCrypto.decrypt(token);

  return decryptedToken;
};
