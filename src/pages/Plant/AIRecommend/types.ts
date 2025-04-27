export interface IEnvironmentData {
  temperature: number | null;
  humidity: number | null;
  soilMoisture: number | null;
}

export interface IRecommendData {
  temperature: number;
  humidity: number;
  soilMoisture: number;
  plantName: string;
}
