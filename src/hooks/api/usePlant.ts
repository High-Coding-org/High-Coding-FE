import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import {
  MY_PLANT_DATA_QUERY_KEY,
  MY_PLANTS_QUERY_KEY,
  PLANT_DIARY_QUERY_KEY,
} from '@/constants/plantQueryKey';
// import { IPlant } from '@/pages/Plant/MyPlantPage/type';
import { PATH } from '@/routes/path';
import { postPlantRegister } from '@/services/myPlant/createPlant';
import { deletePlant } from '@/services/myPlant/deletePlant';
import { getPlantById } from '@/services/myPlant/getPlantById';
import { getPlantDiary } from '@/services/myPlant/getPlantDiary';
import { putPlantModify } from '@/services/myPlant/modifyPlant';
import { postPlantDiary } from '@/services/myPlant/postPlantDiary';
import { IPlant } from '@/types/plantData';

/**
 * 식물 관련 API 호출 훅
 *
 * 식물 등록, 수정, 삭제 등의 작업을 수행하는 훅입니다.
 *
 */

export const usePlantRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postPlantRegister,
    onSuccess: () => {
      navigate(`${PATH.PLANT}`);
      toast.success('식물 등록이 완료되었습니다.');
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
      navigate(`${PATH.PLANT}`);
      toast.success('식물 수정이 완료되었습니다.');
    },
    onError: () => {
      toast.error('식물 수정에 실패했습니다.');
    },
  });
};

export const usePlantDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePlant,
    onSuccess: deletedId => {
      queryClient.setQueryData(
        [MY_PLANTS_QUERY_KEY],
        (oldData: IPlant[] | undefined) => {
          if (!oldData) return [];

          return oldData.filter(plant => plant.id !== deletedId);
        }
      );

      toast.info('선택한 식물 삭제에 성공하였습니다.');
    },
    onError: () => {
      toast.error('식물 삭제에 실패하였습니다.');
    },
  });
};

export const usePlantById = (id: number) => {
  return useQuery({
    queryKey: [MY_PLANT_DATA_QUERY_KEY, id],
    queryFn: () => getPlantById(id),
  });
};

export const usePlantDiary = (id: number, date: string) => {
  return useQuery({
    queryKey: [PLANT_DIARY_QUERY_KEY, id, date],
    queryFn: () => getPlantDiary(id, date),
  });
};

export const usePostPlantDiary = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postPlantDiary,
    onSuccess: (message: string) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: [PLANT_DIARY_QUERY_KEY],
      });
    },
    onError: () => {
      toast.error('저장에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
