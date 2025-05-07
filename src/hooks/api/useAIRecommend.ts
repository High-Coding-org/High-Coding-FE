import { useQuery } from '@tanstack/react-query';

import { getAIRecommend } from '@/services/AIRecommend/getAIRecommend';
export const useAIRecommend = environmentData => {
  return useQuery({
    queryKey: ['aiRecommend', environmentData],
    queryFn: () => getAIRecommend(environmentData),
    retry: false,
    enabled: false,
  });
};
