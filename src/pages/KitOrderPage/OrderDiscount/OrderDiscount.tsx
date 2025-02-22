import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Coupon {
  name: string;
  type: 'percent' | 'amount';
  percent: number;
  amount: number;
  date: string;
}

interface OrderDiscountProps {
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

export default function OrderDiscount({
  totalPrice,
  discount,
  setDiscount,
}: OrderDiscountProps) {
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
      <Label className="pl-4 font-bold">쿠폰</Label>

      <div className="flex flex-col my-6 font-bold">
        <div className="flex items-center justify-between px-6 py-4 border-t border-l border-r rounded-t-lg">
          <div className="flex items-center">
            <h3>쿠폰 적용하기</h3>
            <Button
              className="ml-5 text-black bg-white border border-gray-200 hover:bg-white"
              onClick={() => setIsCouponModalOpen(true)}>
              변경
            </Button>
          </div>
          <span>- {discount}원</span>
        </div>

        <div className="flex justify-between px-6 py-6 bg-blue-100 border-b border-l border-r border-gray-200 rounded-b-lg">
          <span>할인 적용 금액:</span>
          <span>{totalPrice - discount}원</span>
        </div>
      </div>

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
                    className="w-64 p-4 mb-2 border border-gray-200 rounded-lg cursor-pointer">
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

/**
    KitOrderPage.tsx
        필요한 변수 : 얼마나 할인됐는지, 쿠폰 적용 여부
    OrderDiscount.tsx
        필요한 변수 : 

    const func =()=>{
        // 쿠폰 => 1. 단순 금액 할인형 / 2. 퍼센티지 할인형 
        const discount = dummyCoupons.
        setODC(쿠폰)
    }
 */
