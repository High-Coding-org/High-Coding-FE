import { AxiosResponse } from 'axios';

export interface PlantModifyFormData {
  plantName: string;
  temperature: string | number;
  humidity: string | number;
  light: string | number;
  soilMoisture: string | number;
  goalGrowth: number | '';
  image: string;
}

export interface PlantModifyData {
  id: number;
  userId: number;
  name: string;
  idealTemperature: number;
  idealHumidity: number;
  idealSolidMoisture: number;
  idealLightIntensity: number;
  growthTarget: number;
  totalGrowth: number;
  imageUrl: string;
}

export type PlantModifyResponse = AxiosResponse<PlantModifyData>;
