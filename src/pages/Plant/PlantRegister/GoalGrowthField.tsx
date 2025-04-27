import { ChangeHandler } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface GoalGrowthFieldProps {
  value: string | number;
  onChange: ChangeHandler;
  onSearchClick: () => void;
  error?: string;
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
  error,
}: GoalGrowthFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="goalGrowth"
        className="text-sm font-medium">
        목표 성장치
      </Label>
      <div className="flex gap-2">
        <Input
          id="goalGrowth"
          type="number"
          value={value}
          onChange={onChange}
          className={`flex-1 ${error ? 'border-red-500' : ''}`}
        />
        <Button
          type="button"
          onClick={onSearchClick}>
          검색
        </Button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
