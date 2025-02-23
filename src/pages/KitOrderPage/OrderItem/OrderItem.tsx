import { Label } from '@/components/ui/label';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

interface OrderItemProps {
  productName: string;
  price: number;
  quantity: number;
}

export default function OrderItem({
  productName,
  price,
  quantity,
}: OrderItemProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <Label className="pl-4 font-bold">주문상품</Label>

      <div className="px-6 py-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-base font-bold">{productName}</h3>
        <p className="my-1 text-sm">수량: {quantity}개</p>
        <p className="text-xs text-gray-500">
          키트 가격: {formatMoneyKR(price)}
        </p>
      </div>
    </div>
  );
}
