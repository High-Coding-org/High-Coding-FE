import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface GoalGrowthFieldProps {
  value: number | null;
  onChange: (e) => void;
  onSearchClick: () => void;
}
/**
 * GoalGrowthField
 *
 *  목표 성장치를 입력하거나 자동으로 추천받을 수 있는 입력 필드 컴포넌트입니다.
 */
export default function GoalGrowthField({
  value,
  onChange,
  onSearchClick,
}: GoalGrowthFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="goalGrowth">목표 성장치</Label>
        <Button
          className="h-6"
          onClick={onSearchClick}
          type="button">
          검색하기
        </Button>
      </div>
      <Input
        id="goalGrowth"
        type="number"
        onChange={onChange}
        value={value ?? ''}
        required
      />
    </div>
  );
}
