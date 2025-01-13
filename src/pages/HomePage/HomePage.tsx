import './bounceAnimation.css';

import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function HomePage() {
  const subTitle = useRef<HTMLDivElement>(null);

  const handleScrollToSubTitle = () => {
    subTitle.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="absolute w-screen">
      <section className="w-full ">
        {/* // Todo: div를 이미지로 변경해야 함 */}
        <div className="relative h-screen ">
          <h1 className="absolute text-6xl font-bold leading-normal text-center whitespace-pre-line -translate-x-1/2 left-1/2 top-[30%]">
            금융의 모든 것
            <br />
            토스에서 쉽고 간편하게
          </h1>
          <ChevronDown
            className="absolute w-8 h-8 -translate-x-1/2 opacity-50 hover:cursor-pointer left-1/2 bottom-10 bounce-animation"
            onClick={handleScrollToSubTitle}
          />
        </div>
      </section>
      <section className="h-[1200px] bg-green-500">세번째 박스</section>
      {/* <section></section> */}
      {/* <section></section> */}
    </main>
  );
}
