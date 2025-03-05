import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Address } from 'react-daum-postcode';

export function useDeliveryAddress() {
  const [address, setAddress] = useState<string>('');
  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address) => {
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
  };

  const handleSearchAddress = () => {
    open({ onComplete: handleComplete });
  };

  return {
    address,
    handleSearchAddress,
  };
}
