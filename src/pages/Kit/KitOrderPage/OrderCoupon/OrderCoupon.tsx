import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

import SectionContainer from '../components/SectionContainer';
import { IOrderCoupon } from '../type';

interface OrderCouponProps {
  totalPrice: number;
  discount: number;
  setDiscount: (discount: number) => void;
  coupons: IOrderCoupon[];
  setAppliedCouponID: (couponId: number) => void;
}

export default function OrderCoupon({
  totalPrice,
  discount,
  setDiscount,
  coupons,
  setAppliedCouponID,
}: OrderCouponProps) {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string>('');

  const handleItemClick = (coupon: IOrderCoupon) => {
    setSelectedCoupon(coupon.couponName);
    setDiscount(coupon.discountAmount);
    setIsCouponModalOpen(false);
    setAppliedCouponID(coupon.couponPublishId);
  };

  const handleResetClick = () => {
    setSelectedCoupon('');
    setDiscount(0);
    setAppliedCouponID(null);
  };

  return (
    <>
      <SectionContainer label="쿠폰">
        <div className="flex items-center justify-between px-6 py-3 border-t border-l border-r rounded-t-lg">
          <div className="flex items-center">
            <h3 className="font-semibold">쿠폰 적용하기</h3>
            <Button
              className="ml-5 text-black bg-white border border-gray-200 hover:bg-slate-100"
              disabled={coupons.length === 0}
              type="button"
              onClick={() => setIsCouponModalOpen(true)}>
              {selectedCoupon ? '변경' : '적용'}
            </Button>
            <Button
              className={`ml-3 text-black bg-white border border-gray-200 hover:bg-slate-100 ${
                selectedCoupon ? 'visible' : 'invisible'
              }`}
              type="button"
              onClick={handleResetClick}>
              초기화
            </Button>
          </div>
          <span className="font-bold">- {formatMoneyKR(discount)}</span>
        </div>

        <div className="flex justify-between px-6 py-5 bg-blue-100 border-b border-l border-r border-gray-200 rounded-b-lg">
          <h3 className="font-semibold">할인 적용 금액 : </h3>
          <span className="font-bold">
            {formatMoneyKR(totalPrice - discount)}
          </span>
        </div>
      </SectionContainer>

      {isCouponModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between mb-4 items center">
              <h2 className="mb-4 text-lg font-bold">쿠폰 사용</h2>
              <X
                onClick={() => setIsCouponModalOpen(false)}
                className="cursor-pointer hover:text-gray-500"
              />
            </div>
            <RadioGroup>
              <ul>
                {coupons.map(
                  (coupon, couponIndex) =>
                    coupon.status === 'available' && (
                      <li
                        key={`${couponIndex} - couponId: ${coupon.couponId}`}
                        onClick={() => handleItemClick(coupon)}
                        className={`w-64 p-4 mb-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-slate-100 hover:border-blue-500`}>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem
                            value={coupon.couponName}
                            checked={selectedCoupon === coupon.couponName}
                          />
                          <span className="font-bold">{coupon.couponName}</span>
                        </div>
                        <hr className="my-2" />
                        <span className="text-gray-500">{`할인 금액 : ${formatMoneyKR(coupon.discountAmount)}`}</span>
                      </li>
                    )
                )}
              </ul>
            </RadioGroup>
          </div>
        </div>
      )}
    </>
  );
}
