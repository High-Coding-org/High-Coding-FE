import { Label } from '@/components/ui/label';

import DeliveryNote from './DeliveryNote';
import ShippingUser from './ShippingUser';

interface ShippingInfoProps {
  name: string;
  phoneNumber: string;
  deliveryNote: string;
  setDeliveryNote: (deliveryNote: string) => void;
}

/*
  1. 부모에게 set배송메모 를 인자로 받는다.
  2. 그리고 이 컴포넌트에서 배송메모를 변경할 때마다 부모에게 전달한다.
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
        <ShippingUser
          name={name}
          phoneNumber={phoneNumber}
        />

        {/* 배송지 주소, daumPostcode 컴포넌트 사용 */}
        {/* <DaumPostCode /> */}

        {/* 배송 메모 */}
        <DeliveryNote
          deliveryNote={deliveryNote}
          setDeliveryNote={setDeliveryNote}
        />
      </div>
    </div>
  );
}
