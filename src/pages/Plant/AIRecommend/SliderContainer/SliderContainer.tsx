import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { IEnvironmentData } from '../types';
import { IRecommendData } from '../types';
import PageIndicator from './PageIndicator';
import PageTitle from './PageTitle';
import PlantGraph from './PlantGraph/PlantGraph';
import PlantImage from './PlantImage/PlantImage';
import PlantName from './PlantName/PlantName';
interface SliderContainerProps {
  environmentData: IEnvironmentData;
  recommendData: IRecommendData;
}

/**
 * SliderContainer
 *
 * 이 컴포넌트는 AI 추천 식물의 정보를 페이지별로 슬라이드 형식으로 보여줍니다.
 * 사용자는 좌우 화살표 버튼을 이용해 식물의 이름, 이미지, 레이더차트를 순차적으로 확인할 수 있습니다.
 */
export default function SliderContainer({
  environmentData,
  recommendData,
}: SliderContainerProps) {
  const [idx, setIdx] = useState<number>(0);
  const totalPage: number = 3;

  const nextPage = () => {
    setIdx(prevIdx => (prevIdx + 1) % totalPage);
  };
  const previousPage = () => {
    setIdx(prevIdx => prevIdx - 1);
  };

  return (
    <section className="w-full flex-1 bg-white rounded">
      {/* 페이지 제목 표시 */}
      <div className="h-[15%] w-full">
        <PageTitle idx={idx} />
      </div>

      <div className="flex items-center h-[70%]">
        {/* 이전 페이지 버튼 */}
        {idx === 0 ? (
          <div className="w-[8%]"></div>
        ) : (
          <div
            className="w-[8%] h-full flex items-center rounded-r hover:bg-gray-200 hover:bg-opacity-50 transition duration-3000"
            onClick={previousPage}>
            <ChevronLeft className="w-full" />
          </div>
        )}

        {/* 현재 페이지에 맞는 컴포넌트 렌더링 */}
        <div className="w-[84%]">
          {idx === 0 && <PlantName plantName={recommendData?.plantName} />}
          {idx === 1 && <PlantImage plantName={recommendData?.plantName} />}
          {idx === 2 && (
            <PlantGraph
              recommendData={recommendData}
              environmentData={environmentData}
            />
          )}
        </div>

        {/* 다음 페이지 버튼 */}
        <div
          className="w-[8%] h-full flex items-center rounded-l hover:bg-gray-200 hover:bg-opacity-50 transition duration-300"
          onClick={nextPage}>
          <ChevronRight className="w-full" />
        </div>
      </div>

      {/* 페이지 인디케이터 */}
      <div className="h-[15%] w-full">
        <PageIndicator
          totalPage={3}
          index={idx}
        />
      </div>
    </section>
  );
}
