export const INPUT_FIELDS = [
  { id: 'plantName', label: '품종명', type: 'text', required: true },
  {
    id: 'temperature',
    label: '온도(°C)',
    type: 'number',
    step: 0.1,
    required: true,
  },
  {
    id: 'humidity',
    label: '습도(%)',
    type: 'number',
    min: 0,
    max: 100,
    required: true,
  },
  { id: 'light', label: '광량(lux)', type: 'number', min: 0, required: true },
  {
    id: 'soilMoisture',
    label: '토양습도(%)',
    type: 'number',
    min: 0,
    max: 100,
    required: true,
  },
];
