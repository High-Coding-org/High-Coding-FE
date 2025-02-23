import { Label } from '@/components/ui/label';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

interface PriceInfoProps {
  totalPrice: number;
  discount: number;
}

export default function PriceInfo({ totalPrice, discount }: PriceInfoProps) {
  // todo: 회의를 통해 배송비를 결정하고, 배송비를 constants 폴더로 이동할 것.
  const DELIVERY_SHIPPING_FEE = 3000;

  const finalAmount = totalPrice + DELIVERY_SHIPPING_FEE - discount;
  const priceItems = [
    { label: '상품금액', amount: totalPrice },
    { label: '배송비', amount: DELIVERY_SHIPPING_FEE },
    { label: '할인', amount: -discount },
    { label: '결제금액', amount: finalAmount },
  ];

  return (
    <>
      <Label className="pl-4 font-bold">결제 정보</Label>

      <div className="flex flex-col gap-4 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
        {priceItems.map(({ label, amount }, index) => (
          <ul
            key={label}
            className="last:font-bold">
            <li className="flex justify-between text-sm ">
              <span>{label}</span>
              <span>
                {label === '할인' && '- '}
                {formatMoneyKR(Math.abs(amount))}
              </span>
            </li>

            {index === priceItems.length - 2 && <hr className="mt-4" />}
          </ul>
        ))}
      </div>
    </>
  );
}
