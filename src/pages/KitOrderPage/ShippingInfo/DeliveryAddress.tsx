import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DeliveryAddressProps {
  setRegionalAddress: (regionalAddress: string) => void;
  setDetailedAddress: (detailedAddress: string) => void;
}

export default function DeliveryAddress({
  setRegionalAddress,
  setDetailedAddress,
}: DeliveryAddressProps) {
  const [address, setAddress] = useState<string>('');
  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
    setRegionalAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <main className="w-full">
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
          onClick={handleClick}>
          주소 검색
        </Button>
      </div>
      <Input
        type="text"
        placeholder="상세 주소"
        onChange={e => setDetailedAddress(e.target.value)}
      />
    </main>
  );
}
