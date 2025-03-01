import { FieldError } from 'react-hook-form';

import { Input } from '@/components/ui/input';

interface DetailedAddressProps {
  value: string;
  onChange: (value: string) => void;
  error: FieldError;
}

export default function DetailedAddress({
  value,
  onChange,
  error,
}: DetailedAddressProps) {
  return (
    <div className="w-full">
      <Input
        className={`w-full disabled:cursor-default disabled:opacity-100 focus-visible:ring-0 focus:ring-0 ${
          error ? 'border-red-500' : ''
        }`}
        type="text"
        placeholder="상세 주소"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
