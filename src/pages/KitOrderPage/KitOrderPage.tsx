import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';

import OrderDiscount from './OrderDiscount/OrderDiscount';
import OrderItem from './OrderItem/OrderItem';
import ShippingInfo from './ShippingInfo/ShippingInfo';

const purchaseData = {
  name: '김가연',
  phoneNumber: '01023811425',
  discount: 0,
  shippingFee: 3000,
};
const DUMMY_ORDER_ITEMS = {
  productName: '스마트팜',
  price: 200000,
  quantity: 2,
};
const addresses = [
  '경상북도 상주시 경상대로 2559',
  '서울특별시 강남구 테헤란로 123',
  '부산광역시 해운대구 해운대로 456',
];

export default function KitOrderPage() {
  // 페이지가 로드될 때 location.state 값이 없다면, home으로 redirect
  const navigate = useNavigate();
  const location = useLocation();
  const { kitId, productName, quantity, price } = location.state;

  const [data, setData] = useState({ ...purchaseData });
  const [deliveryNote, setDeliveryNote] = useState<string>('');
  const [regionalAddress, setRegionalAddress] = useState<string>('');
  const [detailedAddress, setDetailedAddress] = useState<string>('');
  const [discountValue, setDiscountValue] = useState<number>(0);
  // console.log('kitOrderPage에서 DN : ', deliveryNote);
  // console.log('kitOrderPage에서 지역 주소 : ', regionalAddress);
  // console.log('kitOrderPage에서 상세 주소 : ', detailedAddress);

  //결제 금액 (키트 가격 x 수량)
  const totalPrice = DUMMY_ORDER_ITEMS.price * DUMMY_ORDER_ITEMS.quantity;
  // ! 결제 금액 계산 => 없어질 놈
  const totalPayment = totalPrice + data.shippingFee - data.discount;

  const handleDiscountChange = (discountValue: number) => {
    setData(prevData => ({
      ...prevData,
      discount: discountValue,
    }));
  };

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
            name={data.name}
            phoneNumber={data.phoneNumber}
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

          {/* 할인 / 쿠폰 */}
          <OrderDiscount
            discount={data.discount}
            totalPayment={totalPayment}
            onDiscountChange={handleDiscountChange}
            //
            totalPrice={totalPrice}
            setDiscountValue={setDiscountValue}
          />

          {/* 결제수단 */}
          <section className="flex flex-col gap-4 mb-6">
            <Label className="pl-4 font-bold">결제수단</Label>
            <div className="px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <RadioGroup defaultValue="option-one">
                {PAYMENT_METHODS.map((method, index) => (
                  <div key={method.id}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={method.id}
                        id={method.id}
                      />
                      <Label
                        htmlFor={method.id}
                        className="font-bold">
                        {method.label}
                      </Label>
                    </div>
                    {index < PAYMENT_METHODS.length - 1 && (
                      <hr className="my-2" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>
          </section>
        </section>

        {/* 결제 정보 */}
        <nav className="sticky w-[25%] flex flex-col gap-4 top-24 h-fit ">
          <Label className="pl-4 font-bold">결제 정보</Label>
          <div className="flex flex-col gap-4 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between text-sm">
              <span>상품금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>배송비</span>
              <span>{data.shippingFee.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>할인</span>
              <span>-{data.discount.toLocaleString()}원</span>
            </div>
            <hr />
            <div className="flex justify-between text-sm font-bold">
              <span>결제금액</span>
              <span>{totalPayment.toLocaleString()}원</span>
            </div>
          </div>
          <Button className="bg-[#007AFD] hover:bg-blue-800">결제하기</Button>
        </nav>
      </main>
    </>
  );
}
