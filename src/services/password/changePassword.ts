interface PasswordData {
  currentPassword: string;
  newPassword: string;
}
import axios from 'axios';

export const changePassword = async (
  token: string,
  passwordData: PasswordData
) => {
  const response = await axios.put(
    'https://leoan.p-e.kr/user/changePassword',
    passwordData,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
