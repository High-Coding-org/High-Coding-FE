import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';

import DiaryVisualization from './DiaryVisualization/DiaryVisualization';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';

export default function PlantDiary() {
  const [selectDate, setSelectDate] = useState<Date>();
  const { id } = useParams();
  const navigate = useNavigate();
  // const {
  //   data: plants,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: [PLANT_DIARY_QUERY_KEY, id],
  //   queryFn: () => getPlantById(id),
  // });

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
  }, [id, navigate]);

  /*
  //? URL에 입력된 ID가 유효한 값을 가지고 있는지 검사
   
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
          <PlantDiaryForm />
        </section>

        <section className="relative flex flex-col items-center justify-center flex-1 border rounded-lg">
          <DiaryVisualization
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />
        </section>
      </main>
    </>
  );
}
