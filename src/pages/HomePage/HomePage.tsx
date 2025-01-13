import './bounceAnimation.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

import ResponsiveText from './components/ResponsiveText';
import {
  function1Class,
  function1SubClass,
  function1SubText,
  function1Text,
  subTitle,
  subTitleClass,
  title,
  titleClass,
} from './constants';

export default function HomePage() {
  const subTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  const handleScrollToSubTitle = () => {
    subTitleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="absolute flex flex-col items-center w-full">
      <section className="w-full">
        <div className="relative h-screen ">
          <img
            src={'src/assets/HomeBackground/HomeBackground.png'}
            alt="HomeBackground"
            className="absolute object-cover w-full h-full opacity-50 mt-[80px]"
          />
          <div className="absolute -translate-x-1/2 left-1/2 top-[24%]">
            {title.map((text, index) => (
              <ResponsiveText
                key={`${index}-HomeTitleText`}
                text={text}
                breakPoint="|"
                className={titleClass}
              />
            ))}
          </div>
          <ChevronDown
            className="absolute w-16 h-16 p-4 -translate-x-1/2 opacity-70 hover:cursor-pointer left-1/2 bottom-10 bounce-animation"
            onClick={handleScrollToSubTitle}
          />
        </div>
        <div
          ref={subTitleRef}
          className="bg-[#F9FAFB] h-[600px] relative">
          <div className="absolute grid w-full grid-cols-1 gap-2 -translate-x-1/2 left-1/2 top-1/3">
            {subTitle.map((text, index) => (
              <ResponsiveText
                key={`${index}-HomeSubTitleText`}
                text={text}
                breakPoint="|"
                className={subTitleClass}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="h-[1080px] md:h-[960px] md:w-[1140px] md:relative md:px-8">
        <article
          data-aos="fade-up"
          className="mt-[160px]">
          {function1Text.map((text, index) => (
            <ResponsiveText
              key={`${index}-function1Text`}
              text={text}
              breakPoint="|"
              className={function1Class}
            />
          ))}
        </article>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="my-8 md:absolute md:top-1/4 md:right-9 w-[480px] h-[540px] border-2 rounded-md"
        />
        <p
          data-aos="fade-up"
          className="text-xl md:absolute md:bottom-[160px] md:left-9">
          {function1SubText.map((text, index) => (
            <ResponsiveText
              key={`${index}-function1SubText`}
              text={text}
              breakPoint="|"
              className={function1SubClass}
            />
          ))}
        </p>
      </section>

      {/* <section className="h-[800px] w-[1140px] bg-blue-500 relative px-8"></section> */}
    </main>
  );
}
