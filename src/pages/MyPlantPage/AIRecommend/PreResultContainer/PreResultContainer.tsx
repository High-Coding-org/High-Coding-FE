import Lottie from 'lottie-react';
import plant from '@/assets/lottie/plantAnimation.json';
/**
 * PreResultContainer
 *
 * 제출하기 전의 화면에 표시되는 상태를 보여줍니다.
 */
export default function PreResultContainer() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 py-8 gap-6 rounded font-bold text-center">
      <Lottie
        className="w-20"
        animationData={plant}
      />
      <p>추천받기를 눌러보세요!</p>
    </section>
  );
}
