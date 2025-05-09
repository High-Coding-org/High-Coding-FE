import './bounceAnimation.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { ChevronDown, Droplet } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import { useGlobalErrorStore } from '@/store/globalErrorStore';

import ResponsiveText from './components/ResponsiveText';
import {
  characteristics_Class,
  characteristics_SubText,
  characteristics_SubTextClass,
  characteristics_Text,
  part1_Class,
  part1_SubClass,
  part1_SubText,
  part1_Text,
  part2_SubText,
  part2_Text,
  subTitle,
  subTitleClass,
  title,
  titleClass,
} from './constants';

export default function HomePage() {
  const { errorMsg, hasError, clearError } = useGlobalErrorStore();
  const subTitleRef = useRef<HTMLDivElement>(null);
  const homeBackground1 = new URL(
    '@/assets/HomePage/HomeBackground-1.webp',
    import.meta.url
  ).href;
  const homeImage1 = new URL(
    '@/assets/HomePage/HomeImage-1.webp',
    import.meta.url
  ).href;
  const homeImage2 = new URL(
    '@/assets/HomePage/HomeImage-2.webp',
    import.meta.url
  ).href;

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    if (hasError) {
      toast.error(errorMsg);
      clearError();
    }
  }, [hasError, errorMsg, clearError]);

  const handleScrollToSubTitle = () => {
    subTitleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full">
        <div className="relative h-screen ">
          <img
            src={homeBackground1}
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

      {/* 파트 1: 처음 키우는 식물도 어려움 없이 */}
      <section className="h-[1080px] md:h-[960px] md:w-[1140px] md:relative md:px-8">
        <article
          data-aos="fade-up"
          className="mt-[160px]">
          {part1_Text.map((text, index) => (
            <ResponsiveText
              key={`${index}-part1Text`}
              text={text}
              breakPoint="|"
              className={part1_Class}
            />
          ))}
        </article>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="my-8 md:absolute md:top-1/4 md:right-9 w-[480px] h-[540px] border-2 rounded-md">
          <img
            src={homeImage1}
            alt="HomeImage1"
            className="object-cover w-full h-full"
          />
        </div>
        <span
          data-aos="fade-up"
          className="text-xl md:absolute md:bottom-[160px] md:left-9">
          {part1_SubText.map((text, index) => (
            <ResponsiveText
              key={`${index}-part1SubText`}
              text={text}
              breakPoint="|"
              className={part1_SubClass}
            />
          ))}
        </span>
      </section>

      {/* 파트 2: 식물을 체계적으로 관리해 보세요 */}
      <section className="h-[1080px] bg-[#F9FAFB] w-full flex justify-center">
        <div className="flex  md:h-[960px] md:w-[1140px] md:relative md:px-8">
          <article
            data-aos="fade-up"
            className="mt-[160px]">
            {part2_Text.map((text, index) => (
              <ResponsiveText
                key={`${index}-part2Text`}
                text={text}
                breakPoint="|"
                className={part1_Class}
              />
            ))}
          </article>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="md:absolute md:top-1/4 md:right-5 w-[600px] h-[680px] border-2 rounded-md">
            <img
              src={homeImage2}
              alt="HomeImage2"
              className="object-contain w-full h-full scale-110 bg-gray-50"
            />
          </div>
          <span
            data-aos="fade-up"
            className="text-xl md:absolute md:bottom-[160px] md:left-9">
            {part2_SubText.map((text, index) => (
              <ResponsiveText
                key={`${index}-part2SubText`}
                text={text}
                breakPoint="|"
                className={part1_SubClass}
              />
            ))}
          </span>
        </div>
      </section>

      {/* 파트 3: 처음 키우는 식물도 어려움 없이 */}
      <section className="h-[1080px] md:h-[960px] md:w-[1140px] md:relative md:px-8">
        <article
          data-aos="fade-up"
          className="mt-[160px]">
          {part1_Text.map((text, index) => (
            <ResponsiveText
              key={`${index}-part1Text`}
              text={text}
              breakPoint="|"
              className={part1_Class}
            />
          ))}
        </article>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="my-8 md:absolute md:top-1/4 md:right-9 w-[480px] h-[540px] border-2 rounded-md">
          <img
            src={homeImage1}
            alt="HomeImage"
            className="object-cover w-full h-full"
          />
        </div>
        <span
          data-aos="fade-up"
          className="text-xl md:absolute md:bottom-[160px] md:left-9">
          {part1_SubText.map((text, index) => (
            <ResponsiveText
              key={`${index}-part1SubText`}
              text={text}
              breakPoint="|"
              className={part1_SubClass}
            />
          ))}
        </span>
      </section>

      {/* 하이코딩만의 특별한 기능들 */}
      <section className="w-full bg-[#F9FAFB] flex justify-center">
        <div className="h-[1280px] md:h-[960px] md:w-[1140px] md:relative md:px-8">
          <article
            data-aos="fade-up"
            className="mt-[160px]">
            {characteristics_Text.map((text, index) => (
              <ResponsiveText
                key={`${index}-characteristicsText`}
                text={text}
                breakPoint="|"
                className={characteristics_Class}
              />
            ))}
          </article>

          <div className="grid grid-cols-1 gap-16 mt-20 md:grid-cols-2 ">
            {characteristics_SubText.map((obj, index) => (
              <div
                key={`Characteristics describe-${index}`}
                data-aos="fade-up">
                <Droplet className="w-20 h-20 text-blue-500" />
                <span className="block my-4 text-2xl font-semibold text-gray-700">
                  {obj.title}
                </span>
                <span className="text-base font-semibold text-gray-500 ">
                  <ResponsiveText
                    text={obj.subTitle}
                    breakPoint="|"
                    className={characteristics_SubTextClass}
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
