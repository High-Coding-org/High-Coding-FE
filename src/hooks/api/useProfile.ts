import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/services/profile/getProfile';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

import { IProfileData } from '../../pages/ProfilePage/type';

export const useProfile = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  return useQuery<IProfileData>({
    queryKey: ['profileData', token],
    queryFn: () => getProfile(token),
    retry: false,
  });
};
