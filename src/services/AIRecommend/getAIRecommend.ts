import { AxiosResponse } from 'axios';
import axios from 'axios';

import { IRecommendData } from '@/pages/Plant/AIRecommend/types';

type AIRecommendResponse = AxiosResponse<IRecommendData>;

export const getAIRecommend = async environmentData => {
  try {
    const params = {
      temperature: environmentData.temperature,
      humidity: environmentData.humidity,
      soilMoisture: environmentData.soilMoisture,
    };

    const res: AIRecommendResponse = await axios.get(`/ai/`, { params });

    return res?.data;
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};
