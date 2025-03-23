import { useState } from 'react';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import PlantCard from '@/pages/MyPlantPage/MyPlantPage/PlantCard';
import AddPlantCard from './AddPlantCard';
import { IPlant } from './type';

const MOCK_DATA = [
  {
    id: 1,
    name: '몬스테라',
    imgSrc:
      'https://health.chosun.com/site/data/img_dir/2022/04/04/2022040401755_0.jpg',
  },
  {
    id: 2,
    name: '선인장',
    imgSrc:
      'https://www.ikea.com/kr/ko/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=xs',
  },
];
/**
 * MyPlantPage 컴포넌트
 *
 * 자신의 식물 목록을 보여주는 페이지입니다.
 */
export default function MyPlantPage() {
  const [plants, setPlants] = useState<IPlant[]>(MOCK_DATA);

  // 식물 삭제 함수
  const handleDelete = (id: number) => {
    //! API 요청을 보내서 서버에서 해당 식물을 삭제하도록 구현해야 함.
    setPlants(prevPlants => prevPlants.filter(plant => plant.id !== id));
  };

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="w-full md:w-[1140px] p-4 md:p-0 mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        {/* 기존 식물 카드 리스트 */}
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.name}
            imgSrc={plant.imgSrc}
            onDelete={() => handleDelete(plant.id)}
          />
        ))}

        {/* 마지막에 추가 버튼 */}
        <AddPlantCard />
      </main>
    </>
  );
}
