import { useNavigate } from 'react-router';

// import NoProfileData from '@/pages/ProfilePage/NoProfileData';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import SideBar from '@/components/common/SideBar/SideBar';
import Spinner from '@/components/common/Spinner/Spinner';
import { useProfile } from '@/hooks/api/useProfile';
import { useKitDetailErrorStore } from '@/store/kitDetailErrorStore';

import NoProfileData from './NoProfileData';
import ProfileList from './ProfileList';

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
          <SideBar />
        </aside>
      </div>
    </>
  );
}
