import { formatMoneyKR } from '@/utils/formatMoneyKR';

import SectionContainer from '../components/SectionContainer';

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
    <SectionContainer
      label="주문 상품"
      className="p-6">
      <h3 className="text-base font-bold">{productName}</h3>
      <p className="my-1 text-sm">수량: {quantity}개</p>
      <p className="text-xs text-gray-500">키트 가격: {formatMoneyKR(price)}</p>
    </SectionContainer>
  );
}
