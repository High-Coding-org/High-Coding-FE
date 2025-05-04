import { AxiosResponse } from 'axios';

import { IPlant } from '@/types/plantData';

export type PlantResponse = AxiosResponse<Omit<IPlant, 'userId'>>;
