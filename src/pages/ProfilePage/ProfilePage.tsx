import SideBar from '@/components/common/SideBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb';
import NoProfileData from '@/pages/ProfilePage/NoProfileData';
import { useProfile } from './useProfile';
import Spinner from '@/components/common/Spinner/Spinner';
import { useNavigate } from 'react-router';
import { ProfileField } from './Profilefield';
import { useKitDetailErrorStore } from '@/store/kitDetailErrorStore';

const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
];

const ProfileFields = ({ userInfo }) => (
  <div className="flex-1">
    <ProfileField
      label="이름"
      value={userInfo?.name}
    />
    <ProfileField
      label="전화번호"
      value={userInfo?.phoneNumber}
    />
    <ProfileField
      label="생년월일"
      value={userInfo?.birth}
    />
    <ProfileField
      label="이메일"
      value={userInfo?.email}
    />
    <ProfileField
      label="아이디"
      value={userInfo?.username}
    />
  </div>
);

export default function ProfilePage() {
  const { isLoading, data, error } = useProfile();
  const navigate = useNavigate();
  const { kitDetailErrorOccur, setErrorMsg } = useKitDetailErrorStore();

  if (error) {
    kitDetailErrorOccur();
    setErrorMsg('정보를 불러오는데 실패했습니다.');

    navigate('/');
  }

  if (isLoading) return <Spinner />;
  if (!data) return <NoProfileData />;

  return (
    <>
      <header className="w-full max-w-[1140px] p-6 mt-2">
        <BreadcrumbAndTitle />
      </header>
      <main className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4">
        <ProfileFields userInfo={data?.userInfo} />
        <aside className="h-auto w-[12rem] whitespace-nowrap">
          <SideBar menuItems={DUMMY_SIDEBAR_DATA} />
        </aside>
      </main>
    </>
  );
}
