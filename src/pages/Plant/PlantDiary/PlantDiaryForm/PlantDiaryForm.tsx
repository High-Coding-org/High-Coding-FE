import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import PlantInfoSection from './PlantInfo';

export default function PlantDiaryForm({
  name,
  percentage,
  imageUrl,
  content: initialContent,
  growth: initialGrowth,
  totalGrowth,
}) {
  const plantInfo = {
    name,
    percentage,
    totalGrowth,
    imageUrl,
  };

  const [content, setContent] = useState(initialContent);
  const [growth, setGrowth] = useState(initialGrowth);

  return (
    <div className="space-y-6">
      <PlantInfoSection {...plantInfo} />

      <div className="space-y-2">
        <label className="text-sm font-medium">길이 (cm)</label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="현재 길이를 입력해주세요."
          />
          <Button>입력하기</Button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">오늘의 일기</label>
        <Textarea
          className="h-[240px] resize-none"
          placeholder="오늘 하루 식물의 변화를 기록해보세요."
        />
      </div>

      <div className="flex justify-end">
        <Button>등록하기</Button>
      </div>
    </div>
  );
}
