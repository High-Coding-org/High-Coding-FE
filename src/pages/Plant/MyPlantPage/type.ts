import { AxiosResponse } from 'axios';

import { IPlant } from '@/types/plantData';

export type PlantList = IPlant[];

export type AllPlantsResponse = AxiosResponse<PlantList>;
