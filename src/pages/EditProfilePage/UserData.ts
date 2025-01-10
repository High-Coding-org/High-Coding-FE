// constants/userData.ts
export const mockUserData = {
  name: '김가연',
  id: 'kimgayeon',
  password: 'pine4679',
  confirmPassword: 'pine4679',
  email: 'gayeon.kim@example.com',
  address: '서울특별시 강남구',
  birthday: '1999-12-25',
};

export const fields = [
  { name: 'name', label: '이름', type: 'text' },
  { name: 'id', label: '아이디', type: 'text' },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력해주세요',
    type: 'password',
  },
  { name: 'email', label: '이메일', type: 'email' },
  {
    name: 'address',
    label: '주소',
    placeholder: '주소를 입력해주세요',
    type: 'text',
  },
  { name: 'birthday', label: '생년월일', type: 'date' },
];

export const menuItems = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
];
