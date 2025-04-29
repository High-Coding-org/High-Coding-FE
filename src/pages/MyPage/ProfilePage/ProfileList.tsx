import { Button } from '@/components/ui/button';
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
      {/* //Todo: registerSN 이라는 컴포넌트로 분리하기 */}
      <div className="flex flex-col py-2 border-b border-gray-200 md:flex-row md:items-center">
        <span className="w-32 p-2 text-sm text-gray-600">SN 등록 여부</span>
        <div className="flex-1 p-2">
          <Button>등록하기</Button>
        </div>
      </div>
    </>
  );
}
