import Lottie from 'lottie-react';
import { useNavigate } from 'react-router';

import truck from '@/assets/lottie/truckAnimation.json';
import { Button } from '@/components/ui/button';
import { PATH } from '@/routes/path';

export default function OrderComplete() {
  const navigate = useNavigate();

  return (
    <>
      <Lottie
        className="w-80 h-80"
        animationData={truck}
      />
      <h1 className="text-3xl font-bold">결제가 완료되었습니다.</h1>
      <h3 className="mt-2 mb-8 text-lg text-gray-500">
        상품을 안전하게 배송해드릴게요.
      </h3>

      <div className="flex gap-4">
        <Button
          type="button"
          onClick={() => navigate(PATH.ORDER_LIST)}>
          주문 상세 보기
        </Button>
        <Button
          type="button"
          onClick={() => navigate(PATH.HOME)}>
          홈으로 이동
        </Button>
      </div>
    </>
  );
}
