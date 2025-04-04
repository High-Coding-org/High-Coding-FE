import { useState } from 'react';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';

import DiaryVisualization from './DiaryVisualization/DiaryVisualization';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';

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
