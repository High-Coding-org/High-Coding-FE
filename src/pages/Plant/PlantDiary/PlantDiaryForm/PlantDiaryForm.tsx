import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import PlantInfoSection from './PlantInfo';

export default function PlantDiaryForm() {
  const plantInfo = {
    imageUrl:
      'https://i.pinimg.com/736x/f6/22/d6/f622d62d3e443cbf669554a82c8e7c34.jpg',
    name: '몬스테라 델리시오사',
    growthRate: 16,
  };

  return (
    <div className="space-y-6">
      <PlantInfoSection plantInfo={plantInfo} />

      <div className="space-y-2">
        <label className="text-sm font-medium">길이</label>
        <Input
          type="text"
          placeholder="16cm"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">오늘의 일기</label>
        <Textarea
          className="h-[240px] resize-none"
          placeholder="오늘 하루 식물의 변화를 기록해보세요"
        />
      </div>

      <div className="flex justify-end">
        <Button>등록하기</Button>
      </div>
    </div>
  );
}
