export interface PlantRegisterFormData {
  plantName: string;
  temperature: string | number;
  humidity: string | number;
  light: string | number;
  soilMoisture: string | number;
  goalGrowth: number | '';
  image: string;
}
