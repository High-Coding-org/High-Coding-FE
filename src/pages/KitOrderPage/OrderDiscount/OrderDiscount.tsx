import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Coupon {
  name: string;
  discountPercent: number;
  discount: number;
}

interface OrderDiscountProps {
  discount: number;
  totalPayment: number;
  onDiscountChange: (discount: number) => void;
  //
  totalPrice: number;
  setDiscountValue: (discount: number) => void;
}

const coupons: Coupon[] = [
  { name: '10% 할인 쿠폰', discountPercent: 10, discount: 20000 },
  { name: '배송비 무료 쿠폰', discountPercent: 20, discount: 3000 },
  { name: '5,000원 할인 쿠폰', discountPercent: 30, discount: 5000 },
];

export default function OrderDiscount({
  discount,
  totalPayment,
  onDiscountChange,
  totalPrice,
  setDiscountValue,
}: OrderDiscountProps) {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string>('');

  const handleDiscountSelect = (discountValue: number) => {
    onDiscountChange(discountValue);
    setIsCouponModalOpen(false);
  };

  const handleRadioGroupItemClick = (couponName: string) => {
    const selected = coupons.find(coupon => coupon.name === couponName);
    if (selected) {
      setSelectedCoupon(couponName);
      handleDiscountSelect(selected.discount);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 font-bold">
        <div>
          <div className="flex items-center justify-between px-6 py-4 border-t border-l border-r rounded-t-lg">
            <div>
              할인/쿠폰
              <Button
                className="ml-5 text-black bg-white border border-gray-200 hover:bg-white"
                onClick={() => setIsCouponModalOpen(true)}>
                변경
              </Button>
            </div>
            -{discount.toLocaleString()}원
          </div>
          <div className="flex justify-between px-6 py-6 bg-blue-100 border-b border-l border-r border-gray-200 rounded-b-lg">
            <span>총 할인 금액:</span> {totalPayment.toLocaleString()}원
          </div>
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
                {coupons.map((coupon, index) => (
                  <li
                    key={index}
                    onClick={() => handleRadioGroupItemClick(coupon.name)}
                    className="w-64 p-4 mb-2 border border-gray-200 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value={coupon.name}
                        checked={selectedCoupon === coupon.name}
                      />
                      <span className="font-bold">{coupon.discount}원</span>
                    </div>
                    <hr className="my-2" /> {coupon.name}
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
