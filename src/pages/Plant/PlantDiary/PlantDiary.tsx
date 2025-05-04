import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { usePlantDiary } from '@/hooks/api/usePlant';

import PlantCalendar from './components/PlantCalendar';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';

export default function PlantDiary() {
  const [selectDate, setSelectDate] = useState<Date>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: plantData, isLoading, isError } = usePlantDiary(Number(id));

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
  }, [id, navigate]);

  /**
   * get 요청 시 리턴값
    {
      "plantId": 1,
      "date": "2025-05-01",
      "growth": null,
      "content": null,
      "totalGrowth": 0,
      "percentage": 0
    }
  */

  /*
    ///? URL에 입력된 ID가 유효한 값을 가지고 있는지 검사
   
    const {
      data: plants,
      isLoading,
      isError,
    } = useQuery({
      queryKey: [PLANT_DIARY_QUERY_KEY, id],
      queryFn: () => getPlantById(id),
    });

    useEffect(() => {
      if (!isError) return;

      navigate(-1);
      toast.error('해당 식물 조회에 실패했습니다.');
    }, [isError, navigate]);
  */

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="flex gap-8 w-pageWidth">
        <section className="flex-1 p-6 space-y-6 border rounded-lg">
          <PlantDiaryForm {...plantData} />
        </section>

        <section className="flex items-center justify-center flex-1 border rounded-lg">
          <PlantCalendar
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />
        </section>
      </main>
    </>
  );
}
