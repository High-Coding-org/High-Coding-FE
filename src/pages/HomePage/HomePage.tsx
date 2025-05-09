import './bounceAnimation.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { PATH } from '@/routes/path';
import { useGlobalErrorStore } from '@/store/globalErrorStore';

import ResponsiveText from './components/ResponsiveText';
import { HomePageClass } from './constants/class';
import { iconColorMap, iconMap } from './constants/icons';
import { HomePageImages } from './constants/images';
import { HomePageTexts } from './constants/texts';

export default function HomePage() {
  const navigate = useNavigate();
  const { errorMsg, hasError, clearError } = useGlobalErrorStore();
  const subTitleRef = useRef<HTMLDivElement>(null);

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
            src={HomePageImages.background1}
            alt="HomeBackground"
            className="absolute object-cover w-full h-full opacity-50"
          />
          <div className="absolute -translate-x-1/2 left-1/2 top-[24%]">
            {HomePageTexts.title.map((text, index) => (
              <ResponsiveText
                key={`${index}-HomeTitleText`}
                text={text}
                breakPoint="|"
                className={HomePageClass.title}
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
            {HomePageTexts.subTitle.map((text, index) => (
              <ResponsiveText
                key={`${index}-HomeSubTitleText`}
                text={text}
                breakPoint="|"
                className={HomePageClass.subTitle}
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
          {HomePageTexts.part1_Text.map((text, index) => (
            <ResponsiveText
              key={`${index}-part1Text`}
              text={text}
              breakPoint="|"
              className={HomePageClass.part1}
            />
          ))}
        </article>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="my-8 md:absolute md:top-1/4 md:right-9 w-[480px] h-[540px] border-2 rounded-md">
          <img
            src={HomePageImages.image1}
            alt="HomeImage1"
            className="object-cover w-full h-full"
          />
        </div>
        <span
          data-aos="fade-up"
          className="text-xl md:absolute md:bottom-[160px] md:left-9">
          {HomePageTexts.part1_SubText.map((text, index) => (
            <ResponsiveText
              key={`${index}-part1SubText`}
              text={text}
              breakPoint="|"
              className={HomePageClass.part1_Sub}
            />
          ))}
        </span>
      </section>

      {/* 파트 2: 식물을 체계적으로 관리해 보세요 */}
      <section className="h-[1080px] bg-[#F9FAFB] w-full flex justify-center">
        <div className="flex md:h-[960px] md:w-[1140px] md:relative md:px-8">
          <article
            data-aos="fade-up"
            className="mt-[160px]">
            {HomePageTexts.part2_Text.map((text, index) => (
              <ResponsiveText
                key={`${index}-part2Text`}
                text={text}
                breakPoint="|"
                className={HomePageClass.part1}
              />
            ))}
          </article>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            className="md:absolute md:top-1/3 md:left-5 w-[600px] h-[680px] border-2 rounded-md">
            <img
              src={HomePageImages.image2}
              alt="HomeImage2"
              className="object-contain w-full h-full scale-110 bg-gray-50"
            />
          </div>
          <span
            data-aos="fade-left"
            className="text-xl md:absolute md:bottom-[160px] md:right-9">
            {HomePageTexts.part2_SubText.map((text, index) => (
              <ResponsiveText
                key={`${index}-part2SubText`}
                text={text}
                breakPoint="|"
                className={HomePageClass.part1_Sub}
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
          {HomePageTexts.part3_Text.map((text, index) => (
            <ResponsiveText
              key={`${index}-part3Text`}
              text={text}
              breakPoint="|"
              className={HomePageClass.part1}
            />
          ))}
        </article>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          className="md:absolute md:top-1/4 md:right-5 w-[600px] h-[680px] rounded-md">
          <img
            src={HomePageImages.image3}
            alt="HomeImage3"
            className="object-contain w-full h-full scale-110"
          />
        </div>
        <span
          data-aos="fade-right"
          className="text-xl md:absolute md:bottom-[160px] md:left-9">
          {HomePageTexts.part3_SubText.map((text, index) => (
            <ResponsiveText
              key={`${index}-part3SubText`}
              text={text}
              breakPoint="|"
              className={HomePageClass.part1_Sub}
            />
          ))}
        </span>
      </section>

      {/* 파트 4: 스마트팜 앱을 통해 손쉬운 식물 관리까지 */}
      <section className="h-[1080px] bg-[#F9FAFB] w-full flex justify-center">
        <div className="flex md:h-[960px] md:w-[1140px] md:relative md:px-8">
          <article
            data-aos="fade-up"
            className="mt-[160px]">
            {HomePageTexts.part4_Text.map((text, index) => (
              <ResponsiveText
                key={`${index}-part4Text`}
                text={text}
                breakPoint="|"
                className={HomePageClass.part1}
              />
            ))}
          </article>
          <div className="absolute grid grid-cols-3 grid-rows-3 gap-2 w-full h-[800px] top-12">
            {/* 1번 */}
            <div />
            {/* 2번 */}
            <div />
            {/* 3번 */}
            <div />
            {/* 4번 */}
            <div className="relative flex items-center justify-center">
              <span
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="absolute bottom-[-24px] text-xl font-semibold text-right text-gray-500">
                {HomePageTexts.part4_SubText[1]}
              </span>
            </div>
            {/* 5번 */}
            <div
              data-aos="fade-up"
              className="flex items-center justify-center row-span-2">
              <img
                src={HomePageImages.image4}
                alt="앱 미리보기"
                className="object-contain max-h-[600px] w-auto drop-shadow-xl"
              />
            </div>
            {/* 6번 */}
            <div className="flex items-center justify-center">
              <span
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="text-xl font-semibold text-right text-gray-500">
                {HomePageTexts.part4_SubText[0]}
              </span>
            </div>
            {/* 7번 */}
            <div />
            {/* 8번 */}
            <div className="flex items-center justify-center">
              <span
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="text-xl font-semibold text-right text-gray-500">
                {HomePageTexts.part4_SubText[2]}
              </span>
            </div>
            {/* 9번 */}
            <div />
          </div>
        </div>
      </section>

      {/* 파트 5: 하이코딩만의 특별한 기능들 */}
      <section className="flex justify-center w-full">
        <div className="h-[1280px] md:h-[960px] md:w-[1140px] md:relative md:px-8">
          <article
            data-aos="fade-up"
            className="mt-[160px]">
            {HomePageTexts.part5_Text.map((text, index) => (
              <ResponsiveText
                key={`${index}-part5Text`}
                text={text}
                breakPoint="|"
                className={HomePageClass.part5}
              />
            ))}
          </article>

          <div className="grid grid-cols-1 gap-16 mt-20 md:grid-cols-2 ">
            {HomePageTexts.part5_SubText.map((obj, index) => {
              const IconComponent = iconMap[obj.icon as keyof typeof iconMap];
              return (
                <div
                  key={`part5 describe-${index}`}
                  data-aos="fade-up">
                  {IconComponent && (
                    <IconComponent
                      className={`w-20 h-20 ${iconColorMap[obj.icon as keyof typeof iconColorMap]}`}
                    />
                  )}
                  <span className="block my-4 text-2xl font-semibold text-gray-700">
                    {obj.title}
                  </span>
                  <span className="text-base font-semibold text-gray-500 ">
                    <ResponsiveText
                      text={obj.subTitle}
                      breakPoint="|"
                      className={HomePageClass.part5_SubText}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 푸터: 키트 상세 페이지로 안내 */}
      <section className="h-[540px] bg-[#F9FAFB] w-full flex justify-center items-center mb-[100px]">
        <article data-aos="fade-up">
          <ResponsiveText
            text={HomePageTexts.footer_Text}
            breakPoint="|"
            className={HomePageClass.part1}
          />
          <Button
            className="mt-12 text-lg"
            onClick={() => navigate(PATH.PRODUCT)}>
            구매하러 가기
          </Button>
        </article>
      </section>
    </main>
  );
}
