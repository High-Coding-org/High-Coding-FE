import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// 사용자 데이터 타입 정의
interface UserData {
  nickname: string;
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
  phone: string;
  email: string;
  address: string;
  birthday: string;
}

// Mock 데이터 (백엔드에서 받은 값이라고 가정)
const mockUserData: UserData = {
  nickname: 'user123',
  name: 'John Doe',
  id: 'john123',
  password: 'password123',
  confirmPassword: 'password123',
  phone: '010-1234-5678',
  email: 'john@example.com',
  address: '123 Main St, Seoul',
  birthday: '1990-01-01',
};

// 입력 필드 데이터 타입 정의
interface Field {
  name: keyof UserData;
  label: string;
  placeholder: string;
  type?: string;
}

// 입력 필드 데이터
const fields: Field[] = [
  { name: 'nickname', label: '닉네임', placeholder: 'Enter your nickname' },
  { name: 'name', label: '이름', placeholder: 'Enter your name' },
  { name: 'id', label: '아이디', placeholder: 'Enter your ID' },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: 'Enter your password',
    type: 'password',
  },
  { name: 'phone', label: '전화번호', placeholder: 'Enter your phone number' },
  {
    name: 'confirmPassword',
    label: '비밀번호 확인',
    placeholder: 'Confirm your password',
    type: 'password',
  },
  { name: 'email', label: '이메일', placeholder: 'Enter your email' },
  { name: 'address', label: '주소', placeholder: 'Enter your address' },
  {
    name: 'birthday',
    label: '생일',
    placeholder: 'Enter your birthday',
    type: 'date',
  },
];

export default function ProfileEdit() {
  const [userData, setUserData] = useState<UserData>({
    nickname: '',
    name: '',
    id: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
    address: '',
    birthday: '',
  });

  const [isEditable, setIsEditable] = useState(false); // 수정 가능 여부 상태

  // useEffect로 mock 데이터 로드
  useEffect(() => {
    setUserData(mockUserData);
  }, []);

  // Input 값 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // 회원정보 수정 핸들러
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Updated User Data:', userData); // 여기서 백엔드로 전송
  };

  // 수정 버튼 클릭 핸들러
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="mt-8 mx-8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 w-[55rem]">
        {fields.map((field, index) => (
          <div
            key={index}
            className="grid w-[25rem] gap-1.5">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              name={field.name}
              value={userData[field.name]}
              onChange={handleChange}
              disabled={!isEditable}
              placeholder={field.placeholder}
              type={field.type || 'text'}
              className={`${!isEditable ? 'disabled' : ''}`}
            />
          </div>
        ))}
        {/* 수정 및 저장 버튼 */}
        <div className="col-span-2 flex gap-2">
          <Button
            type="button"
            onClick={handleEditClick}
            className="bg-[#007AFD] hover:bg-[#0063CD]">
            {isEditable ? '수정 취소' : '수정하기'}
          </Button>
          {isEditable && (
            <Button
              type="submit"
              onClick={handleEditClick}
              className=" bg-[#007AFD] hover:bg-[#0063CD]">
              저장하기
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
