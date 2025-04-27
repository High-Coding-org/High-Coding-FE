interface InputField {
  id: string;
  label: string;
  type: 'text' | 'number';
  step?: number;
  min: number;
  max: number;
  required?: boolean;
}

export const INPUT_FIELDS: InputField[] = [
  {
    id: 'plantName',
    label: '품종명',
    type: 'text',
    required: true,
    min: 0,
    max: 0,
  },
  {
    id: 'temperature',
    label: '온도(°C)',
    type: 'number',
    step: 0.1,
    required: true,
    min: -50,
    max: 50,
  },
  {
    id: 'humidity',
    label: '습도(%)',
    type: 'number',
    min: 0,
    max: 100,
    required: true,
  },
  {
    id: 'light',
    label: '광량(lux)',
    type: 'number',
    min: 0,
    max: 100000,
    required: true,
  },
  {
    id: 'soilMoisture',
    label: '토양습도(%)',
    type: 'number',
    min: 0,
    max: 100,
    required: true,
  },
];
