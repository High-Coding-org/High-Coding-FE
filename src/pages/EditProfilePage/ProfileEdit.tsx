import React, { useState, ChangeEvent, FormEvent } from 'react';
import SideBar from '@/components/common/SideBar';
import FieldInput from '@/pages/EditProfilePage/FieldInput';
import AddressField from '@/pages/EditProfilePage/AddressField';
import {
  mockUserData,
  fields,
  menuItems,
} from '@/pages/EditProfilePage/UserData';
import { Button } from '@/components/ui/button';

// 사용자 데이터 타입 정의
interface UserData {
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string;
  birthday: string;
}

/**
 * ProfileEdit 컴포넌트.
 * 사용자 프로필 정보를 수정할 수 있는 화면을 제공합니다.
 * 사이드바, 입력 필드, 주소 검색 필드, 수정/저장 버튼으로 구성됩니다.
 */
export default function ProfileEdit() {
  const [userData, setUserData] = useState<UserData>({ ...mockUserData });
  const [isEditable, setIsEditable] = useState(false);

  // Input 값 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  // 회원정보 수정 핸들러
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Updated User Data:', userData);
  };

  return (
    <section>
      <h1 className="font-bold text-3xl mb-8">회원정보 수정</h1>
      <div className="flex justify-between">
        {/* 회원 정보 수정 섹션 */}
        <article>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-8 w-[50rem]">
            {fields.map(field =>
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
            <div className="col-span-2 flex gap-2">
              <Button
                type="button"
                onClick={() => setIsEditable(!isEditable)}
                className="bg-[#007AFD] hover:bg-[#0063CD]">
                {isEditable ? '수정 취소' : '수정하기'}
              </Button>
              {isEditable && (
                <Button
                  type="submit"
                  className="bg-[#007AFD] hover:bg-[#0063CD]">
                  저장하기
                </Button>
              )}
            </div>
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
