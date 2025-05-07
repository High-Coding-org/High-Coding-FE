import { useQuery } from '@tanstack/react-query';

import { getAIPlantImage } from '@/services/AIRecommend/getAIPlantImage';
export const useAIPlantImage = (plantName: string) => {
  return useQuery({
    queryKey: ['plantImage', plantName],
    queryFn: () => getAIPlantImage(plantName),
  });
};
