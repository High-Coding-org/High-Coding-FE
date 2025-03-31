import 'react-svg-radar-chart/build/css/index.css';

import RadarChart from 'react-svg-radar-chart';

import { IAIRecommendData, IEnvironmentData } from '../../type';
import { DEFAULT_OPTIONS } from './GraphDefaultOptions';
import GraphLegend from './GraphLegend';

interface PlantGraphProps {
  aiRecommendData: IAIRecommendData;
  environmentData: IEnvironmentData;
}

/**
 * PlantGraph
 *
 * 이 컴포넌트는 추천 식물과 사용자의 환경 데이터를 비교하여
 * RadarChart(레이더 차트)로 시각화하는 기능을 제공합니다.
 */
export default function PlantGraph({
  aiRecommendData,
  environmentData,
}: PlantGraphProps) {
  //이거 min값도 고려해서 하는게 좋을까 상의
  const normalizeValue = (value: number, max: number) => value / max;
  const data = [
    {
      data: {
        temperature: aiRecommendData.temperature,
        humidity: aiRecommendData.humidity,
        soilMoisture: aiRecommendData.soilMoisture,
      },
      meta: { color: '#38BDFF' },
    },
    {
      data: {
        temperature: normalizeValue(environmentData.temperature, 40),
        humidity: normalizeValue(environmentData.humidity, 100),
        soilMoisture: normalizeValue(environmentData.soilMoisture, 100),
      },
      meta: { color: 'red' },
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-white">
      <RadarChart
        captions={{
          temperature: '온도',
          humidity: '습도',
          soilMoisture: '토양습도',
        }}
        data={data}
        size={260}
        options={DEFAULT_OPTIONS}
      />
      <GraphLegend plantName={aiRecommendData.plantName} />
      <div
        id="tooltip"
        className="absolute top-0 right-0 p-2 rounded"
      />
    </div>
  );
}
