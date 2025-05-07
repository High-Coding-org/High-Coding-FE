import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function PlantDiaryForm({ content, setContent, register }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">현재 식물 길이 (cm)</label>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="현재 식물 길이를 입력해주세요."
            className="bg-gray-50"
            {...register('growth')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">오늘의 일기</label>
        <Textarea
          className="h-[240px] resize-none bg-gray-50"
          placeholder="오늘 하루 식물의 변화를 기록해보세요."
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit">등록하기</Button>
      </div>
    </div>
  );
}
