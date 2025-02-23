import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DELIVERY_NOTES, DELIVERY_PLACEHOLDER } from '@/constants/delivery';

interface DeliveryNoteProps {
  deliveryNote: string;
  setDeliveryNote: (deliveryNote: string) => void;
}

export default function DeliveryNote({
  deliveryNote,
  setDeliveryNote,
}: DeliveryNoteProps) {
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
    <>
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
    </>
  );
}
