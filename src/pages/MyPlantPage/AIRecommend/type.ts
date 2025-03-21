export interface IEnvironmentData {
  temperature: number | null;
  humidity: number | null;
  soilMoisture: number | null;
}

export interface IAIRecommendData {
  plantName: string;
  temperature: number;
  humidity: number;
  soilMoisture: number;
}
