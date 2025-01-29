import { useQuery } from '@tanstack/react-query';

import { getKitDetail } from '@/services/kitDetail/getKitDetail';

export const useKit = (id: number) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['kitData', id],
    queryFn: () => getKitDetail(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, data, error };
};
