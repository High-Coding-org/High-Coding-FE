import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import PageIndicator from './PageIndicator';
import PlantGraph from './PlantGraph/PlantGraph';
import PlantImage from './PlantImage/PlantImage';
import PlantName from './PlantName/PlantName';

import { IEnvironmentData } from '../type';

interface SliderContainerProps {
  environmentData: IEnvironmentData;
}

/**
 * SliderContainer
 *
 * 이 컴포넌트는 AI 추천 식물의 정보를 페이지별로 슬라이드 형식으로 보여줍니다.
 * 사용자는 좌우 화살표 버튼을 이용해 식물의 이름, 이미지, 레이더차트를 순차적으로 확인할 수 있습니다.
 */
//! 현재 DUMMY_AIData를 사용하고 있으며, API 연동 후 실제 데이터로 변경 필요
export default function SliderContainer({
  environmentData,
}: SliderContainerProps) {
  const DUMMY_AIData = {
    plantName: '알로에',
    temperature: 0.8,
    humidity: 0.34,
    soilMoisture: 0.5,
  };

  const [idx, setIdx] = useState<number>(0);
  const totalPage: number = 3;

  const nextPage = () => {
    setIdx(prevIdx => (prevIdx + 1) % totalPage);
  };
  const previousPage = () => {
    setIdx(prevIdx => prevIdx - 1);
  };

  return (
    <section className="w-full flex-1 rounded relative">
      {idx === 0 && <PlantName plantName={DUMMY_AIData.plantName} />}
      {idx === 1 && <PlantImage />}
      {idx === 2 && (
        <PlantGraph
          aiRecommendData={DUMMY_AIData}
          environmentData={environmentData}
        />
      )}
      <ChevronLeft
        className={`absolute top-[50%] left-2 rounded hover:bg-gray-200 hover:bg-opacity-50 transition duration-300 ${idx === 0 ? 'hidden' : ''}`}
        onClick={previousPage}
      />
      <ChevronRight
        className="absolute top-[50%] right-2 rounded hover:bg-gray-200 hover:bg-opacity-50 transition duration-300"
        onClick={nextPage}
      />
      <PageIndicator
        totalPage={3}
        index={idx}
      />
    </section>
  );
}
