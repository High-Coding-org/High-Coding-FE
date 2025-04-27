import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import { PATH } from '@/routes/path';
import { getPlants } from '@/services/myPlant/getPlants';

import AddPlantCard from './AddPlantCard';
import PlantCard from './PlantCard';

/**
 * MyPlantPage 컴포넌트
 *
 * 자신의 식물 목록을 보여주는 페이지입니다.
 */

//Todo: Mock Data 날리고, API 실제 데이터 들고오는 것 먼저 합시당

export const MY_PLANT_QUERY_KEY = 'userPlants';

export default function MyPlantPage() {
  const navigate = useNavigate();

  const {
    data: plants,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [MY_PLANT_QUERY_KEY],
    queryFn: getPlants,
  });

  useEffect(() => {
    if (isError) {
      alert('식물 목록을 불러오는데 실패했습니다.');
      navigate(PATH.HOME);
      return null;
    }
  }, [isError, navigate]);

  // 식물 삭제 함수
  const handleDelete = (id: number) => {
    //! API 요청을 보내서 서버에서 해당 식물을 삭제하도록 구현해야 함.
    // setPlants(prevPlants => prevPlants.filter(plant => plant.id !== id));
  };

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
