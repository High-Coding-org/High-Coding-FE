import { EllipsisVertical } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PlantDropdownMenuProps {
  onDelete: () => void;
}
export default function PlantDropdownMenu({
  onDelete,
}: PlantDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="w-[1.25rem] h-[1.25rem] cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>수정</DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>삭제</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
