import { useQuery } from '@tanstack/react-query';

import { PROFILE_DATA_KEY } from '@/constants/profileDataKey';
import { IProfileData } from '@/pages/MyPage/ProfilePage/type';
import { getProfile } from '@/services/profile/getProfile';
import { getUserToken } from '@/utils/getUserToken';

export const useProfile = () => {
  const token = getUserToken();

  return useQuery<IProfileData>({
    queryKey: [PROFILE_DATA_KEY, token],
    queryFn: () => getProfile(),
    retry: false,
  });
};
