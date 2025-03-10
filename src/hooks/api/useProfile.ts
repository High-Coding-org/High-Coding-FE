import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/services/profile/getProfile';

import { IProfile } from '../../pages/ProfilePage/type';

export const useProfile = () => {
  const token = localStorage.getItem('authToken');
  const { isLoading, data, error } = useQuery<IProfile>({
    queryKey: ['profileData', token],
    queryFn: async () => await getProfile(token),
    retry: false,
  });

  return { isLoading, data, error };
};
