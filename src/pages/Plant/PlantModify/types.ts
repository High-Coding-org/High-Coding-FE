export interface IPlantRegister {
  plantName: string;
  temperature: number | null;
  humidity: number | null;
  light: number | null;
  soilMoisture: number | null;
  goalGrowth: number | null;
  image: string | null;
}
