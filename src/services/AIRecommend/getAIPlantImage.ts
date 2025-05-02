import { imageApi } from '@/services/imageApi';

export const getAIPlantImage = async (plantName: string) => {
  try {
    const params = {
      query: plantName,
      per_page: 1,
      lang: 'ko',
    };

    const res = await imageApi.get('/search/photos', { params });

    return res?.data?.results?.[0];
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};
