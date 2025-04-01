import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Button } from '@/components/ui/button';

export default function PlantDiary() {
  const [selected, setSelected] = useState<Date>();
  /**
   //? URL에 입력된 ID가 유효한 값을 가지고 있는지 검사
    const navigate = useNavigate();
    const { id } = useParams();

    if (!id) {
      navigate(-1);
    } 
   */

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="flex gap-8 w-pageWidth">
        <section className="flex-1 p-6 space-y-6 border rounded-lg">
          {/* 식물 정보 */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.pinimg.com/736x/f6/22/d6/f622d62d3e443cbf669554a82c8e7c34.jpg"
              alt="몬스테라"
              className="object-cover w-24 h-24 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="mb-2 text-lg font-semibold">
                몬스테라 델리시오사
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                검색 대비 16% 성장했어요!
              </p>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: '16%' }}
                />
              </div>
            </div>
          </div>

          {/* 길이 입력 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">길이</label>
            <input
              type="text"
              placeholder="16cm"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* 오늘의 일기 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">오늘의 일기</label>
            <textarea
              className="w-full h-[200px] px-3 py-2 border rounded-md resize-none"
              placeholder="오늘 하루 식물의 변화를 기록해보세요"
            />
          </div>
          <div className="flex items-center justify-end ">
            <Button>등록하기</Button>
          </div>
        </section>

        <section className="relative flex flex-col items-center justify-center flex-1 p-24 border rounded-lg">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="w-full"
            styles={{
              root: { width: '100%' },
              months: { width: '100%' },
              month: { width: '100%' },
              table: { width: '100%' },
            }}
            classNames={{
              months: 'w-full',
              month: 'w-full',
              caption: 'flex justify-between items-center mb-4',
              caption_label: 'text-lg ml-4 font-semibold',
              nav: 'flex items-center space-x-6',
              nav_button:
                'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-7 w-7',
              table: 'w-full border-collapse',
              head_row: 'flex w-full mt-4',
              head_cell:
                'w-[14.28%] text-center text-muted-foreground font-normal text-sm py-2',
              row: 'flex w-full mt-2',
              cell: 'w-[14.28%] text-center relative p-0',
              day: 'w-12 h-12 mx-auto flex items-center justify-center rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              day_selected:
                'bg-blue-500 text-white hover:bg-blue-500/90 hover:text-white focus:bg-blue-500',
              day_today: 'border border-1',
              day_outside: 'text-muted-foreground opacity-50',
            }}
            components={{
              IconLeft: () => (
                <span className="p-4 text-lg font-semibold text-blue-500">
                  ←
                </span>
              ),
              IconRight: () => (
                <span className="p-4 text-lg font-semibold text-blue-500">
                  →
                </span>
              ),
            }}
          />
        </section>
      </main>
    </>
  );
}
