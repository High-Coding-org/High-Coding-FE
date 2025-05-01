import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

import ProfileItem from './ProfileItem';
import RegisterSN from './RegisterSN';
import { IUserInfo } from './type';

export default function ProfileList(userInfo: IUserInfo) {
  const checkSN =
    userInfo.role === 'ROLE_PLANT' || userInfo.role === 'ROLE_ADMIN';

  return (
    <>
      <ProfileItem
        label="이름"
        value={userInfo.name}
      />
      <ProfileItem
        label="전화번호"
        value={formatPhoneNumber(userInfo.phoneNumber)}
      />
      <ProfileItem
        label="생년월일"
        value={userInfo.birth}
      />
      <ProfileItem
        label="아이디"
        value={userInfo.username}
      />
      <RegisterSN checkSN={checkSN} />
    </>
  );
}
