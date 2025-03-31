import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Spinner from '@/components/common/Spinner/Spinner';
import { Button } from '@/components/ui/button';
import { KIT_ID } from '@/constants/kitId';
import { useKit } from '@/hooks/api/useKit';
import { PATH } from '@/routes/path';
import { useKitDetailErrorStore } from '@/store/kitDetailErrorStore';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

import NoKitData from './NoKitData';
import StarRating from './StarRating';
import { IKit } from './type';

/**
 * KitDetailPage 컴포넌트
 * 특정 키트의 상세 정보를 렌더링하며, 이미지, 이름, 가격, 별점, 리뷰 수, 수량 선택기 및 구매 버튼을 포함합니다.
 */

export default function KitDetailPage() {
  const [kit, setKit] = useState<IKit>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const { isLoading, data, error } = useKit(KIT_ID);
  const { kitDetailErrorOccur, setErrorMsg } = useKitDetailErrorStore();

  const handleOrder = () => {
    if (!kit) return;

    const orderPath = `${PATH.PRODUCT_ORDER}/${kit?.id}/${kit?.productName}/${quantity}/${kit?.price}`;

    navigate(orderPath);
  };

  useEffect(() => {
    if (isLoading || !data) return;

    setKit(data);
  }, [isLoading, data]);

  useEffect(() => {
    if (error) {
      kitDetailErrorOccur();

      switch (error.message) {
        case '404':
          setErrorMsg('네트워크 오류가 발생했습니다.');
          break;
        default:
          setErrorMsg('정보를 불러오는데 실패했습니다.');
      }

      navigate(PATH.HOME);
    }
  }, [error, kitDetailErrorOccur, setErrorMsg, navigate]);

  if (isLoading || !kit) return <Spinner />;
  if (!data) return <NoKitData />;

  return (
    <main className="w-kitDetailPage_pageWidth">
      <section className="flex w-full mb-8 h-kitDetailPage_productSectionHeight">
        <div className="flex-1 bg-gray-300"></div>

        <div className="flex flex-col justify-between flex-1 p-8 ">
          <header>
            <h1 className="text-xl font-bold">{kit?.productName}</h1>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-700">4.5</span>
              <StarRating value={4.5} />
              <a className="text-xs font-bold cursor-pointer text-primary hover:underline">
                128개의 상품 리뷰
              </a>
            </div>
            <p className="flex mt-4 text-xl font-bold text-center text-red-700">
              {formatMoneyKR(kit?.price)}
            </p>
          </header>

          <div className="flex justify-between mt-4">
            <div>
              <div className="flex items-center gap-4">
                <Button
                  className="bg-gray-700"
                  onClick={() => quantity > 1 && setQuantity(prev => prev - 1)}
                  disabled={quantity === 1}>
                  -
                </Button>
                <span className="text-lg font-bold">{quantity}</span>
                <Button
                  className="bg-gray-700"
                  onClick={() => setQuantity(prev => prev + 1)}
                  disabled={quantity === kit?.stock}>
                  +
                </Button>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-500">
                  총 금액: {formatMoneyKR(kit?.price * quantity)}
                </span>
              </div>
            </div>
            <Button
              className="bg-[#007AFD] hover:bg-[#0063CD]"
              onClick={handleOrder}>
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
