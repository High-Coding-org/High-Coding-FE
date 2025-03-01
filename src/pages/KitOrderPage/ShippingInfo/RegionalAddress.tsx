import { useEffect } from 'react';
import { FieldError } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDeliveryAddress } from '@/hooks/useDeliveryAddress';

interface RegionalAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  error: FieldError;
}

export default function RegionalAddressInput({
  value: regionalAddress,
  onChange,
  error,
}: RegionalAddressInputProps) {
  const { address, handleSearchAddress } = useDeliveryAddress();

  useEffect(() => {
    if (!address) return;

    onChange(address);
  }, [address, onChange]);

  return (
    <div className="flex gap-2">
      <Input
        className={`w-full disabled:cursor-default disabled:opacity-100 ${
          error ? 'border-red-500' : ''
        }`}
        type="text"
        disabled
        placeholder="지역 주소"
        value={regionalAddress}
      />
      <Button
        type="button"
        onClick={handleSearchAddress}>
        주소 검색
      </Button>
    </div>
  );
}
