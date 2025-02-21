import { Label } from '@/components/ui/label';

import DeliveryAddress from './DeliveryAddress';
import DeliveryNote from './DeliveryNote';
import ShippingUser from './ShippingUser';

interface ShippingInfoProps {
  name: string;
  phoneNumber: string;
  deliveryNote: string;
  setDeliveryNote: (deliveryNote: string) => void;
}

/**
 * 유저에게 배송할 정보를 보여주는 컴포넌트 입니다.
 * 유저명, 전화번호, 배송지 주소, 배송메모를 표시합니다.
 */

export default function ShippingInfo({
  name,
  phoneNumber,
  deliveryNote,
  setDeliveryNote,
}: ShippingInfoProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <Label className="pl-4 font-bold">배송 정보</Label>

      <div className="flex flex-col gap-2 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
        {/* 배송자 정보 */}
        <ShippingUser
          name={name}
          phoneNumber={phoneNumber}
        />

        {/* 배송지 주소 */}
        <DeliveryAddress />

        {/* 배송 메모 */}
        <DeliveryNote
          deliveryNote={deliveryNote}
          setDeliveryNote={setDeliveryNote}
        />
      </div>
    </div>
  );
}
