import { AxiosResponse } from 'axios';

export interface PlantRegisterFormData {
  plantName: string;
  temperature: string | number;
  humidity: string | number;
  light: string | number;
  soilMoisture: string | number;
  goalGrowth: number | '';
  image: string;
}

export interface PlantRegisterData {
  growthTarget: number;
  id: number;
  idealHumidity: number;
  idealLightIntensity: number;
  idealSolidMoisture: number;
  idealTemperature: number;
  imageUrl: string | null;
  name: string;
  totalGrowth: number;
  userId: number;
}

export type PlantRegisterResponse = AxiosResponse<PlantRegisterData>;
