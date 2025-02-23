import SectionContainer from '../components/SectionContainer';
import DeliveryAddress from './DeliveryAddress';
import DeliveryNote from './DeliveryNote';
import ShippingUser from './ShippingUser';

interface ShippingInfoProps {
  name: string;
  phoneNumber: string;
  deliveryNote: string;
  setDeliveryNote: (deliveryNote: string) => void;
  setRegionalAddress: (regionalAddress: string) => void;
  setDetailedAddress: (detailedAddress: string) => void;
}

/**
 * 유저에게 배송할 정보를 보여주는 컴포넌트 입니다.
 * 유저명, 전화번호, 배송지 주소, 배송메모를 표시합니다.
 */

export default function ShippingInfo({
  name,
  phoneNumber,
  deliveryNote,
  setDeliveryNote,
  setRegionalAddress,
  setDetailedAddress,
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

      <div className="mt-1" />

      {/* 배송지 주소 */}
      <DeliveryAddress
        setRegionalAddress={setRegionalAddress}
        setDetailedAddress={setDetailedAddress}
      />

      {/* 배송 메모 */}
      <DeliveryNote
        deliveryNote={deliveryNote}
        setDeliveryNote={setDeliveryNote}
      />
    </SectionContainer>
  );
}
