import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

import SectionContainer from '../components/SectionContainer';

interface Coupon {
  name: string;
  type: 'percent' | 'amount';
  percent: number;
  amount: number;
  date: string;
}

interface OrderCouponProps {
  totalPrice: number;
  discount: number;
  setDiscount: (discount: number) => void;
}

const dummyCoupons: Coupon[] = [
  {
    name: '10% 할인 쿠폰',
    type: 'percent',
    percent: 10,
    amount: 0,
    date: '2025-02-21',
  },
  {
    name: '배송비 무료 쿠폰',
    type: 'amount',
    percent: 0,
    amount: 3000,
    date: '2025-02-21',
  },
  {
    name: '5,000원 할인 쿠폰',
    type: 'amount',
    percent: 0,
    amount: 5000,
    date: '2025-02-21',
  },
];

export default function OrderCoupon({
  totalPrice,
  discount,
  setDiscount,
}: OrderCouponProps) {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string>('');

  const handleDiscountSelect = (couponIndex: number) => {
    const coupon = dummyCoupons[couponIndex];
    const discountAmount =
      coupon.type === 'percent'
        ? (totalPrice * coupon.percent) / 100
        : coupon.amount;

    setDiscount(discountAmount);
    setIsCouponModalOpen(false);
  };

  const handleRadioGroupItemClick = (couponIndex: number) => {
    const selected = dummyCoupons[couponIndex];

    setSelectedCoupon(selected.name);
    handleDiscountSelect(couponIndex);
  };

  return (
    <>
      <SectionContainer label="쿠폰">
        <div className="flex items-center justify-between px-6 py-4 border-t border-l border-r rounded-t-lg">
          <div className="flex items-center">
            <h3 className="font-semibold">쿠폰 적용하기</h3>
            <Button
              className="ml-5 text-black bg-white border border-gray-200 hover:bg-slate-100"
              onClick={() => setIsCouponModalOpen(true)}>
              {selectedCoupon ? '변경' : '적용'}
            </Button>
          </div>
          <span className="font-bold">- {formatMoneyKR(discount)}</span>
        </div>

        <div className="flex justify-between px-6 py-6 bg-blue-100 border-b border-l border-r border-gray-200 rounded-b-lg">
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
            <ul>
              <RadioGroup>
                {dummyCoupons.map((coupon, couponIndex) => (
                  <li
                    key={`${couponIndex} - ${coupon.name}`}
                    onClick={() => handleRadioGroupItemClick(couponIndex)}
                    className="w-64 p-4 mb-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value={coupon.name}
                        checked={selectedCoupon === coupon.name}
                      />
                      <span className="font-bold">{coupon.name}</span>
                    </div>
                    <hr className="my-2 " />
                    <span className="text-gray-500">~ {coupon.date}</span>
                  </li>
                ))}
              </RadioGroup>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
