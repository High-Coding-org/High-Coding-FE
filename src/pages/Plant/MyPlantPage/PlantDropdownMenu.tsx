import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MY_PLANT_QUERY_KEY } from '@/constants/plantQueryKey';
import { PATH } from '@/routes/path';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';
import { getUserToken } from '@/utils/getUserToken';

import { IPlant } from './type';

export default function PlantDropdownMenu({ id }) {
  const navigate = useNavigate();

  const deletePlant = async (id: number) => {
    const token = getUserToken();

    await axiosInstance.delete(
      `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.DELETE}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return id;
  };

  const usePlantDelete = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: deletePlant,
      onSuccess: deletedId => {
        queryClient.setQueryData(
          [MY_PLANT_QUERY_KEY],
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

  const { mutate: mutateDeletePlant } = usePlantDelete();

  const onModifyPlant = () => {
    navigate(`${PATH.PLANT_MODIFY}/${id}`);
  };

  const onDeletePlant = () => {
    const checkDelete = confirm('정말 삭제하시겠습니까?');
    if (!checkDelete) return;

    mutateDeletePlant(id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="w-[1.25rem] h-[1.25rem] cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onModifyPlant}>수정</DropdownMenuItem>
        <DropdownMenuItem onClick={onDeletePlant}>삭제</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
