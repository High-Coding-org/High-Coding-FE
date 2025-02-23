import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { formatMoneyKR } from '@/utils/formatMoneyKR';

import OrderDiscount from './OrderDiscount/OrderDiscount';
import OrderItem from './OrderItem/OrderItem';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import ShippingInfo from './ShippingInfo/ShippingInfo';

const purchaseData = {
  name: '김가연',
  phoneNumber: '01023811425',
  discount: 0,
  shippingFee: 3000,
};
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
  // 페이지가 로드될 때 location.state 값이 없다면, home으로 redirect
  const navigate = useNavigate();
  const location = useLocation();
  const { kitId, productName, quantity, price } = location.state;

  const [data, setData] = useState({ ...purchaseData });
  const [deliveryNote, setDeliveryNote] = useState<string>('');
  const [regionalAddress, setRegionalAddress] = useState<string>('');
  const [detailedAddress, setDetailedAddress] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  // console.log('kitOrderPage에서 DN : ', deliveryNote);
  // console.log('kitOrderPage에서 지역 주소 : ', regionalAddress);
  // console.log('kitOrderPage에서 상세 주소 : ', detailedAddress);

  //결제 금액 (키트 가격 x 수량)
  const totalPrice = DUMMY_ORDER_ITEMS.price * DUMMY_ORDER_ITEMS.quantity;
  // ! 결제 금액 계산 => 없어질 놈
  const totalPayment = totalPrice + 3000;

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
      {/* BreadCrumb */}
      {/* <BreadcrumbAndTitle /> */}

      <main className="flex justify-between h-full w-pageWidth">
        {/* 주문 정보 */}
        <section className="w-[70%]">
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
          <OrderDiscount
            totalPrice={totalPrice}
            discount={discount}
            setDiscount={setDiscount}
          />

          {/* 결제수단 */}
          <PaymentMethod />
        </section>

        {/* 결제 정보 */}
        <nav className="sticky w-[25%] flex flex-col gap-4 top-24 h-fit ">
          <Label className="pl-4 font-bold">결제 정보</Label>
          <div className="flex flex-col gap-4 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between text-sm">
              <span>상품금액</span>
              <span>{formatMoneyKR(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>배송비</span>
              <span>{formatMoneyKR(data.shippingFee)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>할인</span>
              <span>-{formatMoneyKR(data.discount)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-sm font-bold">
              <span>결제금액</span>
              <span>{formatMoneyKR(totalPayment)}</span>
            </div>
          </div>
          <Button className="bg-[#007AFD] hover:bg-blue-800">결제하기</Button>
        </nav>
      </main>
    </>
  );
}
