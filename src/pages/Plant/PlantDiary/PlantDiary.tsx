import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import { usePlantById, usePlantDiary } from '@/hooks/api/usePlant';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';
import { formatPlantDiaryDate } from '@/utils/formatDate';
import { getUserToken } from '@/utils/getUserToken';

import PlantCalendar from './components/PlantCalendar';
import PlantDiaryForm from './PlantDiaryForm/PlantDiaryForm';

export default function PlantDiary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectDate, setSelectDate] = useState<Date>(new Date());
  //? DiaryForm State
  const [content, setContent] = useState<string>('');

  //? React Hook Form
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      growth: '',
    },
  });

  const onSubmit = handleSubmit(data => {
    postPlantData({
      id: Number(id),
      growth: Number(data.growth),
      content: content,
      record: formatPlantDiaryDate(selectDate),
    });
  });

  //? -------------- API 요청 함수 ---------------
  const { data: plantData, isLoading: isPlantLoading } = usePlantById(
    Number(id)
  );
  const { data: plantDiaryData, isLoading: isDiaryLoading } = usePlantDiary(
    Number(id),
    formatPlantDiaryDate(selectDate)
  );

  const postPlantDiary = async ({ id, growth, content, record }) => {
    console.log(id, growth, content, record);
    // const token = getUserToken();
    // const body = { growth, content, record };

    // const res = await axiosInstance.post(
    //   `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.POST_PLANT_DIARY}/${id}`
    // );
  };

  const postPlantDiary1 = async ({ id, growth, content, record }) => {
    const token = getUserToken();
    const body = { growth, content, record };

    const res = await axiosInstance.post(
      `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.POST_PLANT_DIARY}/${id}`
    );
  };

  const usePostPlantDiary = () => {
    return useMutation({
      mutationFn: postPlantDiary,
      onSuccess: () => {
        toast.success('저장이 완료되었습니다.');
      },
      onError: () => {
        toast.error('저장에 실패했습니다.');
      },
    });
  };

  const { mutate: postPlantData } = usePostPlantDiary();

  //? ------------------------------------------

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

  //Todo URL에 입력된 ID가 유효한 값을 가지고 있는지 검사
  //Todo isError를 통해

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
