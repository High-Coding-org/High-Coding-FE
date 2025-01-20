import React, { useState, ChangeEvent, FormEvent } from 'react';
import SideBar from '@/components/common/SideBar';
import FieldInput from '@/pages/EditProfilePage/FieldInput';
import AddressField from '@/pages/EditProfilePage/AddressField';
import { FIELDS } from '@/pages/EditProfilePage/profileFormFields';
import { Button } from '@/components/ui/button';
//import BreadcrumbAndTitle from '@/components/common/Breadcrumb/Breadcrumb';
interface UserData {
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string;
  birthday: string;
}

interface MenuItem {
  name: string;
  url: string;
}

interface ProfileEditProps {
  mockUserData: UserData;
  menuItems: MenuItem[];
}

/**
 * ProfileEdit 컴포넌트.
 * 사용자 프로필 정보를 수정할 수 있는 화면을 제공합니다.
 * 사이드바, 입력 필드, 주소 검색 필드, 수정/저장 버튼으로 구성됩니다.
 */
export default function ProfileEdit({
  mockUserData,
  menuItems,
}: ProfileEditProps) {
  const [userData, setUserData] = useState<UserData>({ ...mockUserData });
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  function handleCancel() {
    setUserData({ ...mockUserData });
    setIsEditable(false);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Updated User Data:', userData);
  };

  return (
    <section className="w-full">
      {/* BreadcrumbAndTitle 컴포넌트 추가 */}
      {/*<BreadcrumbAndTitle />*/}

      <div className="flex justify-between">
        {/* 회원 정보 수정 섹션 */}
        <article className="mr-8 md:mr-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 w-full  md:grid-cols-2 gap-8 md:w-full">
            {FIELDS.map(field =>
              field.name === 'address' ? (
                <AddressField
                  key={field.name}
                  field={field}
                  value={userData.address}
                  disabled={!isEditable}
                  onChange={handleChange}
                  onAddressSelect={(newAddress: string) =>
                    setUserData(prev => ({ ...prev, address: newAddress }))
                  }
                />
              ) : (
                <FieldInput
                  key={field.name}
                  field={field}
                  value={userData[field.name]}
                  disabled={
                    !isEditable ||
                    !['password', 'confirmPassword'].includes(field.name)
                  }
                  onChange={handleChange}
                />
              )
            )}
            {/* 버튼 */}
            {!isEditable && (
              <div className="md:col-span-2">
                <Button
                  type="button"
                  onClick={() => setIsEditable(!isEditable)}
                  className="bg-[#007AFD] hover:bg-[#0063CD]">
                  수정하기
                </Button>
              </div>
            )}
            {isEditable && (
              <div className="flex gap-2 md:col-span-2">
                <Button
                  type="button"
                  onClick={handleCancel}
                  className="bg-[#007AFD] hover:bg-[#0063CD]">
                  수정 취소
                </Button>
                <Button
                  type="submit"
                  onClick={() => setIsEditable(!isEditable)}
                  className="bg-[#007AFD] hover:bg-[#0063CD]">
                  저장하기
                </Button>
              </div>
            )}
          </form>
        </article>

        {/* 사이드바 섹션 */}
        <aside className="h-auto w-[12rem]">
          <SideBar menuItems={menuItems} />
        </aside>
      </div>
    </section>
  );
}
