export interface IPlantData {
  plantName: string;
  temperature: number | null;
  humidity: number | null;
  light: number | null;
  soilMoisture: number | null;
  goalGrowth: number | null;
  image: string | null;
}
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
