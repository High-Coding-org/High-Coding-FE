export interface PlantModifyFormData {
  plantName: string;
  temperature: string | number;
  humidity: string | number;
  light: string | number;
  soilMoisture: string | number;
  goalGrowth: number | '';
  image: string;
}
