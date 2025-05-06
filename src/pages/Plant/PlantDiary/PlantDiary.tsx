import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import {
  usePlantById,
  usePlantDiary,
  usePostPlantDiary,
} from '@/hooks/api/usePlant';
import { formatPlantDiaryDate } from '@/utils/formatDate';

import PlantCalendar from './components/PlantCalendar';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';

export default function PlantDiary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectDate, setSelectDate] = useState<Date>(new Date());
  const [content, setContent] = useState<string>('');

  //? API
  const { data: plantData, isLoading: isPlantLoading } = usePlantById(
    Number(id)
  );
  const { data: plantDiaryData, isLoading: isDiaryLoading } = usePlantDiary(
    Number(id),
    formatPlantDiaryDate(selectDate)
  );
  const { mutate: postPlantData } = usePostPlantDiary();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      growth: '',
    },
  });

  //? React Hook Form
  const onSubmit = handleSubmit(data => {
    postPlantData({
      id: Number(id),
      growth: Number(data.growth),
      content: content,
      record: formatPlantDiaryDate(selectDate),
    });
  });

  useEffect(() => {
    setContent(plantDiaryData?.content ?? '');
    setValue(
      'growth',
      plantDiaryData?.growth?.toString()
        ? plantDiaryData?.growth.toString()
        : ''
    );
  }, [plantData, plantDiaryData, setValue]);

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
  }, [id, navigate]);

  //Todo 달력 날짜 선택 시 해당 데이터 가져오게끔

  if (isPlantLoading || isDiaryLoading) return <Spinner />;

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="flex gap-8 w-pageWidth">
        <section className="flex-1 p-6 space-y-6 border rounded-lg">
          <PlantDiaryForm
            name={plantData?.name}
            imageUrl={plantData?.imageUrl}
            percentage={plantData?.percentage}
            totalGrowth={plantData?.totalGrowth}
            content={content}
            setContent={setContent}
            register={register}
            onSubmit={onSubmit}
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
