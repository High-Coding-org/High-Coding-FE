import './bounceAnimation.css';

import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

import ResponsiveText from './components/ResponsiveText';
import {
  HomeSubTitle,
  HomeSubTitleClass,
  HomeTitle,
  HomeTitleClass,
} from './constants';

export default function HomePage() {
  const subTitle = useRef<HTMLDivElement>(null);

  const handleScrollToSubTitle = () => {
    subTitle.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="absolute w-screen">
      <section className="w-full ">
        {/* // Todo: div를 이미지로 변경해야 함 */}
        <div className="relative h-screen">
          <div className="absolute -translate-x-1/2 left-1/2 top-[30%]">
            {HomeTitle.map((text, index) => (
              <ResponsiveText
                key={index}
                text={text}
                breakPoint="|"
                className={HomeTitleClass}
              />
            ))}
          </div>

          <ChevronDown
            className="absolute w-16 h-16 p-4 -translate-x-1/2 opacity-50 hover:cursor-pointer left-1/2 bottom-10 bounce-animation"
            onClick={handleScrollToSubTitle}
          />
        </div>

        <div
          ref={subTitle}
          className="bg-[#F9FAFB] h-[600px] relative">
          <div className="absolute grid w-full grid-cols-1 gap-2 -translate-x-1/2 left-1/2 top-1/3">
            {HomeSubTitle.map((text, index) => (
              <ResponsiveText
                key={index}
                text={text}
                breakPoint="|"
                className={HomeSubTitleClass}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="h-[1200px] bg-green-500">세번째 박스</section>
      {/* <section></section> */}
      {/* <section></section> */}
    </main>
  );
}
