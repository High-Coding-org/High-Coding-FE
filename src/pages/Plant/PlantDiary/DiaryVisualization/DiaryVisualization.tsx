import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import PlantCalendar from '../components/PlantCalendar';
import PlantGraph from '../components/PlantGraph';

interface DiaryVisualizationProps {
  selectDate: Date;
  setSelectDate: (date: Date) => void;
}

export default function DiaryVisualization({
  selectDate,
  setSelectDate,
}: DiaryVisualizationProps) {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <PlantCalendar
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />
        </CarouselItem>
        <CarouselItem>
          <PlantGraph />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="w-12 h-12 ml-4" />
      <CarouselNext className="w-12 h-12 mr-4" />
    </Carousel>
  );
}
