import axios from 'axios';

import { CustomInstance } from '@/types/api';

const headers = {
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': '69420',
};

const axiosCustomConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers,
  withCredentials: true,
};

export const axiosInstance: CustomInstance = axios.create(axiosCustomConfig);
