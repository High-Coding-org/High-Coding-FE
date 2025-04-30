import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePlantDelete } from '@/hooks/api/usePlant';
import { PATH } from '@/routes/path';

export default function PlantDropdownMenu({ id }) {
  const navigate = useNavigate();

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
