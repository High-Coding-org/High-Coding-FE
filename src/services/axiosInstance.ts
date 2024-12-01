import axios from 'axios';

import { CustomInstance } from '@/types/api';

const headers = {
  'Content-Type': 'application/json',
};

/**
    const response = await fetch(
      "url",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
 */

const axiosCustomConfig = {
  baseURL: import.meta.env.LOCAL_API_URL,
  timeout: 10000, // axios 통신 최대 대기 시간
  headers,
};

export const axiosInstance: CustomInstance = axios.create(axiosCustomConfig);
