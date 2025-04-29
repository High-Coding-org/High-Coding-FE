/**
 * 식물 관련 API 호출 훅
 *
 * 식물 등록, 수정, 삭제 등의 작업을 수행하는 훅입니다.
 *
 */

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { PATH } from '@/routes/path';
import { postPlantRegister } from '@/services/myPlant/createPlant';
import { putPlantModify } from '@/services/myPlant/modifyPlant';

export const usePlantRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postPlantRegister,
    onSuccess: () => {
      alert('식물 등록이 완료되었습니다.');
      navigate(`${PATH.PLANT}`);
    },
    onError: () => {
      toast.error('식물 등록에 실패했습니다.');
    },
  });
};

export const usePlantModify = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: putPlantModify,
    onSuccess: () => {
      alert('식물 수정이 완료되었습니다.');
      navigate(`${PATH.PLANT}`);
    },
    onError: () => {
      toast.error('식물 수정에 실패했습니다.');
    },
  });
};
