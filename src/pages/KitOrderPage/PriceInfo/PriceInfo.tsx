import { Label } from '@/components/ui/label';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

interface PriceInfoProps {
  totalPrice: number;
  discount: number;
}

export default function PriceInfo({ totalPrice, discount }: PriceInfoProps) {
  return (
    <>
      <Label className="pl-4 font-bold">결제 정보</Label>

      <div className="flex flex-col gap-4 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-between text-sm">
          <span>상품금액</span>
          <span>{formatMoneyKR(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>배송비</span>
          {/* // todo: 배송비 실제 데이터로 교체 */}
          <span>{formatMoneyKR(3000)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>할인</span>
          <span>- {formatMoneyKR(discount)}</span>
        </div>
        <hr />
        <div className="flex justify-between text-sm font-bold">
          <span>결제금액</span>
          {/* // todo: 배송비 실제 데이터로 교체 */}
          <span>{formatMoneyKR(totalPrice + 3000 - discount)}</span>
        </div>
      </div>
    </>
  );
}
