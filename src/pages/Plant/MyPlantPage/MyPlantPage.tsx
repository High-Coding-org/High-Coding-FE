import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

import AddPlantCard from './AddPlantCard';
import { PlantResponse } from './type';

/**
 * MyPlantPage 컴포넌트
 *
 * 자신의 식물 목록을 보여주는 페이지입니다.
 */

//Todo: Mock Data 날리고, API 실제 데이터 들고오는 것 먼저 합시당

export const MY_PLANT_QUERY_KEY = 'userPlants';

export default function MyPlantPage() {
  const navigate = useNavigate();

  const getPlants = async () => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

    try {
      const res: PlantResponse = await axiosInstance.get(
        `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.GET_LIST}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res?.data;
    } catch (error) {
      throw new Error(`Error : ${error}`);
    }
  };

  const {
    data: plants,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [MY_PLANT_QUERY_KEY],
    queryFn: getPlants,
  });

  if (isError) {
    alert('식물 목록을 불러오는데 실패했습니다.');
    navigate(PATH.HOME);
    return null;
  }

  console.log(plants);
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
        {/* {plants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.name}
            imgSrc={plant.imgSrc}
            onDelete={() => handleDelete(plant.id)}
          />
        ))} */}

        {/* 마지막에 추가 버튼 */}
        <AddPlantCard />
      </main>
    </>
  );
}
