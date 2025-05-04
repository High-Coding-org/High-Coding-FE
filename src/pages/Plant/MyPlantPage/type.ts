import { AxiosResponse } from 'axios';

export interface IPlant {
  id: number;
  userId: number;
  name: string;
  idealTemperature: number;
  idealHumidity: number;
  idealSolidMoisture: number;
  idealLightIntensity: number;
  growthTarget: number;
  totalGrowth: number;
  percentage: number;
  imageUrl: string;
}

export type PlantList = IPlant[];

export type PlantResponse = AxiosResponse<PlantList>;
