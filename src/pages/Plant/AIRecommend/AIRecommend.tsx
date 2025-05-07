import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Button } from '@/components/ui/button';
import { useAIRecommend } from '@/hooks/api/useAIRecommend';

import InputField from './components/InputField';
import PreResultContainer from './PreResultContainer/PreResultContainer';
import SliderContainer from './SliderContainer/SliderContainer';
import { IEnvironmentData, IRecommendData } from './types';
/**
 * AIRecommend
 *
 * 이 컴포넌트는 사용자가 온도, 습도, 토양 습도를 입력하면,
 * 해당 환경에서 키우기 좋은 식물을 추천해주는 기능을 수행합니다.
 */
export default function AIRecommend() {
  const [environmentData, setEnvironmentData] = useState<IEnvironmentData>({
    temperature: null,
    humidity: null,
    soilMoisture: null,
  });
  const [recommendData, setRecommendData] = useState<IRecommendData | null>(
    null
  );
  const [submittedEnvironmentData, setSubmittedEnvironmentData] =
    useState<IEnvironmentData | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  const { refetch, isFetching, error } = useAIRecommend(environmentData);

  useEffect(() => {
    if (error) {
      toast.error('식물 추천에 실패했습니다. 다시 시도해주세요.');
    }
  }, [error]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEnvironmentData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      environmentData.temperature === null ||
      environmentData.humidity === null ||
      environmentData.soilMoisture === null
    ) {
      toast.error('모든 환경 데이터를 입력해주세요.');
      return;
    }

    const data = await refetch();

    if (!data.data) {
      toast.error('추천 결과를 받아오지 못했습니다. 다시 시도해주세요.');
      return;
    }

    setRecommendData(data?.data);
    setSubmittedEnvironmentData(environmentData);
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
            <Button
              type="submit"
              disabled={isFetching}>
              {isFetching ? '추천 중...' : '추천받기'}
            </Button>
          </form>
        </section>

        {/* 구분선 */}
        <div className="bg-gray-300 rounded  h-[1px] w-full md:h-full md:w-[1px]" />

        {/* 결과 표시 영역 */}
        {isResultVisible && recommendData && submittedEnvironmentData ? (
          <SliderContainer
            environmentData={submittedEnvironmentData}
            recommendData={recommendData}
          />
        ) : (
          <PreResultContainer />
        )}
      </main>
    </>
  );
}
