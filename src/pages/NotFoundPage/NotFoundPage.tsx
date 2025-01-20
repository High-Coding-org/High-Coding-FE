import { Frown } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center h-screen">
      <div className="text-center">
        <h1 className="flex items-center justify-center gap-4 text-4xl font-bold">
          <Frown className="w-24 h-24" />
          페이지가 존재하지 않습니다.
        </h1>

        <p className="my-4 text-base text-gray-500">
          찾으시는 페이지가 존재하지 않습니다.
          <br />
          올바른 주소를 입력해주시거나 홈으로 돌아가 주세요.
        </p>

        <button
          onClick={handleGoHome}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
