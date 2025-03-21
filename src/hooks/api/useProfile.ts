import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/services/profile/getProfile';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';

import { IProfileData } from '../../pages/ProfilePage/type';
import { PROFILE_DATA_KEY } from '@/constants/profileDataKey';

export const useProfile = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  return useQuery<IProfileData>({
    queryKey: [PROFILE_DATA_KEY, token],
    queryFn: () => getProfile(),
    retry: false,
  });
};
