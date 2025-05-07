import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/path';

/**
 * AddPlantCard
 *
 * 사용자가 새로운 식물을 추가할 수 있는 UI 카드입니다.
 * 이 카드 클릭 시 식물 추가 동작을 수행합니다.
 */
export default function AddPlantCard() {
  const navigate = useNavigate();

  return (
    <div
      className="h-[200px] bg-gray-100 flex justify-center items-center border border-gray-300 rounded cursor-pointer"
      onClick={() => navigate(PATH.PLANT_REGISTER)}>
      <Plus />
    </div>
  );
}
