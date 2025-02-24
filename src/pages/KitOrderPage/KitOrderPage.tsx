import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui/button';

import OrderCoupon from './OrderCoupon/OrderCoupon';
import OrderItem from './OrderItem/OrderItem';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import PriceInfo from './PriceInfo/PriceInfo';
import ShippingInfo from './ShippingInfo/ShippingInfo';

const DUMMY_PURCHASE_DATA = {
  name: '김가연',
  phoneNumber: '01023811425',
};

export default function KitOrderPage() {
  const navigate = useNavigate();
  const { kitId, productName, quantity, price } = useParams();
  const [deliveryNote, setDeliveryNote] = useState<string>('');
  const [regionalAddress, setRegionalAddress] = useState<string>('');
  const [detailedAddress, setDetailedAddress] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const totalPrice = Number(price) * Number(quantity);

  return (
    <>
      {/* <BreadcrumbAndTitle /> */}

      <main className="flex justify-between h-full w-pageWidth text-[#222]">
        {/* 주문 정보 */}
        <div className="w-[70%]">
          {/* 배송지 */}
          <ShippingInfo
            name={DUMMY_PURCHASE_DATA.name}
            phoneNumber={DUMMY_PURCHASE_DATA.phoneNumber}
            deliveryNote={deliveryNote}
            setDeliveryNote={setDeliveryNote}
            setRegionalAddress={setRegionalAddress}
            setDetailedAddress={setDetailedAddress}
          />

          {/* 주문상품 */}
          <OrderItem
            productName={productName}
            quantity={Number(quantity)}
            price={Number(price)}
          />

          {/* 쿠폰 */}
          <OrderCoupon
            totalPrice={totalPrice}
            discount={discount}
            setDiscount={setDiscount}
          />

          {/* 결제 수단 */}
          <PaymentMethod setPaymentMethod={setPaymentMethod} />
        </div>

        {/* 결제 정보 */}
        <nav className="sticky w-[25%] flex flex-col top-14 h-fit ">
          <PriceInfo
            totalPrice={totalPrice}
            discount={discount}
          />
          <Button className="bg-primary active:bg-blue-800">결제하기</Button>
        </nav>
      </main>
    </>
  );
}
