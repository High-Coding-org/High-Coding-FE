import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDeliveryAddress } from '@/hooks/useDeliveryAddress';

interface DeliveryAddressProps {
  setRegionalAddress: (regionalAddress: string) => void;
  setDetailedAddress: (detailedAddress: string) => void;
}

export default function DeliveryAddress({
  setRegionalAddress,
  setDetailedAddress,
}: DeliveryAddressProps) {
  const { address, handleSearchAddress } = useDeliveryAddress();

  useEffect(() => {
    if (!address) return;

    setRegionalAddress(address);
  }, [address, setRegionalAddress]);

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        <Input
          className="w-full disabled:cursor-default disabled:opacity-100"
          type="text"
          disabled
          placeholder="지역 주소"
          value={address}
        />
        <Button
          type="button"
          onClick={handleSearchAddress}>
          주소 검색
        </Button>
      </div>
      <Input
        type="text"
        placeholder="상세 주소"
        onChange={e => setDetailedAddress(e.target.value)}
      />
    </div>
  );
}
