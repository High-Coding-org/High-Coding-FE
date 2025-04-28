/**
 * 식물 관련 API 호출 훅
 *
 * 식물 등록, 수정, 삭제 등의 작업을 수행하는 훅입니다.
 *
 */

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/path';
import { postPlantRegister } from '@/services/myPlant/createPlant';

export const usePlantRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postPlantRegister,
    onSuccess: () => {
      alert('식물 등록이 완료되었습니다.');
      navigate(`${PATH.PLANT}`);
    },
    onError: error => {
      console.error('useOrderPurchase 오류', error);
    },
  });
};
