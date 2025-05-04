import { AxiosResponse } from 'axios';

import { IPlant } from '@/types/plantData';

export type PlantResponse = AxiosResponse<Omit<IPlant, 'userId'>>;

export interface PlantInfo {
  name: string;
  percentage: number;
  totalGrowth: number;
  imageUrl: string;
}

export interface PlantDiary {
  content: string | null;
  date: string;
  growth: number | null;
  percentage: number;
  plantId: number;
  totalGrowth: number;
}

export type PlantDiaryResponse = AxiosResponse<PlantDiary>;
