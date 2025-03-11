export const ENVIRONMENT_FIELDS = [
  {
    label: '온도(°C)',
    id: 'temperature',
    step: 0.1,
  },
  {
    label: '습도(%)',
    id: 'humidity',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    label: '광량(lx)',
    id: 'light',
    min: 0,
    step: 1,
  },
  {
    label: '토양습도(%)',
    id: 'soilMoisture',
    min: 0,
    max: 100,
    step: 1,
  },
];
