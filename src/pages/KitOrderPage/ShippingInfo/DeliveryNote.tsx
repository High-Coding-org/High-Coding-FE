import { useEffect, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

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
  value: string;
  onChange: (value: string) => void;
  error: FieldError;
}

export default function DeliveryNote({
  value: deliveryNote,
  onChange,
  error,
}: DeliveryNoteProps) {
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const deliveryNoteClass = (inputMode: boolean) =>
    `focus-visible:ring-0 focus:ring-0 ${
      inputMode && error ? 'border-red-500' : ''
    }`;

  const handleDeliveryNoteChange = (value: string) => {
    if (value === '직접 입력하기') {
      onChange('');
      setInputMode(true);
    } else {
      onChange(value);
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
        <SelectTrigger className={deliveryNoteClass(!inputMode)}>
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
          className={deliveryNoteClass(inputMode)}
          ref={inputRef}
          type="text"
          placeholder={DELIVERY_PLACEHOLDER.INPUT}
          onChange={e => onChange(e.target.value)}
          value={deliveryNote}
        />
      )}
    </>
  );
}
