import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

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
const DUMMY_ORDER_ITEMS = {
  productName: '스마트팜',
  price: 200000,
  quantity: 2,
};

export default function KitOrderPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { kitId, productName, quantity, price } = location.state;

  const [deliveryNote, setDeliveryNote] = useState<string>('');
  const [regionalAddress, setRegionalAddress] = useState<string>('');
  const [detailedAddress, setDetailedAddress] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const totalPrice = DUMMY_ORDER_ITEMS.price * DUMMY_ORDER_ITEMS.quantity;

  // todo: 비정상적 접근시 home으로 redirect 하는 코드 구현
  // useEffect(() => {
  //   if (!kitId || !location.state) {
  //     // ? error store 하나 추가해서 alert 창 + 홈으로 리다이렉트
  //     alert('주문 정보를 불러오는데 실패했습니다.');
  //     navigate(PATH.HOME);
  //   }
  // }, [location.state]);

  return (
    <>
      {/* <BreadcrumbAndTitle /> */}

      <main className="flex justify-between h-full w-pageWidth">
        {/* 주문 정보 */}
        <article className="w-[70%]">
          {/* 배송지 */}
          <ShippingInfo
            name={DUMMY_PURCHASE_DATA.name}
            phoneNumber={DUMMY_PURCHASE_DATA.phoneNumber}
            deliveryNote={deliveryNote}
            setDeliveryNote={setDeliveryNote}
            setRegionalAddress={setRegionalAddress}
            setDetailedAddress={setDetailedAddress}
          />

          {/* // todo: 더미데이터를 실제 데이터로 교체해야 함. */}
          {/* 주문상품 */}
          <OrderItem
            productName={DUMMY_ORDER_ITEMS.productName}
            quantity={DUMMY_ORDER_ITEMS.quantity}
            price={DUMMY_ORDER_ITEMS.price}
          />

          {/* 쿠폰 */}
          <OrderCoupon
            totalPrice={totalPrice}
            discount={discount}
            setDiscount={setDiscount}
          />

          {/* 결제 수단 */}
          <PaymentMethod setPaymentMethod={setPaymentMethod} />
        </article>

        {/* 결제 정보 */}
        <nav className="sticky w-[25%] flex flex-col gap-4 top-24 h-fit ">
          <PriceInfo
            totalPrice={totalPrice}
            discount={discount}
          />
          <Button className="bg-[#007AFD] hover:bg-blue-800">결제하기</Button>
        </nav>
      </main>
    </>
  );
}
