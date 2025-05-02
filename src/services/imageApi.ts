import axios from 'axios';

const imageApiConfig = {
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
};

export const imageApi = axios.create(imageApiConfig);
