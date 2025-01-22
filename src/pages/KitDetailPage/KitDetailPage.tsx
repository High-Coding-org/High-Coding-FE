import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { IKit } from '@/pages/KitDetailPage/type';
import { PATH } from '@/routes/path';

import StarRating from './StarRating';
import { useKit } from './useKit';

/**
 * KitDetailPage 컴포넌트
 * 특정 키트의 상세 정보를 렌더링하며, 이미지, 이름, 가격, 별점, 리뷰 수, 수량 선택기 및 구매 버튼을 포함합니다.
 */

export default function KitDetailPage() {
  const [kit, setKit] = useState<IKit>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);

  const handlePurchase = () => {
    navigate(PATH.PRODUCT_PURCHASE);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const { isLoading, data } = useKit();

  useEffect(() => {
    if (isLoading) return;

    setKit(data[0]);
  }, [isLoading, data]);

  // ! 별점이 없음
  // ! 리뷰도 없음

  return isLoading ? (
    <div>로딩중...</div>
  ) : (
    <main className="w-kitDetailPage_pageWidth">
      <section className="flex w-full mb-8 h-kitDetailPage_productSectionHeight">
        {/* 대표 이미지 */}
        {/*<img
            src={image}
            alt={name}
            className="w-[30rem] h-auto mb-4"
          />*/}
        <div className="flex-1 bg-gray-300 border-2 border-red-500"></div>

        <div className="flex flex-col justify-between flex-1 p-8 border-2 border-blue-500 ">
          <header>
            <h1 className="text-xl font-bold">{kit?.productName}</h1>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-700">4.5</span>
              <StarRating value={4.5} />
              <a className="text-xs font-semibold cursor-pointer text-primary hover:underline">
                128개의 상품 리뷰
              </a>
            </div>
            <p className="flex mt-4 text-xl font-bold text-center text-red-700">
              {kit?.price.toLocaleString() + ' '}원
            </p>
          </header>

          <div className="flex justify-between mt-4">
            <div>
              <div className="flex items-center gap-4">
                <Button
                  className="bg-gray-700"
                  onClick={handleDecrease}
                  disabled={quantity === 1}>
                  -
                </Button>
                <span className="text-lg font-semibold">{quantity}</span>
                <Button
                  className="bg-gray-700"
                  onClick={handleIncrease}>
                  +
                </Button>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-500">
                  총 금액: {(kit?.price * quantity).toLocaleString()}원
                </span>
              </div>
            </div>
            <Button
              className="bg-[#007AFD] hover:bg-[#0063CD]"
              onClick={handlePurchase}>
              구매하기
            </Button>
          </div>
        </div>
      </section>

      {/* 상세 이미지 */}
      <figure className="w-full h-[1000px] bg-gray-300"></figure>
    </main>
  );
}
