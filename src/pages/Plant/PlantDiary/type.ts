import { AxiosResponse } from 'axios';

import { IPlant } from '@/types/plantData';

export type PlantResponse = AxiosResponse<Omit<IPlant, 'userId'>>;

export interface PlantInfo {
  name: string;
  percentage: number;
  totalGrowth: number;
  imageUrl: string;
}
