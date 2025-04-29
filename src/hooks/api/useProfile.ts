import { useQuery } from '@tanstack/react-query';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PROFILE_DATA_KEY } from '@/constants/profileDataKey';
import { IProfileData } from '@/pages/MyPage/ProfilePage/type';
import { getProfile } from '@/services/profile/getProfile';

export const useProfile = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  return useQuery<IProfileData>({
    queryKey: [PROFILE_DATA_KEY, token],
    queryFn: () => getProfile(),
    retry: false,
  });
};
