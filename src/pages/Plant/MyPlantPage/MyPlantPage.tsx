import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import { MY_PLANTS_QUERY_KEY } from '@/constants/plantQueryKey';
import { PATH } from '@/routes/path';
import { getPlants } from '@/services/myPlant/getPlants';

import AddPlantCard from './AddPlantCard';
import PlantCard from './PlantCard';

/**
 * MyPlantPage 컴포넌트
 *
 * 자신의 식물 목록을 보여주는 페이지입니다.
 */

export default function MyPlantPage() {
  const navigate = useNavigate();
  const {
    data: plants,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [MY_PLANTS_QUERY_KEY],
    queryFn: getPlants,
  });

  useEffect(() => {
    if (isError) {
      alert('식물 목록을 불러오는데 실패했습니다.');
      navigate(PATH.HOME);
      return null;
    }
  }, [isError, navigate]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="w-full md:w-[1140px] p-4 md:p-0 mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        {/* 기존 식물 카드 리스트 */}
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            {...plant}
          />
        ))}

        {/* 마지막에 추가 버튼 */}
        <AddPlantCard />
      </main>
    </>
  );
}
