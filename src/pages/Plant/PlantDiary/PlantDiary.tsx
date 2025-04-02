import { useState } from 'react';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import PlantCalendar from './components/PlantCalendar';
import PlantGraph from './components/PlantGraph';

export default function PlantDiary() {
  const [selectDate, setSelectDate] = useState<Date>();
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
              className="w-full h-[240px] px-3 py-4 border rounded-md resize-none"
              placeholder="오늘 하루 식물의 변화를 기록해보세요"
            />
          </div>
          <div className="flex items-center justify-end ">
            <Button>등록하기</Button>
          </div>
        </section>

        <section className="relative flex flex-col items-center justify-center flex-1 border rounded-lg">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <PlantCalendar
                  selectDate={selectDate}
                  setSelectDate={setSelectDate}
                />
              </CarouselItem>
              <CarouselItem>
                <PlantGraph />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="w-12 h-12 ml-4" />
            <CarouselNext className="w-12 h-12 mr-4" />
          </Carousel>
        </section>
      </main>
    </>
  );
}
