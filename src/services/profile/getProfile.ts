import axios from 'axios';

export const getProfile = async (token: string) => {
  const response = await axios.get('https://leoan.p-e.kr/user/info', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
