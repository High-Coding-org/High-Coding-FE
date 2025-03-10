import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/services/profile/getProfile';

import { IProfile } from '../../pages/ProfilePage/type';

export const useProfile = () => {
  const token = localStorage.getItem('authToken');

  return useQuery<IProfile>({
    queryKey: ['profileData', token],
    queryFn: () => getProfile(token),
    retry: false,
  });
};
