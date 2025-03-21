import { useNavigate } from 'react-router';

export default function NoProfileData() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-2xl font-bold">회원 정보가 없습니다.</p>
      <button
        className="px-4 py-2 text-white rounded-md bg-primary"
        onClick={() => navigate('/')}>
        홈으로 돌아가기
      </button>
    </div>
  );
}
