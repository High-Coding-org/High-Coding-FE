import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

import ProfileItem from './ProfileItem';
import { IUserInfo } from './type';

export default function ProfileList(userInfo: IUserInfo) {
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
    </>
  );
}
