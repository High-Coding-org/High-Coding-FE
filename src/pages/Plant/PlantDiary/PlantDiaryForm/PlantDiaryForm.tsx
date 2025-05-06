import { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import PlantInfoSection from './PlantInfo';

// interface PlantDiaryFormProps {
//   name: string;
//   imageUrl: string;
//   percentage: number;
//   totalGrowth: number;
//   growthTarget: number;
//   content: string;
//   setContent: (content: string) => void;
//   register: UseFormRegister<FieldValues>;
//   handleSubmit: UseFormHandleSubmit<FieldValues>;
//   watch: UseWatch<FieldValues>;
// }

export default function PlantDiaryForm({
  name,
  imageUrl,
  percentage,
  totalGrowth,
  content,
  setContent,
  register,
  onSubmit,
}) {
  // const [flag, setFlag] = useState<boolean>(false);

  const plantInfo = {
    name,
    percentage,
    totalGrowth,
    imageUrl,
  };

  const handleSubmit = (e: FormEvent) => {
    // if (flag) {
    //   e.preventDefault();
    //   setFlag(false);
    //   return;
    // }

    const formData = new FormData(e.target as HTMLFormElement);
    const growthValue = formData.get('growth') as string;

    // 빈 값 체크
    if (!growthValue.trim()) {
      e.preventDefault();
      alert('값을 입력해주세요.');
      return;
    }

    // 숫자 형식 체크
    if (isNaN(Number(growthValue))) {
      e.preventDefault();
      alert('숫자 외의 값은 입력하실 수 없습니다.');
      return;
    }

    // 음수 체크
    if (Number(growthValue) <= 0) {
      e.preventDefault();
      alert('0 이하의 값은 입력할 수 없습니다.');
      return;
    }

    onSubmit(e);
    // setFlag(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6">
      <PlantInfoSection {...plantInfo} />

      <div className="space-y-2">
        <label className="text-sm font-medium">현재 식물 길이 (cm)</label>
        <div className="flex items-center gap-2">
          {/* {flag ? (
            <>
              <Input
                type="text"
                disabled
              />
              <Button>수정하기</Button>
            </>
          ) : (
            <>
              <Input
                type="text"
                placeholder="현재 식물 길이를 입력해주세요."
                {...register('growth')}
              />
              <Button type="submit">입력하기</Button>
            </>
          )} */}
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
    </form>
  );
}
