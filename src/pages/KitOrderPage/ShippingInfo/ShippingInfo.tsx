import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DELIVERY_NOTES,
  DELIVERY_PLACEHOLDER,
} from '@/constants/deliveryNotes';

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
  const [inputMode, setInputMode] = useState(false);

  const handleDeliveryNoteChange = (value: string) => {
    if (value === '직접 입력하기') {
      setDeliveryNote('');
      setInputMode(true);
    } else {
      setDeliveryNote(value);
      setInputMode(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <Label className="pl-4 font-bold">배송 정보</Label>

      <div className="flex flex-col gap-2 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <span className="font-bold">{name}</span>
          <span className="text-xs text-gray-500">{phoneNumber}</span>
        </div>

        {/* 배송지 주소, daumPostcode 컴포넌트 사용 */}
        {/* <DaumPostCode /> */}

        {/* 배송 메모 */}
        <Select onValueChange={handleDeliveryNoteChange}>
          <SelectTrigger>
            <SelectValue placeholder={DELIVERY_PLACEHOLDER.SELECT} />
          </SelectTrigger>
          <SelectContent>
            {DELIVERY_NOTES.map((note, index) => (
              <SelectItem
                key={index + note}
                value={note}>
                {note}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {inputMode && (
          <Input
            type="text"
            placeholder={DELIVERY_PLACEHOLDER.INPUT}
            onChange={e => setDeliveryNote(e.target.value)}
            value={deliveryNote}
          />
        )}
      </div>
    </div>
  );
}
