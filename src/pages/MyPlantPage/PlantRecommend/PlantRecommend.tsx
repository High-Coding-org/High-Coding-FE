import BreadcrumbAndTitle from '@/components/common/Breadcrumb';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

//! Breadcrumb 추가해야 함
export default function PlantRecommend() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="w-full px-5 md:w-[1140px]">
      {/*<BreadcrumbAndTitle />*/}

      <section className="bg-[#F5F5F5] flex flex-col justify-between gap-8 p-12 rounded h-auto md:flex-row md:gap-20">
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
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="humidity">습도(%)</Label>
                <Input
                  type="number"
                  id="humidity"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="light">광량(lx)</Label>
                <Input
                  type="number"
                  id="light"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="soilMoisture">토양습도(%)</Label>
                <Input
                  type="number"
                  id="soilMoisture"
                />
              </div>
            </div>
            <Button type="submit">추천받기</Button>
          </form>
        </div>
        <div className="font-bold bg-white flex items-center justify-center rounded flex-1 py-8">
          알로에
        </div>
      </section>
    </main>
  );
}
