import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PATH } from '@/routes/path';

export default function PlantDropdownMenu({ id }) {
  const navigate = useNavigate();

  const modifyPlant = () => {
    navigate(`${PATH.PLANT_MODIFY}/${id}`);
  };

  const deletePlant = () => {
    console.log('삭제');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="w-[1.25rem] h-[1.25rem] cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={modifyPlant}>수정</DropdownMenuItem>
        <DropdownMenuItem onClick={deletePlant}>삭제</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
