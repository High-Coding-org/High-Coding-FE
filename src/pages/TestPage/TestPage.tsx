import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TestPage() {
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

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <main className="w-96">
      <div className="flex gap-2 mb-2">
        <Input
          className="w-full disabled:cursor-default disabled:opacity-100"
          type="text"
          disabled
          placeholder="지역 주소"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <Button
          type="button"
          onClick={handleClick}>
          주소 검색
        </Button>
      </div>
      <div>
        <Input
          type="text"
          placeholder="상세 주소"
        />
      </div>
    </main>
  );
}
