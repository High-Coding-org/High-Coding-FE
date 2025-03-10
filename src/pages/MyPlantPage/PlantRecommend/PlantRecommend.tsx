import Lottie from 'lottie-react';
import plant from '@/assets/lottie/plantAnimation.json';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function PlantRecommend() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/*<BreadcrumbAndTitle />*/}

      <main className="w-[95%] h-[1140px] mb-8 bg-[#F5F5F5] flex flex-col justify-between gap-8 p-12 rounded h-auto md:flex-row md:gap-20 md:w-[1140px] md:h-auto ">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="font-bold text-lg">
            기상청 데이터에 의거한 <br />
            현재 환경에 키우기 좋은 식물은?
          </h1>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="temperature">온도(°C)</Label>
                <Input
                  type="number"
                  id="temperature"
                  className="bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="humidity">습도(%)</Label>
                <Input
                  type="number"
                  id="humidity"
                  className="bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="light">광량(lx)</Label>
                <Input
                  type="number"
                  id="light"
                  className="bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="soilMoisture">토양습도(%)</Label>
                <Input
                  type="number"
                  id="soilMoisture"
                  className="bg-white"
                />
              </div>
            </div>
            <Button type="submit">추천받기</Button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 py-8 gap-6 rounded font-bold text-center">
          <Lottie
            className="w-20"
            animationData={plant}
          />
          <p>추천받기를 눌러보세요!</p>
        </div>
      </main>
    </>
  );
}
