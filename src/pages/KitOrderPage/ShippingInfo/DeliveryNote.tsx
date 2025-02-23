import { useEffect, useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDeliveryNoteChange = (value: string) => {
    if (value === '직접 입력하기') {
      setDeliveryNote('');
      setInputMode(true);
    } else {
      setDeliveryNote(value);
      setInputMode(false);
    }
  };

  useEffect(() => {
    if (!inputMode) return;

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [inputMode]);

  return (
    <>
      <Select onValueChange={handleDeliveryNoteChange}>
        <SelectTrigger className="focus-visible:ring-0 focus:ring-0">
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
          ref={inputRef}
          type="text"
          placeholder={DELIVERY_PLACEHOLDER.INPUT}
          onChange={e => setDeliveryNote(e.target.value)}
          value={deliveryNote}
        />
      )}
    </>
  );
}
