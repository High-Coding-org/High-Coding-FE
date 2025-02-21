import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/services/profile/getProfile';

export const useProfile = () => {
  const token = localStorage.getItem('authToken');
  const { isLoading, data, error } = useQuery({
    queryKey: ['profileData', token],
    queryFn: async () => await getProfile(token),
    retry: false,
  });

  return { isLoading, data, error };
};
