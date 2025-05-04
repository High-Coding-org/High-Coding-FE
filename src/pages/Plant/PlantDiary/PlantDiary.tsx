import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { usePlantById, usePlantDiary } from '@/hooks/api/usePlant';
import { formatPlantDiaryDate } from '@/utils/formatDate';

import PlantCalendar from './components/PlantCalendar';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';

export default function PlantDiary() {
  const [selectDate, setSelectDate] = useState<Date>(new Date());
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: plantData, isLoading, isError } = usePlantById(Number(id));
  const { data: plantDiaryData } = usePlantDiary(
    Number(id),
    formatPlantDiaryDate(selectDate)
  );

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
  }, [id, navigate]);

  //? URL에 입력된 ID가 유효한 값을 가지고 있는지 검사
  //? isError를 통해

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="flex gap-8 w-pageWidth">
        <section className="flex-1 p-6 space-y-6 border rounded-lg">
          <PlantDiaryForm
            {...plantData}
            {...plantDiaryData}
          />
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
