import { Control, Controller, FieldErrors } from 'react-hook-form';

import SectionContainer from '../components/SectionContainer';
import { kitOrderValues } from '../type';
import DeliveryNote from './DeliveryNote';
import DetailedAddress from './DetailedAddress';
import RegionalAddressInput from './RegionalAddress';
import ShippingUser from './ShippingUser';

interface ShippingInfoProps {
  name: string;
  phoneNumber: string;
  control: Control<kitOrderValues>;
  errors: FieldErrors<kitOrderValues>;
}

/**
 * 유저에게 배송할 정보를 보여주는 컴포넌트 입니다.
 * 유저명, 전화번호, 배송지 주소, 배송메모를 표시합니다.
 */

export default function ShippingInfo({
  name,
  phoneNumber,
  control,
  errors,
}: ShippingInfoProps) {
  return (
    <SectionContainer
      label="배송 정보"
      className="flex flex-col gap-2 p-6">
      {/* 배송자 정보 */}
      <ShippingUser
        name={name}
        phoneNumber={phoneNumber}
      />

      <br />

      {/* 배송지 주소 */}
      <Controller
        name="regionalAddress"
        control={control}
        rules={{ required: '지역 주소를 입력해주세요.' }}
        render={({ field }) => (
          <RegionalAddressInput
            value={field.value}
            onChange={field.onChange}
            error={errors.regionalAddress}
          />
        )}
      />

      <Controller
        name="detailedAddress"
        control={control}
        rules={{ required: '상세 주소를 입력해주세요.' }}
        render={({ field }) => (
          <DetailedAddress
            value={field.value}
            onChange={field.onChange}
            error={errors.detailedAddress}
          />
        )}
      />

      <Controller
        name="deliveryNote"
        control={control}
        rules={{ required: '배송 메모를 입력해주세요.' }}
        render={({ field }) => (
          <DeliveryNote
            value={field.value}
            onChange={field.onChange}
            error={errors.deliveryNote}
          />
        )}
      />
    </SectionContainer>
  );
}
