import { useState } from 'react';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Button } from '@/components/ui/button';

import InputField from './components/InputField';
import PreResultContainer from './PreResultContainer/PreResultContainer';
import SliderContainer from './SliderContainer/SliderContainer';
import { IEnvironmentData } from './type';

/**
 * AIRecommend
 *
 * 이 컴포넌트는 사용자가 온도, 습도, 토양 습도를 입력하면,
 * 해당 환경에서 키우기 좋은 식물을 추천해주는 기능을 수행합니다.
 */
//! 현재 isResultVisible로 결과 컴포넌트가 보여지는지 아닌지 판단
//! API 연결 시 수정해야 함
export default function AIRecommend() {
  const [isResultVisible, setIsResultVisible] = useState(false);

  const [environmentData, setEnvironmentData] = useState<IEnvironmentData>({
    temperature: null,
    humidity: null,
    soilMoisture: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setEnvironmentData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsResultVisible(true);
  };

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="w-[95%] md:w-[1140px] h-[900px] md:h-[458px] mb-8 bg-[#F5F5F5] p-12 rounded flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* 환경 설정 입력 폼 */}
        <section className="flex-1 flex flex-col gap-8">
          <h1 className="font-bold text-lg">
            기상청 데이터에 의거한 <br />
            현재 환경에 키우기 좋은 식물은?
          </h1>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <InputField
                label="온도(°C)"
                name="temperature"
                value={environmentData.temperature}
                onChange={handleChange}
                min={5}
                max={40}
                step={0.1}
              />
              <InputField
                label="습도(%)"
                name="humidity"
                value={environmentData.humidity}
                onChange={handleChange}
                min={20}
                max={100}
                step={1}
              />
              <InputField
                label="토양습도(%)"
                name="soilMoisture"
                value={environmentData.soilMoisture}
                onChange={handleChange}
                min={10}
                max={100}
                step={1}
              />
            </div>

            <Button type="submit">추천받기</Button>
          </form>
        </section>
        <div className="bg-gray-300 rounded  h-[1px] w-full md:h-full md:w-[1px]" />
        {/* form 제출 전에는 PreResultContainer, 제출 후에는 SliderContainer */}
        {isResultVisible ? (
          <SliderContainer environmentData={environmentData} />
        ) : (
          <PreResultContainer />
        )}
      </main>
    </>
  );
}
