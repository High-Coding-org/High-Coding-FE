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
import { PATH } from '@/routes/path';
import { formatPlantDiaryDate } from '@/utils/formatDate';

import PlantCalendar from './components/PlantCalendar';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';
import PlantInfoSection from './PlantDiaryForm/PlantInfo';
import { checkGrowthValue } from './utils/checkGrowthValue';

export default function PlantDiary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectDate, setSelectDate] = useState<Date>(new Date());
  const [content, setContent] = useState<string>('');

  //? API
  const {
    data: plantData,
    isLoading: isPlantLoading,
    isError: isPlantError,
  } = usePlantById(Number(id));
  const { data: plantDiaryData, isLoading: isDiaryLoading } = usePlantDiary(
    Number(id),
    formatPlantDiaryDate(selectDate)
  );
  const { mutate: postPlantData } = usePostPlantDiary();

  //? React Hook Form
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      growth: '',
    },
  });

  const onSubmit = handleSubmit(data => {
    const { isValid, message } = checkGrowthValue(data.growth);

    if (!isValid) {
      alert(message);
      return;
    }

    postPlantData({
      id: Number(id),
      growth: Number(data.growth),
      content: content,
      record: formatPlantDiaryDate(selectDate),
    });
  });

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
  }, [id, navigate]);

  useEffect(() => {
    if (isPlantError) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      navigate(PATH.PLANT);
      return;
    }
  }, [isPlantError, navigate]);

  useEffect(() => {
    setContent(plantDiaryData?.content ?? '');
    setValue(
      'growth',
      plantDiaryData?.growth?.toString()
        ? plantDiaryData?.growth.toString()
        : ''
    );
  }, [plantData, plantDiaryData, setValue]);

  if (isPlantLoading || isDiaryLoading) return <Spinner />;

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="flex gap-8 w-pageWidth">
        <section className="flex-1 p-6 space-y-6 border rounded-lg">
          <form
            onSubmit={onSubmit}
            className="space-y-6">
            <PlantInfoSection
              name={plantData?.name}
              percentage={plantDiaryData?.percentage}
              totalGrowth={plantDiaryData?.totalGrowth}
              imageUrl={plantData?.imageUrl}
            />
            <PlantDiaryForm
              content={content}
              setContent={setContent}
              register={register}
            />
          </form>
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
