import './bounceAnimation.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { ChevronDown, Droplet } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import { useGlobalErrorStore } from '@/store/globalErrorStore';

import ResponsiveText from './components/ResponsiveText';
import {
  function1Class,
  function1SubClass,
  function1SubText,
  function1Text,
  function2Class,
  function2SubText,
  function2SubTextClass,
  function2Text,
  subTitle,
  subTitleClass,
  title,
  titleClass,
} from './constants';

export default function HomePage() {
  const { globalError } = useGlobalErrorStore();
  const subTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    if (globalError) {
      toast.error('정보를 불러오는데 실패했습니다.');
      useGlobalErrorStore.getState().clearGlobalError();
    }
  }, [globalError]);

  const handleScrollToSubTitle = () => {
    subTitleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full">
        <div className="relative h-screen ">
          <img
            src={'src/assets/HomeBackground/HomeBackground.png'}
            alt="HomeBackground"
            className="absolute object-cover w-full h-full opacity-50"
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
        <span
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
        </span>
      </section>

      <section className="w-full bg-[#F9FAFB] flex justify-center">
        <div className="h-[1280px] md:h-[960px] md:w-[1140px] md:relative md:px-8">
          <article
            data-aos="fade-up"
            className="mt-[160px]">
            {function2Text.map((text, index) => (
              <ResponsiveText
                key={`${index}-function2Text`}
                text={text}
                breakPoint="|"
                className={function2Class}
              />
            ))}
          </article>

          <div className="grid grid-cols-1 gap-16 mt-20 md:grid-cols-2 ">
            {function2SubText.map((obj, index) => (
              <div
                key={`Fnc2 describe-${index}`}
                data-aos="fade-up">
                <Droplet className="w-20 h-20 text-blue-500" />
                <span className="my-4 text-2xl font-semibold text-gray-700">
                  {obj.title}
                </span>
                <span className="text-base font-semibold text-gray-500">
                  <ResponsiveText
                    text={obj.subTitle}
                    breakPoint="|"
                    className={function2SubTextClass}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
