import { Button } from '@/components/ui/button';
import StarRating from '@/pages/KitDetailPage/StarRating';
//import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Kit {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  mainImage: string;
  detailImage: string;
}

interface KitDetailPageProps {
  kit: Kit;
}

/**
 * KitDetailPage 컴포넌트
 * 특정 키트의 상세 정보를 렌더링하며, 이미지, 이름, 가격, 별점, 리뷰 수, 수량 선택기 및 구매 버튼을 포함합니다.
 */
export default function KitDetailPage({ kit }: KitDetailPageProps) {
  //const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handlePurchase = () => {
    //navigate('/payment');
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="w-[60rem]">
      <div className="flex mb-8">
        {/*<img
            src={image}
            alt={name}
            className="w-[30rem] h-auto mb-4"
          />*/}

        {/* 대표 이미지 */}
        <div className="w-[30rem] h-[30rem] bg-gray-300"></div>

        <div className="w-[30rem] h-[30rem] p-8 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-lg">{kit.name}</h1>
            <p className="font-bold text-base text-red-700">
              {kit.price.toLocaleString()}원
            </p>
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-sm">{kit.rating}</span>
              <StarRating value={kit.rating} />
              <span className="font-semibold text-sm hover:underline cursor-pointer">
                {kit.reviews}개의 상품 리뷰
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <div className="flex items-center gap-4">
                <Button
                  className="px-4 py-2 bg-gray-200"
                  onClick={handleDecrease}
                  disabled={quantity === 1}>
                  -
                </Button>
                <span className="font-semibold text-lg">{quantity}</span>
                <Button
                  className="px-4 py-2 bg-gray-200"
                  onClick={handleIncrease}>
                  +
                </Button>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-500">
                  총 금액: {(kit.price * quantity).toLocaleString()}원
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
      </div>

      {/* 상세 이미지 */}
      <div className="w-full h-[1000px] bg-gray-300"></div>
    </div>
  );
}
