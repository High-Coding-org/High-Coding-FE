import { Button } from '@/components/ui/button';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';

import FieldInput from './FieldInput';
import PreResultContainer from './PreResultContainer';
import ResultContainer from './ResultContainer';

import { ENVIRONMENT_FIELDS } from '@/constants/environmentsFields';

export default function AIRecommend() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <BreadcrumbAndTitle />

      <main className="w-[95%] h-[1150px] mb-8 bg-[#F5F5F5] flex flex-col justify-between gap-8 p-12 rounded h-auto md:flex-row md:gap-20 md:w-[1140px] md:h-auto ">
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
              {ENVIRONMENT_FIELDS.map(({ id, ...props }) => (
                <FieldInput
                  key={id}
                  id={id}
                  {...props}
                />
              ))}
            </div>
            <Button type="submit">추천받기</Button>
          </form>
        </section>

        {/* 식물 추천 결과 화면 */}
        <ResultContainer
          plantName="알로에"
          imageUrl="https://health.chosun.com/site/data/img_dir/2021/08/24/2021082401938_0.jpg"
        />

        {/* 결과가 표시되기 전 화면 */}
        {/*<PreResultContainer />*/}
      </main>
    </>
  );
}
