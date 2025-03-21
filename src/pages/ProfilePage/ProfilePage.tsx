import { useProfile } from '@/hooks/api/useProfile';
import { useNavigate } from 'react-router';
import { useKitDetailErrorStore } from '@/store/kitDetailErrorStore';

import ProfileList from './ProfileList';
import Spinner from '@/components/common/Spinner/Spinner';
import NoProfileData from '@/pages/ProfilePage/NoProfileData';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import SideBar from '@/components/common/SideBar';

//! DUMMY DATA
const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
];

export default function ProfilePage() {
  const { isLoading, data, isError } = useProfile();
  const navigate = useNavigate();
  const { kitDetailErrorOccur, setErrorMsg } = useKitDetailErrorStore();

  if (isError) {
    kitDetailErrorOccur();
    setErrorMsg('정보를 불러오는데 실패했습니다.');

    navigate('/');
  }

  if (isLoading) return <Spinner />;
  if (!data.userInfo) return <NoProfileData />;

  return (
    <>
      <header className="w-full max-w-[1140px] p-6 mt-2">
        <BreadcrumbAndTitle />
      </header>
      <div className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4">
        <main className="flex-1">
          <ProfileList {...data.userInfo} />
        </main>
        <aside className="h-auto w-[12rem] whitespace-nowrap">
          <SideBar menuItems={DUMMY_SIDEBAR_DATA} />
        </aside>
      </div>
    </>
  );
}
