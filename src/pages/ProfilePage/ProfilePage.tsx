import SideBar from '@/components/common/SideBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb';

const DUMMY_FORM_DATA = {
  name: '김가연',
  phone: '010-2381-1425',
  birth: '2003.10.27',
  id: 'pine',
  email: 'pine@naver.com',
};

const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
];

export default function ProfileEdit() {
  return (
    <>
      <header className="w-full max-w-[1140px] p-6 mt-2">
        <BreadcrumbAndTitle />
      </header>
      <main className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4">
        <div className="flex-1">
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">이름</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.name}</div>
          </div>
          <div className="flex flex-col  border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">전화번호</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.phone}</div>
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">생년월일</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.birth}</div>
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">이메일</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.birth}</div>
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">아이디</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.id}</div>
          </div>
        </div>
        <aside className="h-auto w-[12rem]">
          <SideBar menuItems={DUMMY_SIDEBAR_DATA} />
        </aside>
      </main>
    </>
  );
}
